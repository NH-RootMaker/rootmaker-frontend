import styled from 'styled-components';

export const ChipsContainer = styled.div`
  ${(props) => props.theme.fonts.body.l500}
  width: 30px;
  height: 25px;
  display: flex;
  padding: 4px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.transparency.gn25};
  color: ${(props) => props.theme.colors.primary.gn};
  margin-bottom: 0px;
  margin-top: 32px;
  margin-left: calc(50% - 167.5px);
`;