import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { PERSONALITY_QUESTIONS } from '@/constants/personality-test';
import { RESULT_TYPES } from '@/constants/result-types';
import CommonButton from '@/components/common-button';
import CommonInput from '@/components/common-input';
import OptimizedImage from '@/components/optimized-image';
import Modal from '@/components/modal';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { Container, Title, Description, InputSection, ButtonContainer } from './HomePage.styles';
import * as S from './HomePage.styles';

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const { setIsTopNav, setIsBottomNav } = useLayoutStore();
  
  // 로그인 상태 확인
  const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';
  const loggedInUserName = localStorage.getItem('user-name') || '';

  // 첫 번째 질문의 이미지들과 결과 페이지 이미지들을 미리 로드
  const firstQuestionImages = PERSONALITY_QUESTIONS.length > 0 
    ? [PERSONALITY_QUESTIONS[0].imageA, PERSONALITY_QUESTIONS[0].imageB].filter(Boolean) as string[]
    : [];
  
  const resultImages = Object.values(RESULT_TYPES)
    .map(result => result.image)
    .filter(Boolean) as string[];

  useImagePreloader([...firstQuestionImages, ...resultImages]);

  // Top Nav 숨기기, Bottom Nav 표시
  useEffect(() => {
    setIsTopNav(false);
    setIsBottomNav(true);
    return () => {
      setIsTopNav(true);
      setIsBottomNav(true);
    };
  }, [setIsTopNav, setIsBottomNav]);

  // 첫 접속 시 온보딩 페이지로 리다이렉트 또는 웰컴 모달 표시
  useEffect(() => {
    const hasVisited = localStorage.getItem('nh-rootmaker-visited');
    const hasCompletedOnboarding = localStorage.getItem('nh-rootmaker-onboarding-completed');
    
    if (!hasVisited && !hasCompletedOnboarding) {
      navigate('/');
      return;
    }
    
    if (!hasVisited) {
      setIsWelcomeModalOpen(true);
      localStorage.setItem('nh-rootmaker-visited', 'true');
    }
  }, [navigate]);

  const handleStartTest = () => {
    if (isLoggedIn) {
      // 로그인한 경우 저장된 이름 사용
      navigate('/test', { state: { username: loggedInUserName } });
    } else {
      // 로그인하지 않은 경우 입력된 이름 확인
      if (username.trim()) {
        navigate('/test', { state: { username: username.trim() } });
      } else {
        setIsModalOpen(true);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
  };

  const handleSignupClick = () => {
    navigate('/login');
  };

  return (
      <Container>
        <Title>{isLoggedIn ? `${loggedInUserName}님, 반가워요!` : 'NH RootMaker'}</Title>
        <Description>
            {'나만의 저축 성향을 알아보고\n맞춤형 청약 가이드를 받아보세요!'}
        </Description>
        
        <S.MockupImageContainer>
          <OptimizedImage 
            src="/mockup.webp"
            alt="NH RootMaker 목업 이미지"
            priority={true}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </S.MockupImageContainer>
        
        <InputSection>
          {isLoggedIn ? (
            // 로그인한 경우
            <ButtonContainer>
              <CommonButton variant="primary" onClick={handleStartTest} width="100%">
                나의 나무 알아보기
              </CommonButton>
            </ButtonContainer>
          ) : (
            // 로그인하지 않은 경우
            <>
              <CommonInput
                placeholder="이름을 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleStartTest()}
                width="100%"
              />
              
              <ButtonContainer>
                <CommonButton variant="primary" onClick={handleStartTest} width="100%">
                  나의 나무 알아보기
                </CommonButton>
              </ButtonContainer>
            </>
          )}
          
          <S.Notice>
            ※ 테스트 결과는 저장되지 않습니다
          </S.Notice>
          
          {!isLoggedIn && (
            <S.UnderlineButton onClick={handleSignupClick}>
              회원가입하러 가기
            </S.UnderlineButton>
          )}
        </InputSection>

        <Modal
          isOpen={isWelcomeModalOpen}
          onClose={handleCloseWelcomeModal}
          title={'NH RootMaker Demo'}
          content={`저희 서비스에 오신 것을 환영합니다!\n\n이 서비스는 개인 맞춤형 청약 가이드를 위한\n핵심 기능인 유형테스트를 체험해볼 수 있는\n프로토타입 데모입니다.\n\n실제 서비스에서는 더욱 정교한 분석과\n개인화된 컨설팅 플로우를 제공할 예정입니다.\n\n- Team 두둠칫 -`}
          buttonText="체험 시작하기"
        />

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="이름을 입력해주세요"
          content="테스트를 시작하려면 이름을 입력해야 합니다."
          buttonText="확인"
        />
      </Container>
  );
};

export default HomePage;