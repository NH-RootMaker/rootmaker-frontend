import { useNavigate } from 'react-router-dom';
import * as S from './BufferPage.styles';
import TopNav from '@/components/topnav';
import LevelChips from '@/components/chips/LevelChips';
import SpeechBubble from '@/components/speech-bubble';
import CommonButton from '@/components/common-button';
import OptimizedImage from '@/components/optimized-image';
import AccountCard from '@/components/buffer-account/account-card';
import HistorySection from '@/components/buffer-account/history-section';
import { getLevelImage, getLevelImageAlt } from '@/utils/level-images';
import { DEPOSIT_HISTORY, ACCOUNT_INFO, SAVINGS_GOAL } from '@/constants/buffer-data';
 
const BufferPage = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); 
    };

    const formatCurrency = (amount: number) => {
        return amount.toLocaleString() + '원';
    };

    const actionButtons = [
        { label: '해지예상조회', onClick: () => console.log('해지예상조회') },
        { label: '계좌이율보기', onClick: () => console.log('계좌이율보기') },
        { label: '상세정보', onClick: () => console.log('상세정보') }
    ];

    return (
        <S.Container>
            <TopNav isBack title="청약 키우기" onBackClick={handleBackClick} />
            
            <S.TopSection>
                <S.HeaderSection>
                    <SpeechBubble 
                        variant="info" 
                        size="medium"
                        tailPosition="bottom"
                    >
                        {SAVINGS_GOAL.goalText}
                    </SpeechBubble>
                    <S.LevelImageContainer>
                        <OptimizedImage 
                            src={getLevelImage(SAVINGS_GOAL.levelNum)}
                            alt={getLevelImageAlt(SAVINGS_GOAL.levelNum)}
                            width={155}
                            height={155}
                        />
                    </S.LevelImageContainer>
                    <LevelChips 
                        levelNum={SAVINGS_GOAL.levelNum} 
                        levelId={SAVINGS_GOAL.levelId}
                        size='small'
                     />
                </S.HeaderSection>

                <AccountCard 
                    accountInfo={ACCOUNT_INFO}
                    actionButtons={actionButtons}
                    formatCurrency={formatCurrency}
                />
            </S.TopSection>

            <S.BottomSection>
                <HistorySection 
                    title="납입 내역"
                    historyData={DEPOSIT_HISTORY}
                    formatCurrency={formatCurrency}
                />
            </S.BottomSection>
            
            <S.FixedButtonContainer>
                <CommonButton 
                    variant="primary" 
                    width="100%"
                    onClick={() => console.log('입금하기 클릭')}
                >
                    입금하기
                </CommonButton>
            </S.FixedButtonContainer>
        </S.Container>
    );
};

export default BufferPage;