import styled from 'styled-components';

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px 120px 20px;
  background: ${(props) => props.theme.colors.grayScale.white};
  
  ${(props) => props.theme.media.tablet} {
    max-width: 600px;
  }
  
  ${(props) => props.theme.media.desktop} {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    padding: 0 16px 100px 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px 80px 12px;
  }
`;

export const StatsSection = styled.section`
  margin-top: 100px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    margin-top: 70px;
    margin-bottom: 20px;
  }
`;

export const StatsTitle = styled.h2`
  ${(props) => props.theme.fonts.header.h2};
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 8px;
  text-align: left;
  margin-left: 12px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-left: 12px;
    margin-bottom: 6px;
  }
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary.gn};
`;

export const SpeechBubbleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-right: 80px;
  margin-left: auto;
  width: fit-content;
  ${(props) => props.theme.fonts.body.m600};
  z-index: 10;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 165px;
  }

  @media (max-width: 640px) {
    margin-right: 60px;
  }

  @media (max-width: 480px) {
    margin-right: 40px;
  }

  @media (max-width: 425px) {
    margin-right: 70px;
  }

  @media (max-width: 375px) {
    margin-right: 45px;
  }

  @media (max-width: 320px) {
    margin-right: 20px;
  }
`;

export const AmountHighlight = styled.span`
  color: ${(props) => props.theme.colors.primary.gn};
`;

export const ComparisonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 10px 50px;
  position: relative;
  margin-top: 30px;
  
  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 280px;
    background: linear-gradient(114deg, #F3FFE9 -0.93%, #C7FFE8 97.27%);
    border-radius: 50%;
    filter: blur(25px);
    z-index: 0;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    gap: 50px;
    padding: 10px 30px;
    
    &::before {
      width: 220px;
      height: 220px;
      filter: blur(20px);
    }
  }

  @media (max-width: 480px) {
    gap: 40px;
    padding: 10px 20px;
    margin-top: 20px;
    
    &::before {
      width: 180px;
      height: 180px;
      filter: blur(15px);
    }
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

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    transform: ${props => props.$isUser ? 'rotate(-15deg) translateY(-20px)' : 'rotate(15deg)'};
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    transform: ${props => props.$isUser ? 'rotate(-12deg) translateY(-15px)' : 'rotate(12deg)'};
  }
`;

export const Label = styled.div<{ $isUser?: boolean }>`
${(props) => props.theme.fonts.header.h3};
  color: ${props => props.$isUser ? props.theme.colors.primary.gn : props.theme.colors.grayScale.gy800};
  margin-bottom: 1px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Amount = styled.div<{ $isUser?: boolean }>`
  ${(props) => props.theme.fonts.header.h3};
  color: ${props => props.$isUser ? props.theme.colors.primary.gn : props.theme.colors.grayScale.gy800};

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const RecommendationSection = styled.section`
  margin-bottom: 0px;
  padding: 0px;
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-right: -20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }

  @media (max-width: 480px) {
    width: calc(100% + 24px);
    margin-left: -12px;
    margin-right: -12px;
  }
`;

export const SectionTitle = styled.h3`
  ${(props) => props.theme.fonts.header.h2};
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 20px;
  margin-left: 32px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 28px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-left: 24px;
    margin-bottom: 12px;
  }
`;




export const FixedButtonContainer = styled.div`
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