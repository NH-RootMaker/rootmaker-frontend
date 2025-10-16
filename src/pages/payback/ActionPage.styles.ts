import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.gradients.primaryBackground};
  opacity: 1;
  z-index: 1;
`;

export const MainSection = styled.main`
  padding: 0 1rem;
  margin-top: 3.875rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ChallengeTitle = styled.h1`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.black};
  text-align: left;
  white-space: pre-wrap;
  margin-left:12px;
`;

export const HighlightText = styled.span`
  color: ${(props) => props.theme.colors.primary.gn};
  font-weight: 700;
`;

export const ChallengeSubtitle = styled.p`
  ${(props) => props.theme.fonts.body.l400}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  text-align: left;
  white-space: pre-wrap;
  margin-left: 12px; 
  margin-top: 0px;
`;

export const ContentSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;
`;

export const CelebrationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(20, 20, 22, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const CelebrationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  max-width: 300px;
  width: 100%;
`;

export const WateringCanImage = styled.div`
  position: relative;
  
  img {
    width: 320px;
    height: 310px;
    margin-right: 40px;
    object-fit: contain;
    transform: rotate(-15deg);
    animation: ${keyframes`
      0% { transform: rotate(-15deg) scale(0.8); opacity: 0; }
      50% { transform: rotate(-15deg) scale(1.1); }
      100% { transform: rotate(-15deg) scale(1); opacity: 1; }
    `} 0.8s ease-out;
  }
`;

export const CelebrationText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  text-align: center;
`;

export const MainCelebrationText = styled.h2`
  font-family: Pretendard;
  font-size: 3rem;
  font-weight: 700;
  line-height: 120%;
  color: ${(props) => props.theme.colors.primary.gn};
  margin: 0;
  text-align: center;
  animation: ${keyframes`
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  `} 0.6s ease-out 0.3s both;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const SubCelebrationText = styled.h3`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.white};
  margin: 0;
  text-align: center;
  white-space: pre-line;
  animation: ${keyframes`
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  `} 0.6s ease-out 0.5s both;
`;

export const ChipsContainer = styled.div`
  position: absolute;
  top: 75%;
  right: 7%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  animation: ${keyframes`
    0% { transform: translateY(-50%) translateX(20px); opacity: 0; }
    100% { transform: translateY(-50%) translateX(0); opacity: 1; }
  `} 0.6s ease-out 0.6s both;
`;

export const Chip = styled.div`
  border-radius: 24px;
  border: 1px solid rgba(66, 206, 121, 0.25);
  background: ${(props) => props.theme.colors.grayScale.white};
  box-shadow: 0 0 16px 0 rgba(66, 206, 121, 0.75);
  display: inline-flex;
  padding: 6px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.primary.gn};
  white-space: nowrap;
`;

export const SecondaryChip = styled.div`
  border-radius: 24px;
  border: 1px solid rgba(66, 206, 121, 0.25);
  background: ${(props) => props.theme.colors.secondary.yg};
  box-shadow: 0 0 16px 0 rgba(66, 206, 121, 0.75);
  display: inline-flex;
  padding: 6px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 156px;
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.primary.gn};
  white-space: nowrap;
  transform: translateX(-30px);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  animation: ${keyframes`
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  `} 0.6s ease-out 0.8s both;
`;

export const LottieContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`;

