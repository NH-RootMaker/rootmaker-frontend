import { useNavigate} from 'react-router-dom';
import * as S from './MissionPage.styles';
import TopNav from '@/components/topnav';
import CommonButton from '@/components/common-button';
import { MISSION_DATA } from '@/constants/mission-data';

const MissionPage = () => {
    const navigate = useNavigate();

    // 사용자명 가져오기
    const username = localStorage.getItem('user-name') || '민규';
    
    // 미션 데이터
    const missionData = MISSION_DATA;

    const handleBackClick = () => {
        navigate('/payback');
    };

    const handleStartMission = () => {
        // 이체 페이지로 이동
        navigate('/transfer');
    };

    return (
        <S.Container>
            <TopNav isBack title="나의 로드맵" onBackClick={handleBackClick} whiteBackground />
            
            <S.MainContent>
                
                    <S.HeaderSection>
                        <S.ChallengeTitle>{username}님, 오늘의 미션은{'\n'}<S.HighlightText>{missionData.title}</S.HighlightText>입니다.</S.ChallengeTitle>
                        <S.ChallengeSubtitle>{missionData.behaviorAnalysis}{'\n'}{missionData.missionRecommendation}</S.ChallengeSubtitle>
                    </S.HeaderSection>
            </S.MainContent>
            <S.ButtonContainer>
                        <CommonButton 
                            variant="primary" 
                            width="100%"
                            onClick={handleStartMission}
                        >
                            미션 수행하러 가기
                        </CommonButton>
                    </S.ButtonContainer>
        </S.Container>
    );
};

export default MissionPage;