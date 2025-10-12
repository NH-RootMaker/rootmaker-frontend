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

export const MainSection = styled.div`
  background: ${(props) => props.theme.colors.gradients.primaryBackground};
  padding: 20px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(100vh - 60px);
`;

export const HeaderSection = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-left: 10px;
  margin-top: 60px;
  margin-bottom: 24px;
  white-space: pre-line;
  
  ${(props) => props.theme.media.tablet} {
    margin-top: 80px;
    margin-bottom: 32px;
  }
  
  ${(props) => props.theme.media.desktop} {
    margin-top: 100px;
    margin-bottom: 40px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ChallengeCard = styled.div`
  background: ${(props) => props.theme.colors.grayScale.white};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ChallengeTitle = styled.h2`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 8px;
`;

export const HighlightText = styled.span`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.primary.gn};
`;

export const RoadmapContainer = styled.div`
  margin: 20px 0;
  padding: 20px 0;
`;






