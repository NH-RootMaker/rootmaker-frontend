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

    // 현재 월의 일수 계산
    const generateMonthlyNodes = (): RoadmapNode[] => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = now.getDate();
        
        return Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;
            
            return {
                id: day.toString(),
                title: '',
                amount: '',
                completed: day < today,
                current: day === today
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