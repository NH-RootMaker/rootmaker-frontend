import styled from 'styled-components';

export const Container = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
  overflow: hidden;
  z-index: 1;
`;

export const NodeContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;

export const NodeButton = styled.div`
  position: relative;
  width: 95px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const NodeContent = styled.div<{ isLeft?: boolean }>`
  position: absolute;
  top: 50%;
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
  top: -15px;
  
  img {
    width: 72px;
    height: 72px;
    object-fit: contain;
    transform: rotate(-15deg);
  }
`;

export const AmountText = styled.div`
  position: relative;
  ${(props) => props.theme.fonts.body.m600}
  color: ${props => props.theme.colors.secondary.gn};
  line-height: 1;
  top: -25px;
`;

export const CheckSticker = styled.div`
  position: absolute;
  top: 48px;
  right: -3px;
  z-index: 10;
  
  img {
    width: 32px;
    height: 32px;
  }
`;