import { useNavigate } from 'react-router-dom';
import * as S from './PaybackPage.styles';
import TopNav from '@/components/topnav';
import SnakeRoadmap from '@/components/snake-roadmap';
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
                completed: day <= 4, // 처음 4개만 완료
                current: day === 5
            };
        });
    };

    const roadmapNodes = generateMonthlyNodes();
    
    const containerHeight = 800;

    return (
        <S.Container>
            <TopNav isBack title="나의 로드맵" onBackClick={handleBackClick} />
            
            <S.MainSection>
                <S.HeaderSection>
                    <S.ChallengeTitle>
                        오늘의 챌린지에 성공하면{'\n'}농협 <S.HighlightText>기프티콕으로 페이백</S.HighlightText>을 드려요
                    </S.ChallengeTitle>
                </S.HeaderSection>

                <S.ContentSection>
                    <SnakeRoadmap nodes={roadmapNodes} containerHeight={containerHeight} />
                </S.ContentSection>
            </S.MainSection>

        </S.Container>
    );
};

export default PaybackPage;