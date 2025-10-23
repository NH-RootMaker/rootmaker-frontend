import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; 
  background: ${(props) => props.theme.colors.grayScale.white};
  overflow-y: hidden;
`;

export const MainContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;
  padding-bottom: 0px;

  @media (max-width: 768px) {
    padding: 16px;
    padding-bottom: 0px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    padding-bottom: 0px;
  }
`;

export const HeaderSection = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-left: 15px;
  margin-top: 70px;
  margin-bottom: 30px;
  white-space: pre-line;
  
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 24px;
    margin-left: 15px;
  }
  
  @media (max-width: 480px) {
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: 15px;
  }
`;

export const ChallengeTitle = styled.h2`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    line-height: 1.4;
  }
`;

export const ChallengeSubtitle = styled.h2`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const HighlightText = styled.span`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.primary.gn};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    line-height: 1.4;
  }
`;





export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  width: calc(100vw - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;

  ${(props) => props.theme.media.tablet} {
    max-width: 768px;
  }

  ${(props) => props.theme.media.desktop} {
      max-width: 1024px;
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