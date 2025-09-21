import styled from 'styled-components';

export const ChipsContainer = styled.div`
  width: 35px;
  height: 25px;
  display: flex;
  padding: 4px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.primary.gn}25;
  color: ${(props) => props.theme.colors.primary.gn};
  margin-bottom: 0px;
  margin-top: 32px;
  margin-left: calc(50% - 167.5px);

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;