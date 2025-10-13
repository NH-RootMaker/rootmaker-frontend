import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutStore } from '@/stores/useLayoutStore';
import CommonButton from '@/components/common-button';
import TopNav from '@/components/topnav';
import SpeechBubble from '@/components/speech-bubble';
import RecommendationCard from '@/components/recommendation-card';
import * as S from './ReportPage.styles';

const ReportPage = () => {
  const { setIsNav } = useLayoutStore();
  const navigate = useNavigate();
  
  // TODO: 실제로는 props나 store에서 받아올 값
  const username = "민규";

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  const handlePaybackClick = () => {
    navigate('/payback');
  };

  const handleBackClick = () => {
    navigate('/buffer');
  };

  return (
    <S.Container>
      <TopNav isBack title="나의 리포트" onBackClick={handleBackClick} whiteBackground={true} />

      <S.StatsSection>
        <S.StatsTitle>
          {username}님은 또래 대비 청약 입금액<br />
          <S.Highlight>상위 40%</S.Highlight>에요!
        </S.StatsTitle>
        
        <S.SpeechBubbleContainer>
          <SpeechBubble variant="info" size="medium" tailPosition="bottom">
            또래 평균 대비<br /><S.AmountHighlight>55,555원 더 많아요</S.AmountHighlight>
          </SpeechBubble>
        </S.SpeechBubbleContainer>
        
        <S.ComparisonContainer>
          <S.ComparisonItem>
            <S.ImageContainer $isUser={false}>
              <img src="/sprout.webp" alt="또래 평균" />
            </S.ImageContainer>
            <S.Label $isUser={false}>20대 평균</S.Label>
            <S.Amount>543,210원</S.Amount>
          </S.ComparisonItem>
          <S.ComparisonItem>
            <S.ImageContainer $isUser={true}>
              <img src="/growth 1.webp" alt={`${username}님`} />
            </S.ImageContainer>
            <S.Label $isUser={true}>{username}님</S.Label>
            <S.Amount $isUser={true}>598,765원</S.Amount>
          </S.ComparisonItem>
        </S.ComparisonContainer>
      </S.StatsSection>

      <S.RecommendationSection>
        <S.SectionTitle>이런 방법은 어떠세요?</S.SectionTitle>
        
        <RecommendationCard
          image="/coin.webp"
          alt="코인"
          title="이번 달엔 커피를 두 번 덜 마시면 목표 금액을 더욱 쉽게 채울 수 있어요!"
          highlightText="커피를 두 번 덜 마시면"
        />

        <RecommendationCard
          image="/saving 1.webp"
          alt="저축"
          title="이번 달엔 커피를 두 번 덜 마시면 목표 금액을 더욱 쉽게 채울 수 있어요!"
          highlightText="커피를 두 번 덜 마시면"
        />

        <RecommendationCard
          image="/shopping 1.webp"
          alt="쇼핑"
          title="이번 달엔 커피를 두 번 덜 마시면 목표 금액을 더욱 쉽게 채울 수 있어요!"
          highlightText="커피를 두 번 덜 마시면"
        />
      </S.RecommendationSection>

      <S.FixedButtonContainer>
        <CommonButton 
          variant="primary" 
          width="100%"
          onClick={handlePaybackClick}
        >
          커피값 아끼고 페이백 받기
        </CommonButton>
      </S.FixedButtonContainer>
    </S.Container>
  );
};

export default ReportPage;