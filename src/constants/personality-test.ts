import type { Question } from '@/types/personality-test.types';

//Test를 위한 더미 텍스트 입니다.
export const PERSONALITY_QUESTIONS: Question[] = [
  {
    id: 1,
    title: '드디어 기다리고 기다리던 월급날! \n월급을 받은 나는...',
    optionA: '내 미래를 위해\n조금이라도 저축!',
    optionB: '우선은 플렉스!\n남으면 저축할래',
    imageA: '/src/assets/images/saving 1.png',
    imageB: '/src/assets/images/shopping 1.png',
  },
  {
    id: 2,
    title: '갑자기 수중에 1만원이 생겼다!\n이때의 나는...',
    optionA: '티끌모아 태산!\n우선 쌓아보자',
    optionB: '소확행 추구!\n자유롭게 써보자',
    imageA: '/src/assets/images/mountain 1.png',
    imageB: '/src/assets/images/leaf 1.png',
  },
  {
    id: 3,
    title: '이루고 싶은 일이 생겼다!\n목표가 생기면 나는...',
    optionA: '꾸준히 조금씩\n오래 달리는 편!',
    optionB: '단기간에 몰입!\n올인해 달리는 편',
    imageA: '/src/assets/images/year 1.png',
    imageB: '/src/assets/images/clock 1.png',
  },
  {
    id: 4,
    title: '당장 큰 돈은 없지만, 저축하고 싶어!\n커피값 5,000원이라도 아껴볼까?',
    optionA: '그거 좋은데?\n당장 실행한다!',
    optionB: '오늘은 아니야\n내일부터 실행!',
    imageA: '/src/assets/images/cheers 1.png',
    imageB: '/src/assets/images/hello 1.png',
  },
  {
    id: 5,
    title: '저축, 주식, 투자... 알쏭달쏭 어려운 금융!\n어디에서 정보를 얻어볼까?',
    optionA: '나 혼자 찾아볼래!\n직접 검색한다',
    optionB: '주변 지인의 말에\n귀 기울이는 편!',
    imageA: '/src/assets/images/search 1.png',
    imageB: '/src/assets/images/chat 1.png',
  },
  {
    id: 6,
    title: '좋은 기회로 목돈이 생겼다!\n저축과 투자의 기로에서 당신의 선택은?',
    optionA: '안정감이 중요해\n청약이 딱 좋아',
    optionB: '기회는 잡는거야\n수익 높은 걸로 픽!',
    imageA: '/src/assets/images/house.png',
    imageB: '/src/assets/images/bank.png',
  },
];