import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const MainSection = styled.div`
  background: ${(props) => props.theme.colors.gradients.primaryBackground};
  padding: 20px;
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
  margin-top: 70px;
  margin-bottom: 30px;
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
`;


export const ChallengeTitle = styled.h2`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 0px;
`;

export const ChallengeSubtitle = styled.h2`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin-bottom: 0px;
`;

export const HighlightText = styled.span`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.primary.gn};
`;

export const RoadmapContainer = styled.div`
  margin-top: 20px 0;
  padding: 20px 0;
`;






