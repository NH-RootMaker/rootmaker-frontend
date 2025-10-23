import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutStore } from '@/stores/useLayoutStore';
import TopNav from '@/components/topnav';
import CommonButton from '@/components/common-button';
import CommonInput from '@/components/common-input';
import Modal from '@/components/modal';
import { limitAccountNumberInput, validateAccountNumber } from '@/utils/account-validator';
import { DEFAULT_USER_INFO, PERSONALITY_TEST_RESULTS } from '@/constants/user-data';
import * as S from './LoginPage.styles';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsNav } = useLayoutStore();
  const [userName, setUserName] = useState<string>('장민규');
  const [accountNumber, setAccountNumber] = useState<string>(DEFAULT_USER_INFO.accountNumber);
  const [isDemoOnlyModalOpen, setIsDemoOnlyModalOpen] = useState(false);

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

    // 장민규가 아닌 경우 로그인 제한
    if (userName.trim() !== '장민규') {
      setIsDemoOnlyModalOpen(true);
      return;
    }

    // localStorage에 사용자 정보 저장
    localStorage.setItem('user-name', userName);
    localStorage.setItem('account-number', accountNumber);
    localStorage.setItem('user-logged-in', 'true');
    
    // 기본 성격 테스트 결과도 함께 저장 (벚나무 = cherry 타입)
    const defaultTestResult = {
      ...PERSONALITY_TEST_RESULTS.cherry,
      username: userName,
      date: new Date().toISOString(),
      answers: []
    };
    localStorage.setItem('personality-test-result', JSON.stringify(defaultTestResult));

    // 버퍼 페이지로 이동 (새로운 홈)
    navigate('/my-subscription');
  };

  const isFormValid = userName.trim() && accountNumber.trim() && validateAccountNumber(accountNumber);

  const handleDemoOnlyModalClose = () => {
    setIsDemoOnlyModalOpen(false);
  };

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

      <Modal
        isOpen={isDemoOnlyModalOpen}
        onClose={handleDemoOnlyModalClose}
        title="안내"
        content="데모 회원 버전은 장민규님만 가능합니다."
        buttonText="확인"
      />
    </>
  );
};

export default LoginPage;