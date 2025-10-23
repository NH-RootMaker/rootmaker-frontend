import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '@/components/topnav';
import CommonButton from '@/components/common-button';
import VirtualKeyboard from '@/components/virtual-keyboard';
import Modal from '@/components/modal';
import { preloadImages, preloadLottieAnimation } from '@/utils/imagePreloader';
import { saveHabitLog } from '@/services/api';
import { completeTodayMission } from '@/utils/daily-progress';
import * as S from './TransferPage.styles';

const TransferPage = React.memo(() => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [preloadedAnimation, setPreloadedAnimation] = useState(null);
  const [showInsufficientAlert, setShowInsufficientAlert] = useState(false);
  const [remainingAmount, setRemainingAmount] = useState(0);
  const [isSavingHabit, setIsSavingHabit] = useState(false);

  // ActionPage에서 사용할 이미지와 애니메이션 미리 로드
  useEffect(() => {
    const actionPageImages = ['/wateringset.webp'];
    
    // 이미지와 애니메이션 병렬로 preload
    Promise.all([
      preloadImages(actionPageImages),
      preloadLottieAnimation()
    ]).then(([_, animationData]) => {
      if (animationData) {
        setPreloadedAnimation(animationData);
      }
    }).catch(error => {
      console.warn('Preloading failed:', error);
    });
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAmountFocus = () => {
    setIsKeyboardVisible(true);
  };

  const handleKeyboardInput = (value: string) => {
    if (value === 'delete') {
      setAmount(prev => prev.slice(0, -1));
    } else if (value === 'clear') {
      setAmount('');
    } else {
      // 숫자만 입력 허용, 최대 8자리
      if (/^\d$/.test(value) && amount.length < 8) {
        setAmount(prev => prev + value);
      }
    }
  };

  const handleKeyboardClose = () => {
    setIsKeyboardVisible(false);
  };

  const handleTransfer = async () => {
    if (amount && parseInt(amount) > 0) {
      const transferAmount = parseInt(amount);
      
      // 오늘의 누적 입금 금액 가져오기
      const today = new Date().toDateString();
      const dailyTransfers = JSON.parse(localStorage.getItem('daily-transfers') || '{}');
      const todayTotal = dailyTransfers[today] || 0;
      const newTotal = todayTotal + transferAmount;
      
      // 누적 금액 저장
      dailyTransfers[today] = newTotal;
      localStorage.setItem('daily-transfers', JSON.stringify(dailyTransfers));
      
      // 5000원 이상 누적 시 챌린지 성공
      if (newTotal >= 5000) {
        setIsSavingHabit(true);
        
        try {
          // 사용자 정보 가져오기
          const username = localStorage.getItem('user-name') || '사용자';
          const accountNumber = localStorage.getItem('account-number') || '123-4567-8910';
          
          // API로 습관 로그 저장 (habitId: 1은 저축 습관이라고 가정)
          await saveHabitLog(username, accountNumber, {
            habitId: 1,
            isSuccess: true
          });
          
          console.log('습관 로그 저장 성공');
        } catch (error) {
          console.error('습관 로그 저장 실패:', error);
          // API 실패해도 프론트 진행 계속
        }
        
        // 오늘의 미션 완료 처리
        completeTodayMission();
        
        setIsSavingHabit(false);
        
        // 축하 페이지로 이동 (preloaded 애니메이션 데이터와 함께)
        navigate('/action', { 
          state: { preloadedAnimation } 
        });
      } else {
        // 부족한 금액 계산 및 알림
        const remaining = 5000 - newTotal;
        setRemainingAmount(remaining);
        setShowInsufficientAlert(true);
      }
    }
  };

  const formatAmount = (value: string) => {
    if (!value) return '';
    return parseInt(value).toLocaleString();
  };

  const handleQuickTransfer = () => {
    setAmount(remainingAmount.toString());
    setShowInsufficientAlert(false);
  };

  const handleCloseAlert = () => {
    setShowInsufficientAlert(false);
    navigate('/payback');
  };

  return (
    <S.Container>
      <TopNav 
        isBack 
        title="나의 로드맵" 
        onBackClick={handleBackClick}
        whiteBackground={true}
      />
      
      <S.Content>
        <S.AccountSection>
          <S.AccountTitle><S.GreenText>청약통장 이름</S.GreenText>으로</S.AccountTitle>
          <S.AccountNumber>버퍼 계좌번호 <S.AccountNumberValue>123-4567-8910-12</S.AccountNumberValue></S.AccountNumber>
        </S.AccountSection>

        <S.QuestionSection>
          <S.AmountInputContainer>
            <S.AmountInput 
              value={formatAmount(amount)}
              onFocus={handleAmountFocus}
              readOnly
              placeholder="얼마를 입금할까요?"
            />
            <S.WonUnit>원</S.WonUnit>
          </S.AmountInputContainer>
        </S.QuestionSection>

        <S.MyAccountSection>
          <S.MyAccountRow>
            <S.MyAccountTitle>생활비계좌</S.MyAccountTitle>
            <S.Balance>현재 잔액 <S.BalanceAmount>1,250,000원</S.BalanceAmount></S.Balance>
          </S.MyAccountRow>
        </S.MyAccountSection>

      

        <S.ButtonContainer>
          <CommonButton 
            variant="primary" 
            width="100%"
            onClick={handleTransfer}
            disabled={!amount || parseInt(amount) === 0 || isSavingHabit}
          >
            {isSavingHabit ? '완료 처리 중...' : '이체하기'}
          </CommonButton>
        </S.ButtonContainer>
      </S.Content>

      {isKeyboardVisible && (
        <VirtualKeyboard
          onInput={handleKeyboardInput}
          onClose={handleKeyboardClose}
        />
      )}

      {/* 부족한 금액 알림 모달 */}
      <Modal
        isOpen={showInsufficientAlert}
        onClose={handleCloseAlert}
        title="안내"
        content={`오늘 페이백을 받으려면\n${remainingAmount.toLocaleString()}원 더 입금해야 해요!`}
        buttonText={`${remainingAmount.toLocaleString()}원 입금하기`}
        onButtonClick={handleQuickTransfer}
      />
    </S.Container>
  );
});

TransferPage.displayName = 'TransferPage';

export default TransferPage;