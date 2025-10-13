import { useNavigate } from 'react-router-dom';
import * as S from './PaybackPage.styles';
import TopNav from '@/components/topnav';
import SnakeRoadmap from '@/components/snake-roadmap';
import ToastMessage from '@/components/toast-message';
import { useDailyToast } from '@/hooks/useDailyToast';
import type { RoadmapNode } from '@/components/snake-roadmap/SnakeRoadmap';

const PaybackPage = () => {
    const navigate = useNavigate();
    const { shouldShowToast, hideToast } = useDailyToast('payback-daily-toast');

    const handleBackClick = () => {
        navigate('/');
    };

    // 개발용: 토스트 테스트 함수
    const handleTestToast = () => {
        localStorage.removeItem('payback-daily-toast');
        window.location.reload();
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
    
    const containerHeight = 350;

    return (
        <S.Container>
            <TopNav isBack title="나의 로드맵" onBackClick={handleBackClick} />
            
            {/* 개발용 테스트 버튼 - 배포 시 제거 */}
            {import.meta.env.DEV && (
                <button 
                    onClick={handleTestToast}
                    style={{
                        position: 'fixed',
                        top: '80px',
                        right: '10px',
                        zIndex: 999,
                        background: 'red',
                        color: 'white',
                        border: 'none',
                        padding: '8px',
                        borderRadius: '4px',
                        fontSize: '12px'
                    }}
                >
                    토스트 테스트
                </button>
            )}
            
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
                </S.ContentSection>
            </S.MainSection>

            {shouldShowToast && (
                <ToastMessage
                    message={`해당하는 회차의 스탬프를 클릭하면
오늘의 미션 금액을 입금할 수 있어요!`}
                    variant="pine"
                    duration={4000}
                    onClose={hideToast}
                />
            )}
        </S.Container>
    );
};

export default PaybackPage;