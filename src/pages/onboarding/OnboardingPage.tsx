import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutStore } from '@/stores/useLayoutStore';
import CommonButton from '@/components/common-button';
import ProgressDots from '@/components/progress-dots';
import SlideCard from '@/components/slide-card';
import { ONBOARDING_SLIDES } from '@/constants/onboarding';
import * as S from './OnboardingPage.styles';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setIsNav } = useLayoutStore();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // TopNav와 BottomNav 숨기기
  useEffect(() => {
    setIsNav(false);
    return () => setIsNav(true);
  }, [setIsNav]);

  const handleNext = () => {
    if (currentSlide < ONBOARDING_SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleComplete();
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    // 온보딩 완료 플래그 설정
    localStorage.setItem('nh-rootmaker-onboarding-completed', 'true');
    navigate('/login');
  };

  const handleTestOnly = () => {
    // 테스트만 하기 위해 홈으로 이동 (로그인 없이)
    localStorage.setItem('nh-rootmaker-onboarding-completed', 'true');
    // 로그인 정보 초기화 (테스트만 하기 위해)
    localStorage.removeItem('user-logged-in');
    localStorage.removeItem('user-name');
    localStorage.removeItem('account-number');
    navigate('/home');
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    e.preventDefault(); // 스크롤 방지
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < ONBOARDING_SLIDES.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };


  return (
      <S.Container>
      <S.SlideContainer>
        <S.CarouselContainer
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={(e) => e.preventDefault()}
        >
          {ONBOARDING_SLIDES.map((slide, index) => {
            let position: 'prev' | 'current' | 'next' = 'current';
            
            if (index === currentSlide) {
              position = 'current';
            } else if (index === currentSlide + 1) {
              position = 'next';
            } else if (index === currentSlide - 1) {
              position = 'prev';
            } else {
              return null; // 현재, 이전, 다음이 아닌 카드는 렌더링하지 않음
            }

            return (
              <SlideCard
                key={slide.id}
                id={slide.id}
                chip={slide.chip}
                subtitle={slide.subtitle}
                description={slide.description}
                color={slide.color}
                position={position}
                index={index}
                image={slide.image}
                onClick={() => {
                  if (position === 'current' && currentSlide < ONBOARDING_SLIDES.length - 1) {
                    handleNext();
                  } else if (position === 'current' && currentSlide === ONBOARDING_SLIDES.length - 1) {
                    handleComplete();
                  } else if (position === 'next' && currentSlide < ONBOARDING_SLIDES.length - 1) {
                    handleNext();
                  } else if (position === 'prev' && currentSlide > 0) {
                    setCurrentSlide(currentSlide - 1);
                  }
                }}
              />
            );
          })}
        </S.CarouselContainer>
      </S.SlideContainer>

      <S.BottomContainer>
        <S.ProgressDotsWrapper>
          <ProgressDots 
            total={4} 
            current={currentSlide}
          />
        </S.ProgressDotsWrapper>

        <S.ButtonContainer>
          <CommonButton variant="primary" onClick={handleSkip} width="100%">
            {currentSlide === ONBOARDING_SLIDES.length - 1 ? '서비스 시작하기' : '서비스 소개 스킵하기'}
          </CommonButton>
          <S.UnderlineButton onClick={handleTestOnly}>
            청약 유형 먼저 확인할래요
          </S.UnderlineButton>
        </S.ButtonContainer>
      </S.BottomContainer>
    </S.Container>
  );
};

export default OnboardingPage;