import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayoutStore } from '@/stores/useLayoutStore';
import CommonButton from '@/components/common-button';
import TopNav from '@/components/topnav';
import SpeechBubble from '@/components/speech-bubble';
import RecommendationCard from '@/components/recommendation-card';
import Modal from '@/components/modal';
import { getResultTypeInfo } from '@/constants/result-types';
import { getUserInfo } from '@/constants/user-data';
import { RECOMMENDATION_TEXT } from '@/constants/recommendation-text';
import { shouldShowTransformation, markTransformationShown } from '@/utils/mission-tracker';
import type { ResultKey } from '@/utils/result-calculator';
import * as S from './ReportPage.styles';

const ReportPage = () => {
  const { setIsTopNav, setIsBottomNav } = useLayoutStore();
  const navigate = useNavigate();
  const [isTypeTestModalOpen, setIsTypeTestModalOpen] = useState(false);
  const [personalityResult, setPersonalityResult] = useState<any>(null);
  const [showTransformation, setShowTransformation] = useState(false);
  
  // 사용자 정보 가져오기
  const userInfo = getUserInfo();
  const isLoggedIn = userInfo.isLoggedIn;
  const username = userInfo.name || "농협";
  const percentageText = showTransformation ? "상위 25%" : (isLoggedIn ? "상위 40%" : "상위 n%");
  const amountText = showTransformation ? "75,555원 더 많아요" : (isLoggedIn ? "55,555원 더 많아요" : "n원 더 많아요");
  
  // 성격 유형 정보 const로 추출
  const personalityTypeInfo = personalityResult ? getResultTypeInfo(personalityResult.type as ResultKey) : null;
  const personalityTypeName = personalityTypeInfo?.name.split(' ')[1]; // "벚나무", "소나무" 등
  const personalityTypeColor = personalityTypeInfo?.color || '#42CE7A'; // 기본값은 primary green

  useEffect(() => {
    setIsTopNav(false);
    setIsBottomNav(true);
    
    // 저장된 성격 테스트 결과 불러오기
    const savedResult = localStorage.getItem('personality-test-result');
    if (savedResult) {
      try {
        const parsedResult = JSON.parse(savedResult);
        setPersonalityResult(parsedResult);
      } catch (error) {
        console.error('Failed to parse personality test result:', error);
      }
    }

    // 변화 상태 확인
    if (shouldShowTransformation()) {
      setShowTransformation(true);
      // 5초 후 변화 상태 해제
      setTimeout(() => {
        setShowTransformation(false);
        markTransformationShown();
      }, 5000);
    }
    
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

  const handleOverlayClick = () => {
    if (showTransformation) {
      setShowTransformation(false);
      markTransformationShown();
    }
  };

  return (
    <S.Container>
      {showTransformation && <S.TransformationOverlay onClick={handleOverlayClick} />}
      <TopNav isBack title="나의 리포트" onBackClick={handleBackClick} whiteBackground={true} />

      <S.StatsSection>
        <S.StatsTitle>
          {username}님은 {personalityTypeName} 또래 대비<br />
          청약 입금액 <S.Highlight style={{ color: personalityTypeColor }}>{percentageText}</S.Highlight>에요!
        </S.StatsTitle>
        
        <S.SpeechBubbleContainer>
          <SpeechBubble variant="info" size="medium" tailPosition="bottom" customColor={personalityTypeColor}>
            {showTransformation ? (
              <>
                🎉 축하합니다!<br />
                3번의 미션 완료로 순위가 상승했어요!<br />
                <S.AmountHighlight style={{ color: personalityTypeColor }}>{amountText}</S.AmountHighlight>
              </>
            ) : (
              <>
                또래 평균 대비<br /><S.AmountHighlight style={{ color: personalityTypeColor }}>{amountText}</S.AmountHighlight>
              </>
            )}
          </SpeechBubble>
        </S.SpeechBubbleContainer>
        
        <S.ComparisonContainer $personalityColor={personalityTypeColor}>
          <S.ComparisonItem>
            <S.ImageContainer $isUser={false} $personalityColor={personalityTypeColor}>
              <img 
                src={personalityTypeColor === '#EE5D90' ? "/blossom_3.webp" : "/sprout.webp"} 
                alt="또래 평균" 
              />
            </S.ImageContainer>
            <S.Label $isUser={false}>{personalityTypeName} 20대 평균</S.Label>
            <S.Amount>543,210원</S.Amount>
          </S.ComparisonItem>
          <S.ComparisonItem>
            <S.ImageContainer $isUser={true} $personalityColor={personalityTypeColor}>
              <img 
                src={personalityTypeColor === '#EE5D90' ? "/blossom_4.webp" : "/growth 1.webp"} 
                alt={`${username}님`} 
              />
            </S.ImageContainer>
            <S.Label $isUser={true} style={{ color: personalityTypeColor }}>{username}님</S.Label>
            <S.Amount $isUser={true} style={{ color: personalityTypeColor }}>598,765원</S.Amount>
          </S.ComparisonItem>
        </S.ComparisonContainer>
      </S.StatsSection>

      <S.RecommendationSection>
        <S.SectionTitle>
          {personalityTypeName ? 
            `순간 몰입이 강한 ${personalityTypeName} ${username}만을 위한
미션이 도착했어요` : 
            '이런 방법은 어떠세요?'
          }
        </S.SectionTitle>
        
        {personalityTypeName ? (
          <>
            <RecommendationCard
              image="/coffee.webp"
              alt="커피"
              title={RECOMMENDATION_TEXT.withPersonality.goal.title}
              highlightText={RECOMMENDATION_TEXT.withPersonality.goal.highlightText}
            />

            <RecommendationCard
              image="/saving 1.webp"
              alt="저축"
              title={RECOMMENDATION_TEXT.withPersonality.saving.title(personalityTypeName)}
              highlightText={RECOMMENDATION_TEXT.withPersonality.saving.highlightText}
            />

            <RecommendationCard
              image="/shopping 1.webp"
              alt="쇼핑"
              title={RECOMMENDATION_TEXT.withPersonality.spending.title(personalityTypeName)}
              highlightText={RECOMMENDATION_TEXT.withPersonality.spending.highlightText}
            />
          </>
        ) : (
          <>
            <RecommendationCard
              image="/coffee.webp"
              alt="커피"
              title={RECOMMENDATION_TEXT.withoutPersonality.coffee.title}
              highlightText={RECOMMENDATION_TEXT.withoutPersonality.coffee.highlightText}
            />

            <RecommendationCard
              image="/saving 1.webp"
              alt="저축"
              title={RECOMMENDATION_TEXT.withoutPersonality.coffee.title}
              highlightText={RECOMMENDATION_TEXT.withoutPersonality.coffee.highlightText}
            />

            <RecommendationCard
              image="/shopping 1.webp"
              alt="쇼핑"
              title={RECOMMENDATION_TEXT.withoutPersonality.coffee.title}
              highlightText={RECOMMENDATION_TEXT.withoutPersonality.coffee.highlightText}
            />
          </>
        )}
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