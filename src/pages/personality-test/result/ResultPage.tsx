import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { computeResult, type ResultKey } from '@/utils/result-calculator';
import type { Answer } from '@/types/personality-test.types';
import { getResultTypeInfo } from '@/constants/result-types';
import { saveUserType, saveTestResult } from '@/services/api';
import CommonButton from '@/components/common-button';
import OptimizedImage from '@/components/optimized-image';
import LoadingScreen from '@/components/loading-screen';
import * as S from './ResultPage.styles';
import TopNav from '@/components/topnav/TopNav';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState<{ winner: ResultKey; score: Record<ResultKey, number> } | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    const answers = location.state?.answers as Answer[];
    const username = location.state?.username || '익명';
    
    if (!answers || answers.length !== 6) {
      // 답변이 없거나 불완전하면 홈으로 리다이렉트
      navigate('/home', { replace: true });
      return;
    }

    const calculatedResult = computeResult(answers);
    setResult(calculatedResult);
    
    // API로 테스트 결과 저장
    const saveResultToAPI = async () => {
      setIsSaving(true);
      setSaveError(null);
      
      try {
        // 사용자 유형 저장
        await saveUserType(username, calculatedResult.winner);
        
        // 테스트 결과 저장
        const testResult = {
          name: username,
          type: calculatedResult.winner,
          score: calculatedResult.score,
          answers: answers
        };
        await saveTestResult(testResult);
        
        // 백업용 localStorage 저장
        const backupResult = {
          type: calculatedResult.winner,
          score: calculatedResult.score,
          username: username,
          date: new Date().toISOString(),
          answers: answers
        };
        localStorage.setItem('personality-test-result', JSON.stringify(backupResult));
        
      } catch (error) {
        console.error('테스트 결과 저장 실패:', error);
        // setSaveError('결과 저장에 실패했습니다. 다시 시도해주세요.'); // 화면에 표시하지 않음
        
        // API 실패 시 localStorage에라도 저장
        const fallbackResult = {
          type: calculatedResult.winner,
          score: calculatedResult.score,
          username: username,
          date: new Date().toISOString(),
          answers: answers
        };
        localStorage.setItem('personality-test-result', JSON.stringify(fallbackResult));
      } finally {
        setIsSaving(false);
      }
    };

    saveResultToAPI();
  }, [location.state, navigate]);

  const username = location.state?.username || '익명';

  const handleServiceClick= () => {
    navigate('/payback', { replace: true });
  };


  const handleGoHome = () => {
    navigate('/home', { replace: true });
  };


  if (!result) {
    return (
      <LoadingScreen 
        message={isSaving ? "결과를 저장하는 중..." : "결과를 계산하고 있습니다..."} 
      />
    );
  }

  const resultInfo = getResultTypeInfo(result.winner);

  return (
    <S.ResultContainer>
      <TopNav isBack title='나의 유형' onBackClick={handleGoHome} whiteBackground />
      {saveError && (
        <div style={{ 
          padding: '10px', 
          margin: '10px', 
          backgroundColor: '#fff2f0', 
          border: '1px solid #ffccc7',
          borderRadius: '6px',
          color: '#ff4d4f',
          fontSize: '14px'
        }}>
          {saveError}
        </div>
      )}
      <S.ResultHeader>
        <S.ResultTitle>{username}님은</S.ResultTitle>
        <S.ResultType>
          <S.ResultTypeHighlight $color={resultInfo.color}>{resultInfo.name}</S.ResultTypeHighlight> 타입이에요!
        </S.ResultType>
        <S.ResultDescription>
          <p>{resultInfo.description}</p>
        </S.ResultDescription>
      </S.ResultHeader>
      
        
      <S.ResultImageContainer>
        {resultInfo.image && (
          <OptimizedImage 
            src={resultInfo.image} 
            alt={resultInfo.name}
            priority={true}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
      </S.ResultImageContainer>

      <S.ButtonContainer>
        <CommonButton 
          variant="primary" 
          onClick={handleServiceClick} 
          width="100%"
          customColor={resultInfo.color}
        >
          {resultInfo.name.split(' ')[1]}를 위한 맞춤 로드맵 보러가기
        </CommonButton>
      </S.ButtonContainer>

    </S.ResultContainer>
  );
};

export default ResultPage;