import type { Question } from '@/types/personality-test.types';

export interface QuestionFormProps {
  question: Question;
  onAnswer: (option: 'A' | 'B') => void;
  onSubmit: () => void;
  isLastQuestion?: boolean;
}

export interface FormData {
  selectedOption: 'A' | 'B';
}