import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as S from './PaybackPage.styles';
import TopNav from '@/components/topnav';
import SnakeRoadmap from '@/components/snake-roadmap';
import ToastMessage from '@/components/toast-message';
import Modal from '@/components/modal';
import type { RoadmapNode } from '@/components/snake-roadmap/SnakeRoadmap';

const PaybackPage = () => {
    const navigate = useNavigate();
    const [shouldShowToast, setShouldShowToast] = useState(false);
    const [isTypeTestModalOpen, setIsTypeTestModalOpen] = useState(false);
    
    // 로그인 상태 확인
    const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';

    const hideToast = () => {
        setShouldShowToast(false);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    const handleTypeTestModalClose = () => {
        setIsTypeTestModalOpen(false);
        navigate('/home');
    };

    const handleNodeClick = () => {
        // 챌린지 버튼 클릭 시 이체 페이지로 이동
        navigate('/transfer');
    };

    // empty 상태일 때 모달 표시 및 하루에 한 번만 토스트 표시
    useEffect(() => {
        if (!isLoggedIn) {
            setIsTypeTestModalOpen(true);
        } else {
            // 하루에 한 번만 토스트 표시 로직
            const today = new Date().toDateString();
            const lastToastDate = localStorage.getItem('last-toast-date');
            
            if (lastToastDate !== today) {
                setShouldShowToast(true);
                localStorage.setItem('last-toast-date', today);
            }
        }
    }, [isLoggedIn]);



    // 9개 노드 생성
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
                        onNodeClick={handleNodeClick}
                    />
                </S.ContentSection>
            </S.MainSection>

            {shouldShowToast && isLoggedIn && (
                <ToastMessage
                    message={`해당하는 회차의 스탬프를 클릭하면
오늘의 미션 금액을 입금할 수 있어요!`}
                    variant="pine"
                    duration={4000}
                    onClose={hideToast}
                />
            )}

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

export default PaybackPage;