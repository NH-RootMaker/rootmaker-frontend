import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  
  ${(props) => props.theme.media.tablet} {
    max-width: 600px;
  }
  
  ${(props) => props.theme.media.desktop} {
    max-width: 768px;
  }
`;

export const TopSection = styled.div`
  background: ${(props) => props.theme.colors.gradients.primaryBackground};
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BottomSection = styled.div`
  background: ${(props) => props.theme.colors.grayScale.white};
  padding: 20px;
  padding-bottom: 100px;
  min-height: 40vh;
`;

export const HeaderSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 24px;
  
  ${(props) => props.theme.media.tablet} {
    margin-top: 80px;
    margin-bottom: 32px;
  }
  
  ${(props) => props.theme.media.desktop} {
    margin-top: 100px;
    margin-bottom: 40px;
  }
`;

export const LevelImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 155px;
  flex-shrink: 0;
  
  ${(props) => props.theme.media.tablet} {
    width: 180px;
    height: 180px;
  }
  
  ${(props) => props.theme.media.desktop} {
    width: 200px;
    height: 200px;
  }
`;


export const FixedButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  width: calc(100vw - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  
  ${(props) => props.theme.media.tablet} {
    max-width: 600px;
  }
  
  ${(props) => props.theme.media.desktop} {
    max-width: 768px;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.98) 30%,
      rgba(255, 255, 255, 0.7) 70%,
      transparent 100%
    );
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: -1;
  }
`;