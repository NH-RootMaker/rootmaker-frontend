import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px 120px 20px;
  background: ${(props) => props.theme.colors.grayScale.white};
  min-height: 100vh;
`;

export const StatsSection = styled.section`
  margin-top: 100px;
  margin-bottom: 32px;
`;

export const StatsTitle = styled.h2`
  ${(props) => props.theme.fonts.header.h2};
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 8px;
  text-align: left;
  margin-left: 12px;
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary.gn};
`;

export const SpeechBubbleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-right: 60px;
  margin-left: auto;
  width: fit-content;
  ${(props) => props.theme.fonts.body.m600};
  z-index: 10;
  position: relative;
`;

export const AmountHighlight = styled.span`
  color: ${(props) => props.theme.colors.primary.gn};
`;

export const ComparisonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 50px;
  position: relative;
  margin-top: 30px;
  
  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 199px;
    height: 199px;
    background: linear-gradient(114deg, #F3FFE9 -0.93%, #C7FFE8 97.27%);
    border-radius: 50%;
    filter: blur(25px);
    z-index: 0;
    flex-shrink: 0;
  }
`;

export const ComparisonItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const ImageContainer = styled.div<{ $isUser?: boolean }>`
  width: 100px;
  height: 100px;
  margin-bottom: 0px;
  transform: ${props => props.$isUser ? 'rotate(-18deg) translateY(-30px)' : 'rotate(18deg)'};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Label = styled.div<{ $isUser?: boolean }>`
${(props) => props.theme.fonts.header.h3};
  color: ${props => props.$isUser ? props.theme.colors.primary.gn : props.theme.colors.grayScale.gy800};
  margin-bottom: 1px;
`;

export const Amount = styled.div<{ $isUser?: boolean }>`
  ${(props) => props.theme.fonts.header.h3};
  color: ${props => props.$isUser ? props.theme.colors.primary.gn : props.theme.colors.grayScale.gy800};
`;

export const RecommendationSection = styled.section`
  margin-bottom: 32px;
  padding: 0px;
  width: 100vw;
  margin-left: -20px;
  margin-right: -20px;
`;

export const SectionTitle = styled.h3`
  ${(props) => props.theme.fonts.header.h2};
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 20px;
  margin-left: 34px;
`;




export const FixedButtonContainer = styled.div`
  position: fixed;
  bottom: 95px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  width: calc(100vw - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  
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