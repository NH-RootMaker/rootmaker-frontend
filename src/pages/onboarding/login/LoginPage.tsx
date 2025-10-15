import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';
import TopNav from '@/components/topnav';
import CommonButton from '@/components/common-button';
import CommonInput from '@/components/common-input';
import ProgressDots from '@/components/progress-dots';
import { limitAccountNumberInput, validateAccountNumber } from '@/utils/account-validator';
import * as S from './LoginPage.styles';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsNav } = useLayoutStore();
  const [userName, setUserName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  useEffect(() => {
    setIsNav(false);
    return () => setIsNav(true);
  }, [setIsNav]);

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = limitAccountNumberInput(e.target.value);
    setAccountNumber(formattedValue);
  };

  const handleSubmit = () => {
    if (!userName.trim() || !accountNumber.trim()) {
      alert('사용자 이름과 계좌번호를 모두 입력해주세요.');
      return;
    }

    if (!validateAccountNumber(accountNumber)) {
      alert('올바른 계좌번호를 입력해주세요. (10-14자리)');
      return;
    }

    // 임시로 localStorage에 사용자 정보 저장
    localStorage.setItem('user-name', userName);
    localStorage.setItem('account-number', accountNumber);
    localStorage.setItem('user-logged-in', 'true');

    // 홈 페이지로 이동
    navigate('/home');
  };

  const isFormValid = userName.trim() && accountNumber.trim() && validateAccountNumber(accountNumber);

  return (
    <>
      <TopNav 
        title="서비스 가입" 
        isBack={true}
        backPath="/"
        whiteBackground={true}
      />
      <S.Container>
        <S.Content>
          <S.WelcomeSection>
            <S.Title>원활한 서비스 이용을 위해{'\n'}성함과 계좌 번호를 입력해주세요!</S.Title>
            <S.Subtitle>
              사용자의 계좌 정보를 기억하기 위한 절차예요.{'\n'}공모전 이후 데이터는 지체없이 안전하게 파기됩니다.
            </S.Subtitle>
          </S.WelcomeSection>

          <S.FormSection>
            <CommonInput
              label="사용자 이름"
              type="text"
              placeholder="이름을 입력해주세요"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              width="100%"
            />

            <CommonInput
              label="계좌번호"
              type="text"
              placeholder="예: 123-45-678901"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              width="100%"
            />
          </S.FormSection>
          <S.BottomSection>
          <S.ProgressDotsWrapper>
            <ProgressDots 
              total={4} 
              current={3}
            />
          </S.ProgressDotsWrapper>

          <S.ButtonContainer>
            <CommonButton 
              variant="primary" 
              onClick={handleSubmit}
              disabled={!isFormValid}
              width="96%"
            >
              나의 청약 보러가기
            </CommonButton>
          </S.ButtonContainer>
        </S.BottomSection>
        </S.Content>

        
      </S.Container>
    </>
  );
};

export default LoginPage;