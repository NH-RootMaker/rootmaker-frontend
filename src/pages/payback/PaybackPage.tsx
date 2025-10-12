import { useNavigate } from 'react-router-dom';
import * as S from './PaybackPage.styles';
import TopNav from '@/components/topnav';
import SnakeRoadmap from '@/components/snake-roadmap';
import SpeechBubble from '@/components/speech-bubble';
import type { RoadmapNode } from '@/components/snake-roadmap/SnakeRoadmap';

const PaybackPage = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    // 9개 노드 생성
    const generateMonthlyNodes = (): RoadmapNode[] => {
        return Array.from({ length: 9 }, (_, index) => {
            const day = index + 1;
            
            return {
                id: day.toString(),
                title: '',
                amount: '',
                completed: day <= 3 || day === 5, // 1,2,3번째와 5번째 완료
                current: day === 6
            };
        });
    };

    const roadmapNodes = generateMonthlyNodes();
    const completedCount = roadmapNodes.filter(node => node.completed).length;
    const totalCount = roadmapNodes.length;
    
    const containerHeight = 450;

    return (
        <S.Container>
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
                    <SnakeRoadmap nodes={roadmapNodes} containerHeight={containerHeight} />
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '0', marginTop: '-40px' }}>
                        <SpeechBubble variant="pine" tailPosition="top" size="medium">
                            해당하는 회차의 스탬프를 클릭하면{'\n'}오늘의 미션 금액을 입금할 수 있어요!
                        </SpeechBubble>
                    </div>
                </S.ContentSection>
            </S.MainSection>

        </S.Container>
    );
};

export default PaybackPage;