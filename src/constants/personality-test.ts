import type { Question } from '@/types/personality-test.types';

//Test를 위한 더미 텍스트 입니다.
export const PERSONALITY_QUESTIONS: Question[] = [
  {
    id: 1,
    title: '새로운 사람들과 만날 때 어떤 편인가요?',
    optionA: '먼저 다가가서 대화를 시작한다',
    optionB: '상대방이 먼저 다가올 때까지 기다린다',
  },
  {
    id: 2,
    title: '휴일에는 주로 무엇을 하시나요?',
    optionA: '친구들과 함께 밖에서 활동한다',
    optionB: '집에서 혼자만의 시간을 갖는다',
  },
  {
    id: 3,
    title: '중요한 결정을 내릴 때는?',
    optionA: '직감과 감정을 중시한다',
    optionB: '논리적으로 분석하고 판단한다',
  },
  {
    id: 4,
    title: '계획을 세울 때 어떤 스타일인가요?',
    optionA: '상황에 따라 유연하게 대처한다',
    optionB: '미리 세운 계획대로 진행한다',
  },
  {
    id: 5,
    title: '스트레스를 받을 때는?',
    optionA: '다른 사람과 이야기하며 해소한다',
    optionB: '혼자서 생각하며 해결책을 찾는다',
  },
];