/**
 * 유형테스트 질문 타입
 */
export interface Question {
  id: number;
  title: string;
  optionA: string;
  optionB: string;
}

/**
 * 사용자 답변 타입
 */
export interface Answer {
  questionId: number;
  selectedOption: 'A' | 'B';
}

/**
 * 테스트 결과 타입
 */
export interface TestResult {
  type: string;
  title: string;
  description: string;
}

/**
 * 테스트 진행 상태 타입
 */
export interface TestProgress {
  currentStep: number;
  totalSteps: number;
  answers: Answer[];
}