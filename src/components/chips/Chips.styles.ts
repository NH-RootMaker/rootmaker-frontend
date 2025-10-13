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

  @media (max-width: 320px) {
    margin-left: calc(50% - 140px);
    margin-top: 24px;
  }
`;

interface LevelChipsContainerProps {
  $size?: 'small' | 'medium' | 'large';
}

export const LevelChipsContainer = styled.div<LevelChipsContainerProps>`
  display: flex;
  width: 99px;
  height: 29px;
  padding: 1px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.transparency.gn25};
  background: ${(props) => props.theme.colors.transparency.gn75};
  color: ${(props) => props.theme.colors.grayScale.white};
  white-space: nowrap;
  
  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return `
          ${theme.fonts.body.l500}
        `;
      case 'large':
        return `
          ${theme.fonts.body.xl500}
        `;
      case 'medium':
      default:
        return `
          ${theme.fonts.body.l500}
        `;
    }
  }}
`;