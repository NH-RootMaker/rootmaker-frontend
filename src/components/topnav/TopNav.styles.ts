import styled from 'styled-components';

export const Container = styled.header<{ $opacity?: boolean; $transparent?: boolean; $whiteBackground?: boolean }>`
  display: flex;
  width: 100vw;
  max-width: 480px;
  height: 3.875rem;
  padding: 0rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  box-sizing: border-box;
  background: ${(props) => {
    if (props.$transparent) return 'transparent';
    if (props.$whiteBackground) return props.theme.colors.gradients.topNavWhiteBackground;
    return props.theme.colors.gradients.primaryBackground;
  }};
  backdrop-filter: ${(props) => props.$transparent ? 'none' : 'blur(10px)'};
  -webkit-backdrop-filter: ${(props) => props.$transparent ? 'none' : 'blur(10px)'};
  
  @media (max-width: 768px) {
    max-width: 100vw;
    padding: 0rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0rem 0.75rem;
    height: 3.5rem;
  }
`;

export const LeftSection = styled.div<{
  $opacity?: boolean;
  $whiteIcons?: boolean;
  $isSearchMode?: boolean;
}>`display: flex;
align-items: center;
justify-content: flex-start;
flex: ${(props) => (props.$isSearchMode ? 'none' : '1')};
margin-right: ${(props) => (props.$isSearchMode ? '1.5rem' : '0')};
margin-left: 10px;

svg {
  filter: ${({ $whiteIcons }) => ($whiteIcons ? 'brightness(0) invert(1)' : 'none')};
}
`;

export const RightSection = styled.div<{ $opacity?: boolean; $whiteIcons?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-top: 3px;
  margin-right: 10px;
  margin-bottom: 2px;

  svg {
    filter: ${({ $whiteIcons }) => ($whiteIcons ? 'brightness(0) invert(1)' : 'none')};
  }
`;

export const ServiceIntroButton = styled.button`
  ${(props) => props.theme.fonts.body.m600}
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary.gn};
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${(props) => props.theme.colors.transparency.gn25};
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.6rem;
  }
`;


export const Title = styled.p<{ $opacity?: boolean }>`
  ${(props) => props.theme.fonts.header.h3}
  text-align: center;
  color: ${(props) => props.theme.colors.grayScale.black};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
