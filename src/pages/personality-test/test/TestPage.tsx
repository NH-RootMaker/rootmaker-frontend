import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNextQuestionPreloader } from '@/hooks/useImagePreloader';
import ProgressBar from '@/components/progress-bar';
import Chips from '@/components/chips';
import QuestionForm from '@/components/question-form';
import TopNav from '@/components/topnav';
import LoadingScreen from '@/components/loading-screen';
import { PERSONALITY_QUESTIONS } from '@/constants/personality-test';
import type { Answer } from '@/types/personality-test.types';

import * as S from './TestPage.styles';

export default function TestPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || '익명';
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  // 다음 질문의 이미지들을 미리 로드
  useNextQuestionPreloader(currentQuestionIndex, PERSONALITY_QUESTIONS);

  const handleAnswer = (option: 'A' | 'B') => {
    const newAnswer: Answer = {
      questionId: PERSONALITY_QUESTIONS[currentQuestionIndex].id,
      selectedOption: option,
    };
    
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== newAnswer.questionId);
      return [...filtered, newAnswer];
    });
  };

  const handleNext = (selectedOption: 'A' | 'B') => {
    // 현재 답변을 즉시 추가
    const currentAnswer: Answer = {
      questionId: PERSONALITY_QUESTIONS[currentQuestionIndex].id,
      selectedOption: selectedOption,
    };
    
    const updatedAnswers = [...answers.filter(a => a.questionId !== currentAnswer.questionId), currentAnswer];
    
    if (currentQuestionIndex < PERSONALITY_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 테스트 완료 - 최신 답변 배열 전달
      console.log('테스트 완료, 답변:', updatedAnswers);
      console.log('답변 개수:', updatedAnswers.length);
      
      navigate('/test-result', { 
        state: { answers: updatedAnswers, username },
        replace: true 
      });
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate('/home'); // 첫 번째 질문에서 뒤로 가면 홈으로
    }
  };

  // 현재 질문이 유효하지 않으면 로딩 상태
  if (currentQuestionIndex < 0 || currentQuestionIndex >= PERSONALITY_QUESTIONS.length) {
    return <LoadingScreen message="테스트를 불러오는 중..." />;
  }

  const currentQuestion = PERSONALITY_QUESTIONS[currentQuestionIndex];

  return (
    <S.Container>
      <TopNav isBack hideRight title="나의 유형" onBackClick={handleBackClick} whiteBackground />
      <S.Main>
        <ProgressBar 
          currentStep={currentQuestionIndex + 1}
          totalSteps={PERSONALITY_QUESTIONS.length}
        />
        
        <Chips 
          currentStep={currentQuestionIndex + 1}
          totalSteps={PERSONALITY_QUESTIONS.length}
        />
        
        <QuestionForm
          question={currentQuestion}
          onAnswer={handleAnswer}
          onSubmit={handleNext}
          onBack={handleBackClick}
          isFirstQuestion={currentQuestionIndex === 0}
        />
      </S.Main>
    </S.Container>
  );
}
