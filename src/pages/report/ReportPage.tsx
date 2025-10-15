import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutStore } from '@/stores/useLayoutStore';
import CommonButton from '@/components/common-button';
import TopNav from '@/components/topnav';
import SpeechBubble from '@/components/speech-bubble';
import RecommendationCard from '@/components/recommendation-card';
import Modal from '@/components/modal';
import * as S from './ReportPage.styles';

const ReportPage = () => {
  const { setIsTopNav, setIsBottomNav } = useLayoutStore();
  const navigate = useNavigate();
  const [isTypeTestModalOpen, setIsTypeTestModalOpen] = useState(false);
  
  // 로그인 상태 확인
  const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';
  
  // 사용자 이름과 통계 설정
  const username = isLoggedIn ? 
    localStorage.getItem('user-name') || "민규" : 
    "농협";
  const percentageText = isLoggedIn ? "상위 40%" : "상위 n%";
  const amountText = isLoggedIn ? "55,555원 더 많아요" : "n원 더 많아요";

  useEffect(() => {
    setIsTopNav(false);
    setIsBottomNav(true);
    return () => {
      setIsTopNav(true);
      setIsBottomNav(true);
    };
  }, [setIsTopNav, setIsBottomNav]);

  const handleTypeTestModalClose = () => {
    setIsTypeTestModalOpen(false);
    navigate('/home');
  };

  // empty 상태일 때 모달 표시
  useEffect(() => {
    if (!isLoggedIn) {
      setIsTypeTestModalOpen(true);
    }
  }, [isLoggedIn]);

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
          <S.Highlight>{percentageText}</S.Highlight>에요!
        </S.StatsTitle>
        
        <S.SpeechBubbleContainer>
          <SpeechBubble variant="info" size="medium" tailPosition="bottom">
            또래 평균 대비<br /><S.AmountHighlight>{amountText}</S.AmountHighlight>
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

      <Modal
        isOpen={isTypeTestModalOpen}
        onClose={handleTypeTestModalClose}
        title="안내"
        content={`청약 상품 추천을 위해서는 당신의 유형이 필요해요.
원활한 진행을 위해 청약 테스트 먼저 진행해 주세요!`}
        buttonText="청약 유형 테스트하러 가기"
      />
    </S.Container>
  );
};

export default ReportPage;