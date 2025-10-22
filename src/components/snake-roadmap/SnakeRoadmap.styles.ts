import styled from 'styled-components';

export const Container = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
  z-index: 1;
`;

export const NodeContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 30px;
`;

export const NodeButton = styled.div<{ $clickable?: boolean; $isCurrent?: boolean }>`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  
  > img {
    width: ${props => props.$isCurrent ? '110%' : '100%'};
    height: ${props => props.$isCurrent ? '110%' : '100%'};
    margin-top: 25px;
    object-fit: contain;
    border-radius: 50%;
  }

  /* 클릭 효과 제거 */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &:active {
    transform: none;
  }
  
  &:hover {
    transform: none;
  }
`;

export const NodeContent = styled.div<{ isLeft?: boolean }>`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const WateringIcon = styled.div`
  position: relative;
  top: 5px;
  
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    transform: rotate(-15deg);
  }
`;

export const AmountText = styled.div`
  position: relative;
  ${(props) => props.theme.fonts.body.m600}
  color: ${props => props.theme.colors.secondary.gn};
  top: 13px;
  white-space: nowrap;
`;

export const RoundNumber = styled.div<{ $isCurrent?: boolean }>`
  position: relative;
  ${(props) => props.theme.fonts.header.h2}
  color: ${props => props.$isCurrent ? props.theme.colors.grayScale.white : props.theme.colors.transparency.gn50};
  top: 5px;
`;

export const PaybackPointText = styled.div<{ $isCurrent?: boolean }>`
  position: relative;
  ${(props) => props.theme.fonts.body.m600}
  color: ${props => props.$isCurrent ? props.theme.colors.grayScale.white : props.theme.colors.transparency.gn75};
  top: 22px;
  white-space: nowrap;
`;

export const CheckSticker = styled.div`
  position: absolute;
  top: 60px;
  right: 5px;
  z-index: 10;
  
  img {
    width: 25px;
    height: 25px;
  }
`;

export const ConnectionLine = styled.div`
  z-index: 0;
`;
