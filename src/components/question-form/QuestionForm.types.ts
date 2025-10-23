import type { Question } from '@/types/personality-test.types';

export interface QuestionFormProps {
  question: Question;
  onAnswer: (option: 'A' | 'B') => void;
  onSubmit: (selectedOption: 'A' | 'B') => void;
  onBack?: () => void;
  isFirstQuestion?: boolean;
}

export interface FormData {
  selectedOption: 'A' | 'B';
}