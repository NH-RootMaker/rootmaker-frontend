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
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      if (currentSlide < ONBOARDING_SLIDES.length - 1) {
        handleNext();
      } else if (currentSlide === ONBOARDING_SLIDES.length - 1) {
        // 마지막 슬라이드에서 왼쪽 스와이프 시 로그인 화면으로
        handleComplete();
      }
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
        >
          {ONBOARDING_SLIDES.map((slide, index) => {
            // 현재, 이전, 다음 카드만 렌더링
            const isPrevCard = index === currentSlide - 1;
            const isCurrentCard = index === currentSlide;
            const isNextCard = index === currentSlide + 1;
            
            if (!isPrevCard && !isCurrentCard && !isNextCard) {
              return null;
            }
            
            let position: 'prev' | 'current' | 'next';
            if (isCurrentCard) {
              position = 'current';
            } else if (isNextCard) {
              position = 'next';
            } else {
              position = 'prev';
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
                  if (position === 'next' && currentSlide < ONBOARDING_SLIDES.length - 1) {
                    setCurrentSlide(currentSlide + 1);
                  } else if (position === 'prev' && currentSlide > 0) {
                    setCurrentSlide(currentSlide - 1);
                  } else if (position === 'current') {
                    if (currentSlide < ONBOARDING_SLIDES.length - 1) {
                      setCurrentSlide(currentSlide + 1);
                    } else if (currentSlide === ONBOARDING_SLIDES.length - 1) {
                      handleComplete();
                    }
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
          {currentSlide !== ONBOARDING_SLIDES.length - 1 && (
            <S.UnderlineButton onClick={handleTestOnly}>
              청약 유형 먼저 확인할래요
            </S.UnderlineButton>
          )}
        </S.ButtonContainer>
      </S.BottomContainer>
    </S.Container>
  );
};

export default OnboardingPage;