import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { computeResult, type ResultKey } from '@/utils/result-calculator';
import type { Answer } from '@/types/personality-test.types';
import { getResultTypeInfo } from '@/constants/result-types';
import CommonButton from '@/components/common-button';
import Modal from '@/components/modal';
import OptimizedImage from '@/components/optimized-image';
import * as S from './ResultPage.styles';
import TopNav from '@/components/topnav/TopNav';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState<{ winner: ResultKey; score: Record<ResultKey, number> } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const answers = location.state?.answers as Answer[];
    
    if (!answers || answers.length !== 6) {
      // 답변이 없거나 불완전하면 홈으로 리다이렉트
      navigate('/', { replace: true });
      return;
    }

    const calculatedResult = computeResult(answers);
    setResult(calculatedResult);
  }, [location.state, navigate]);

  const username = location.state?.username || '익명';

  const handleRetakeTest = () => {
    navigate('/test', { replace: true });
  };

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  const handleServiceClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/', { replace: true });
  };

  if (!result) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>결과를 계산하고 있습니다...</h1>
        <p>답변 개수: {location.state?.answers?.length || 0}</p>
      </div>
    );
  }

  const resultInfo = getResultTypeInfo(result.winner);

  return (
    <S.ResultContainer>
      <TopNav isBack title='나의 유형' onBackClick={handleGoHome}/>
      <S.ResultHeader>
        <S.ResultTitle>{username}님은</S.ResultTitle>
        <S.ResultType>
          <S.ResultTypeHighlight $color={resultInfo.color}>{resultInfo.name}</S.ResultTypeHighlight> 타입이에요!
        </S.ResultType>
      </S.ResultHeader>
      <S.ResultDescription>
        <p>{resultInfo.description}</p>
      </S.ResultDescription>
        
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
        <CommonButton variant="secondary" onClick={handleRetakeTest} width="100%">
          다시 테스트하기
        </CommonButton>
        <CommonButton variant="primary" onClick={handleServiceClick} width="100%">
          {resultInfo.name.split(' ')[1]}와 단짝인 청약 추천 보러가기
        </CommonButton>
      </S.ButtonContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="서비스 준비중"
        content={`${resultInfo.name.split(' ')[1]} 맞춤 서비스를 준비하고 있습니다!\n곧 만나뵐 수 있도록 열심히 개발 중이에요!\n두둠칫 개발자 올림`}
        buttonText="확인"
      />
    </S.ResultContainer>
  );
};

export default ResultPage;