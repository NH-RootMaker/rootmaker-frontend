import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '@/components/topnav';
import CommonButton from '@/components/common-button';
import VirtualKeyboard from '@/components/virtual-keyboard';
import * as S from './TransferPage.styles';

const TransferPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

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

  const handleTransfer = () => {
    if (amount && parseInt(amount) > 0) {
      const transferAmount = parseInt(amount);
      
      // 5000원 이상 이체 시 챌린지 성공 처리
      if (transferAmount >= 5000) {
        // 챌린지 성공 상태를 localStorage에 저장
        const currentProgress = JSON.parse(localStorage.getItem('challenge-progress') || '{"completed": [1,2,3], "current": 4}');
        if (!currentProgress.completed.includes(currentProgress.current)) {
          currentProgress.completed.push(currentProgress.current);
          currentProgress.current = currentProgress.current + 1;
          localStorage.setItem('challenge-progress', JSON.stringify(currentProgress));
        }
        
        // 축하 페이지로 이동
        navigate('/action');
      } else {
        alert(`${formatAmount(amount)}원 이체가 완료되었습니다.\n챌린지 성공을 위해서는 5,000원 이상 이체해주세요.`);
        navigate('/payback');
      }
    }
  };

  const formatAmount = (value: string) => {
    if (!value) return '';
    return parseInt(value).toLocaleString();
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
            disabled={!amount || parseInt(amount) === 0}
          >
            이체하기
          </CommonButton>
        </S.ButtonContainer>
      </S.Content>

      {isKeyboardVisible && (
        <VirtualKeyboard
          onInput={handleKeyboardInput}
          onClose={handleKeyboardClose}
        />
      )}
    </S.Container>
  );
};

export default TransferPage;