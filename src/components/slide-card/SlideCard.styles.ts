import styled from 'styled-components';

export const Card = styled.div<{ 
  position: 'prev' | 'current' | 'next';
  index: number;
  $color?: 'yellow' | 'green' | 'blue';
}>`
  position: absolute;
  background: ${(props) => {
    switch (props.$color) {
      case 'green':
        return 'linear-gradient(150deg, #42CE79 -4.51%, #4CBAEB 99.54%)';
      case 'yellow':
        return 'linear-gradient(150deg, #FFD900 -4.51%, #BB6EFF 99.54%)';
      case 'blue':
        return 'linear-gradient(149deg, #2D2D39 -1.84%, #008CFF 115.5%)';
      default:
        return props.theme.colors.grayScale.white;
    }
  }};
  border: none;
  border-radius: 16px 16px 54px 16px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: visible;
  
  /* 터치/클릭 시 하이라이트 효과 제거 */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &:focus {
    outline: none;
  }
  
  &:active {
    transform: none;
  }
  
  width: 280px;
  height: 330px;
  flex-shrink: 0;
  
  /* 375px 기준 사이즈 반응형 조정 */
  @media (max-width: 320px) {
    width: 256px;  
    height: 307px;
  }

  @media (max-width: 360px) {
    width: 250px; 
    height: 300px; 
  }
  
  @media (min-width: 376px) and (max-width: 425px) {
    width: 280px;  
    height: 300px; 
  }
  
  @media (min-width: 481px) {
    width: 300px;  /* 더 큰 화면에서는 약간 확대 */
    height: 340px;
  }
  
  ${({ position }) => {
    switch (position) {
      case 'current':
        return `
          z-index: 3;
          transform: translateX(0) scale(1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        `;
      case 'next':
        return `
          z-index: 2;
          transform: translateX(300px) scale(1);
          margin-left: 164px;

          @media (max-width: 360px) {
            margin-left: 115px;
          }
        `;
      case 'prev':
        return `
          z-index: 2;
          transform: translateX(-300px) scale(1);
          margin-right: 164px;
          
          @media (max-width: 360px) {
            margin-right: 115px;
          }
        `;
      default:
        return `
          z-index: 1;
          transform: translateX(0) scale(0.6);
          opacity: 0.6;
        `;
    }
  }}


  @media (max-width: 480px) {
    ${({ position }) => {
      switch (position) {
        case 'next':
          return `transform: translateX(220px) scale(0.75);`;
        case 'prev':
          return `transform: translateX(-220px) scale(0.75);`;
        default:
          return '';
      }
    }}

  }
`;

export const Chip = styled.div<{ 
  position: 'prev' | 'current' | 'next';
  $color?: 'yellow' | 'green' | 'blue';
}>`
  border-radius: 12px 12px 12px 0;
  padding: 6px 12px;
  margin-top: 25px;
  margin-bottom: 5px;
  background: ${(props) => props.theme.colors.grayScale.white};
  color: ${(props) => {
    switch (props.$color) {
      case 'green':
        return props.theme.colors.secondary.gn;
      case 'yellow':
        return '#C91FC7';
      case 'blue':
        return '#2A3143';
      default:
        return props.theme.colors.grayScale.black;
    }
  }};
  ${(props) => props.theme.fonts.body.m600};
  text-align: center;
`;

export const Subtitle = styled.h2<{ position: 'prev' | 'current' | 'next' }>`
  ${(props) => props.theme.fonts.header.h1}
  color: ${(props) => props.theme.colors.grayScale.white};
  margin-top: 14px;
  text-align: center;
  white-space: pre-wrap;
`;

export const Description = styled.p<{ position: 'prev' | 'current' | 'next' }>`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.transparency.wt75};
  margin: -10px;
  white-space: pre-wrap;
`;

export const CardImage = styled.img<{ position: 'prev' | 'current' | 'next' }>`
  position: absolute;
  bottom: -22%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  width: 200px;
  height: 200px;
`;