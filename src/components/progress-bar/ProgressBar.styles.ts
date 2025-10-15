import styled from 'styled-components';

export const ProgressContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
`;


export const ProgressBarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 335px;
  height: 13px;
  background-color: ${(props) => props.theme.colors.grayScale.gy200};
  border-radius: 24px;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 320px) {
    width: 280px;
    height: 12px;
  }
`;

export const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary.gn};
  width: ${({ $progress }) => $progress}%;
  transition: width 0.3s ease;
  border-radius: 24px;
`;