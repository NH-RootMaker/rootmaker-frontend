import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const MainSection = styled.div`
  background: ${(props) => props.theme.colors.gradients.primaryBackground};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 62px - 80px); /* TopNav(62px) + BottomNav(80px) 제외 */
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
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

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
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

export const RoadmapContainer = styled.div`
  margin-top: 20px 0;
  padding: 20px 0;
  
`;







