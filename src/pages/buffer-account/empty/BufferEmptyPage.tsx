import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './BufferEmptyPage.styles';
import TopNav from '@/components/topnav';
import LevelChips from '@/components/chips/LevelChips';
import SpeechBubble from '@/components/speech-bubble';
import CommonButton from '@/components/common-button';
import OptimizedImage from '@/components/optimized-image';
import BottomNav from '@/components/bottom-nav';
import ProductInfoCard from '@/components/product-info-card';
import Modal from '@/components/modal';
import { SUBSCRIPTION_PRODUCT_INFO } from '@/constants/product-info';

const BufferEmptyPage = () => {
    const navigate = useNavigate();
    const [isInfoExpanded, setIsInfoExpanded] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const handleBackClick = () => {
        navigate('/home'); 
    };

    const handleSignupClick = () => {
        setIsSignupModalOpen(true);
    };

    const handleExpandChange = (isExpanded: boolean) => {
        setIsInfoExpanded(isExpanded);
    };

    const handleSignupModalClose = () => {
        setIsSignupModalOpen(false);
    };

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
                        과연 어떤 나무가 자라날까요?<br />
                        지금 가입하고 나만의 나무를 키워보세요!
                    </SpeechBubble>
                    
                    <S.LevelImageContainer>
                        <OptimizedImage 
                            src="/NotYet.webp"
                            alt="비밀의 화분"
                            width={200}
                            height={200}
                        />
                    </S.LevelImageContainer>
                    
                    <LevelChips 
                        levelNum={0} 
                        levelId="비밀의 화분"
                        size='small'
                     />
                </S.HeaderSection>

                <ProductInfoCard
                    title="청년 주택드림 청약통장"
                    tags={['#직장인', '#주택청약', '#세테크']}
                    productInfo={SUBSCRIPTION_PRODUCT_INFO}
                    expandableFields={['rate', 'period', 'amount']}
                    onExpandChange={handleExpandChange}
                />
            </S.TopSection>

            <S.BottomSection $isExpanded={isInfoExpanded}>
            </S.BottomSection>
            
            <S.FixedButtonContainer>
                <CommonButton 
                    variant="primary" 
                    width="100%"
                    onClick={handleSignupClick}
                >
                    내 유형과 단짝인 청약 가입하기
                </CommonButton>
            </S.FixedButtonContainer>

            <BottomNav />

            <Modal
                isOpen={isSignupModalOpen}
                onClose={handleSignupModalClose}
                title="안내"
                content="청약 가입은 농협 지점에서 가능합니다."
                buttonText="확인"
                onButtonClick={handleSignupModalClose}
            />
        </S.Container>
    );
};

export default BufferEmptyPage;