import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './ActionPage.styles';
import TopNav from '@/components/topnav';
import SnakeRoadmap from '@/components/snake-roadmap';
import type { RoadmapNode } from '@/components/snake-roadmap/SnakeRoadmap';
import CommonButton from '@/components/common-button';
import Lottie from 'lottie-react';

const ActionPage = React.memo(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const [confettiAnimation, setConfettiAnimation] = useState(null);
    
    // 로그인 상태 확인
    const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';

    // Lottie 애니메이션 데이터 로드 (preloaded 데이터 우선 사용)
    useEffect(() => {
        const preloadedAnimation = location.state?.preloadedAnimation;
        
        if (preloadedAnimation) {
            // preloaded 데이터가 있으면 즉시 사용
            setConfettiAnimation(preloadedAnimation);
        } else {
            // fallback: 직접 로드
            fetch('/Confetti Effects Lottie Animation.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => setConfettiAnimation(data))
                .catch(error => console.error('Failed to load Lottie animation:', error));
        }
    }, [location.state]);

    const handleBackClick = () => {
        navigate('/');
    };

    const handleContinue = () => {
        navigate('/payback');
    };

    // 9개 노드 생성 (PaybackPage와 동일)
    const generateMonthlyNodes = (): RoadmapNode[] => {
        // 2일차만 완료된 상태로 초기화
        const challengeProgress = {"completed": [2], "current": 3};
        
        return Array.from({ length: 9 }, (_, index) => {
            const day = index + 1;
            
            return {
                id: day.toString(),
                title: '',
                amount: '',
                completed: isLoggedIn ? challengeProgress.completed.includes(day) : false,
                current: isLoggedIn ? day === challengeProgress.current : day === 1
            };
        });
    };

    const roadmapNodes = generateMonthlyNodes();
    const completedCount = roadmapNodes.filter(node => node.completed).length;
    const totalCount = roadmapNodes.length;
    
    const containerHeight = 350;

    return (
        <S.Container>
            <TopNav isBack title="나의 로드맵" onBackClick={handleBackClick} />
            
            {/* 배경 오버레이 */}
            <S.BackgroundOverlay>
                <TopNav isBack title="나의 로드맵" onBackClick={handleBackClick} />
                
                <S.MainSection>
                    <S.HeaderSection>
                        <S.ChallengeTitle>
                            오늘의 챌린지에 성공하면{'\n'}농협 <S.HighlightText>기프티콕으로 페이백</S.HighlightText>을 드려요
                        </S.ChallengeTitle>
                        <S.ChallengeSubtitle>
                            현재 {totalCount}회차 중 {completedCount}회차 완료
                        </S.ChallengeSubtitle>
                    </S.HeaderSection>

                    <S.ContentSection>
                        <SnakeRoadmap 
                            nodes={roadmapNodes} 
                            containerHeight={containerHeight} 
                        />
                    </S.ContentSection>
                </S.MainSection>
            </S.BackgroundOverlay>

            {/* 축하 콘텐츠 오버레이 */}
            <S.CelebrationOverlay>
                <S.CelebrationContent>
                    
                    <S.CelebrationText>
                        <S.MainCelebrationText>
                            <img src="/MissionText.webp" alt="미션 성공" />
                        </S.MainCelebrationText>
                        <S.WateringCanImage>
                            <img src="/wateringset.webp" alt="물뿌리개" />
                            <S.ChipsContainer>
                                <S.Chip>청약 나무에게 1회 물주기 완료</S.Chip>
                                <S.SecondaryChip>NH 포인트 1,000원 지급 완료</S.SecondaryChip>
                            </S.ChipsContainer>
                        </S.WateringCanImage>
                        <S.SubCelebrationText>{'페이백 NH 포인트 지급과 함께\n청약나무가 레벨 2로 성장했어요!'}</S.SubCelebrationText>
                    </S.CelebrationText>

                    <S.ButtonContainer>
                        <CommonButton 
                            variant="primary" 
                            width="100%"
                            onClick={handleContinue}
                        >
                            내 청약 확인하러 가기
                        </CommonButton>
                    </S.ButtonContainer>
                </S.CelebrationContent>

                {/* Lottie 폭죽 애니메이션 */}
                {confettiAnimation && (
                    <S.LottieContainer>
                        <Lottie 
                            animationData={confettiAnimation} 
                            loop={true}
                            autoplay={true}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </S.LottieContainer>
                )}
            </S.CelebrationOverlay>
        </S.Container>
    );
});

ActionPage.displayName = 'ActionPage';

export default ActionPage;