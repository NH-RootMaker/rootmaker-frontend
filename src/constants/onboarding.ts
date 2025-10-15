import type { OnboardingSlide } from '@/pages/onboarding/OnboardingPage.types';

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 1,
    chip: '나의 유형',
    subtitle: '나무로 보는 저축 유형!\n당신만의 청약 단짝을\n찾아드려요.',
    description: '저축 유형 테스트',
    color: 'green',
    image: '/Onboarding1.webp'
  },
  {
    id: 2,
    chip: '나의 로드맵',
    subtitle: '당신의 도전을 응원합니다.\n페이백과 함께하는\n나의 청약 로드맵!',
    description: '청약 미션 달성 시 페이백 지급',
    color: 'yellow',
    image: '/Onboarding3.webp'
  },
  {
    id: 3,
    chip: '나의 리포트',
    subtitle: '월간 저축 리포트로\n성장하는 당신을\n한눈에 보여드려요!',
    description: '코호트 비교값 제공',
    color: 'blue',
    image: '/Onboarding2.webp'
  }
];