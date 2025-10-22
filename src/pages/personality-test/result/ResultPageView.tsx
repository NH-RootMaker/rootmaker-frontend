import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { ResultKey } from '@/utils/result-calculator';
import { getResultTypeInfo } from '@/constants/result-types';
import { getUserTestResult } from '@/utils/test-status';
import CommonButton from '@/components/common-button';
import OptimizedImage from '@/components/optimized-image';
import * as S from './ResultPage.styles';
import TopNav from '@/components/topnav/TopNav';

const ResultPageView = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<{ type: ResultKey; username: string } | null>(null);

  useEffect(() => {
    // localStorage에서 테스트 결과 가져오기
    const testResult = getUserTestResult();
    
    if (!testResult || !testResult.type) {
      // 테스트 결과가 없으면 홈으로 이동
      navigate('/home', { replace: true });
      return;
    }

    setResult({
      type: testResult.type,
      username: testResult.username || '익명'
    });
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/my-subscription', { replace: true });
  };
  const handleGoReport = () => {
    navigate('/report', { replace: true });
  };



  if (!result) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>결과를 불러오는 중...</h1>
      </div>
    );
  }

  const resultInfo = getResultTypeInfo(result.type);

  return (
    <S.ResultContainer>
      <TopNav isBack title='나의 유형' onBackClick={handleGoHome} whiteBackground />
      <S.ResultHeader>
        <S.ResultTitle>{result.username}님은</S.ResultTitle>
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
          onClick={handleGoReport} 
          width="100%"
          customColor={resultInfo.color}
        >
          {resultInfo.name.split(' ')[1]} 또래 위치 리포트 확인하기
        </CommonButton>
      </S.ButtonContainer>

      
    </S.ResultContainer>
  );
};

export default ResultPageView;