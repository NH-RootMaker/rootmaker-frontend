import { useNavigate } from 'react-router-dom';
import * as S from './ActionPage.styles';
import TopNav from '@/components/topnav';
import SnakeRoadmap from '@/components/snake-roadmap';
import type { RoadmapNode } from '@/components/snake-roadmap/SnakeRoadmap';
import CommonButton from '@/components/common-button';

const ActionPage = () => {
    const navigate = useNavigate();
    
    // 로그인 상태 확인
    const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';

    const handleBackClick = () => {
        navigate('/');
    };

    const handleContinue = () => {
        navigate('/payback');
    };

    // 9개 노드 생성 (PaybackPage와 동일)
    const generateMonthlyNodes = (): RoadmapNode[] => {
        // localStorage에서 챌린지 진행 상태 읽기
        const challengeProgress = JSON.parse(localStorage.getItem('challenge-progress') || '{"completed": [1,2,3], "current": 4}');
        
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
                        <S.MainCelebrationText>미션 성공</S.MainCelebrationText>
                        <S.WateringCanImage>
                            <img src="/물뿌리개 7.webp" alt="물뿌리개" />
                            <S.ChipsContainer>
                                <S.Chip>청약 나무에게 1회 물주기 완료</S.Chip>
                                <S.SecondaryChip>농협 기프티콕 지급 완료</S.SecondaryChip>
                            </S.ChipsContainer>
                        </S.WateringCanImage>
                        <S.SubCelebrationText>{'페이백 5,000원 당첨과 함께\n청약나무가 레벨 2로 성장했어요!'}</S.SubCelebrationText>
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

                {/* 폭죽 효과 */}
                <S.FireworkEffect className="firework-1" />
                <S.FireworkEffect className="firework-2" />
                <S.FireworkEffect className="firework-3" />
            </S.CelebrationOverlay>
        </S.Container>
    );
};

export default ActionPage;