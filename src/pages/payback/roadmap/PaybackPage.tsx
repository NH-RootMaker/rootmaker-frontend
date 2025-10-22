import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as S from './PaybackPage.styles';
import TopNav from '@/components/topnav';
import SnakeRoadmap from '@/components/snake-roadmap';
import ToastMessage from '@/components/toast-message';
import Modal from '@/components/modal';
import { isNextMissionAvailable, getTimeUntilNextMission } from '@/utils/mission-status';
import type { RoadmapNode } from '@/components/snake-roadmap/SnakeRoadmap';

const PaybackPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [shouldShowToast, setShouldShowToast] = useState(false);
    const [isTypeTestModalOpen, setIsTypeTestModalOpen] = useState(false);
    const [isMissionRestrictedModalOpen, setIsMissionRestrictedModalOpen] = useState(false);
    const [challengeProgress, setChallengeProgress] = useState<{completed: number[], current: number}>({completed: [], current: 1});
    
    // 로그인 상태 확인
    const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';
    const username = localStorage.getItem('user-name') || '사용자';

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
        // 미션 완료 후 내일까지 제한 확인
        if (!isNextMissionAvailable()) {
            setIsMissionRestrictedModalOpen(true);
            return;
        }
        
        // 챌린지 버튼 클릭 시 미션 페이지로 이동
        navigate('/mission');
    };

    const handleMissionRestrictedModalClose = () => {
        setIsMissionRestrictedModalOpen(false);
    };

    // challengeProgress 초기화 및 페이지 포커스 시 새로고침
    useEffect(() => {
        const loadProgress = () => {
            const savedProgress = localStorage.getItem('challenge-progress');
            if (savedProgress) {
                setChallengeProgress(JSON.parse(savedProgress));
            }
        };

        // 초기 로드
        loadProgress();

        // 페이지 포커스 시 새로고침
        const handleFocus = () => {
            loadProgress();
        };

        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, []);

    // 페이지 이동 시 progress 업데이트 (미션 완료 후 돌아올 때)
    useEffect(() => {
        const loadProgress = () => {
            const savedProgress = localStorage.getItem('challenge-progress');
            if (savedProgress) {
                const progress = JSON.parse(savedProgress);
                setChallengeProgress(progress);
            }
        };
        
        loadProgress();
    }, [location.pathname, location.key]); // pathname도 추가해서 더 자주 체크

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
        return Array.from({ length: 9 }, (_, index) => {
            const day = index + 1;
            const isCompleted = isLoggedIn ? challengeProgress.completed.includes(day) : false;
            const isCurrent = isLoggedIn ? day === challengeProgress.current : day === 1;
            
            // nextMission: current 노드의 다음 노드 (current + 1)
            const isNextMission = isLoggedIn ? 
                day === challengeProgress.current + 1 :
                day === 2;
            
            return {
                id: day.toString(),
                title: '',
                amount: '',
                completed: isCompleted,
                current: isCurrent,
                nextMission: isNextMission
            };
        });
    };

    const roadmapNodes = generateMonthlyNodes();
    
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
                        오늘의 미션은 {username}님의 성향에 따라 매일 달라져요{'\n'}어제와는 다른 성장의 하루를 만나보세요.
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
오늘의 미션을 확인할 수 있어요!`}
                    variant="pine"
                    duration={4000}
                    onClose={hideToast}
                />
            )}

            <Modal
                isOpen={isTypeTestModalOpen}
                onClose={handleTypeTestModalClose}
                title="안내"
                content={`로드맵을 보기 위해서는 나의 유형 정보가 필요해요.
원활한 진행을 위해 청약 테스트 먼저 진행해 주세요!`}
                buttonText="청약 유형 테스트하러 가기"
            />

            <Modal
                isOpen={isMissionRestrictedModalOpen}
                onClose={handleMissionRestrictedModalClose}
                title="미션 완료!"
                content={`오늘의 미션을 이미 완료하셨어요!\n다음 미션은 ${getTimeUntilNextMission() || '내일'}후에 공개됩니다!`}
                buttonText="확인"
            />
        </S.Container>
    );
};

export default PaybackPage;