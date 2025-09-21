import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from '@/components/progress-bar';
import Chips from '@/components/chips';
import QuestionForm from '@/components/question-form';
import TopNav from '@/components/topnav';
import { PERSONALITY_QUESTIONS } from '@/constants/personality-test';
import type { Answer } from '@/types/personality-test.types';

import * as S from './TestPage.styles';

export default function TestPage() {
  const { step } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  // URL 파라미터에서 step을 읽어와서 현재 질문 인덱스 설정
  useEffect(() => {
    if (step) {
      const stepNumber = parseInt(step, 10);
      if (stepNumber >= 1 && stepNumber <= PERSONALITY_QUESTIONS.length) {
        setCurrentQuestionIndex(stepNumber - 1);
      } else {
        // 잘못된 step이면 첫 번째 질문으로 리다이렉트
        navigate('/personality-test/1');
      }
    } else {
      // step이 없으면 첫 번째 질문으로 리다이렉트
      navigate('/personality-test/1');
    }
  }, [step, navigate]);

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

  const handleNext = () => {
    if (currentQuestionIndex < PERSONALITY_QUESTIONS.length - 1) {
      const nextStep = currentQuestionIndex + 2;
      navigate(`/personality-test/${nextStep}`);
    } else {
      // 테스트 완료
      console.log('테스트 완료!', answers);
      alert(`테스트 완료! 총 ${answers.length}개 답변이 저장되었습니다.`);
      navigate('/'); // 홈으로 이동
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      const prevStep = currentQuestionIndex;
      navigate(`/personality-test/${prevStep}`);
    } else {
      navigate('/'); // 첫 번째 질문에서 뒤로 가면 홈으로
    }
  };

  // 현재 질문이 유효하지 않으면 로딩 상태
  if (currentQuestionIndex < 0 || currentQuestionIndex >= PERSONALITY_QUESTIONS.length) {
    return (
      <S.Container>
        <TopNav isBack title="성격 테스트" onBackClick={handleBackClick} />
        <S.Main>
          <div>Loading...</div>
        </S.Main>
      </S.Container>
    );
  }

  const currentQuestion = PERSONALITY_QUESTIONS[currentQuestionIndex];

  return (
    <S.Container>
      <TopNav isBack hideRight title="나의 유형" onBackClick={handleBackClick} />
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
          isLastQuestion={currentQuestionIndex === PERSONALITY_QUESTIONS.length - 1}
        />
      </S.Main>
    </S.Container>
  );
}
