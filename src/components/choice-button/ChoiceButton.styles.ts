import styled from 'styled-components';

export const ChoiceContainer = styled.button<{ $isSelected: boolean; $hasAnySelection: boolean }>`
  display: flex;
  width: 155px;
  height: 204px;
  padding: 24px 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 16px;
  background-color: ${({ $isSelected, $hasAnySelection, theme }) => 
    $isSelected ? theme.colors.transparency.gn25 :
    $hasAnySelection ? theme.colors.grayScale.gy200 : theme.colors.grayScale.white};
  box-shadow: ${({ $isSelected, $hasAnySelection, theme }) => 
    $isSelected ? `0 0 16px 0 ${theme.colors.transparency.gn75}` :
    $hasAnySelection ? `0 0 16px 0 ${theme.colors.transparency.wt50}` : 
    `0 0 16px 0 ${theme.colors.transparency.gn75}`};;
  cursor: pointer;
  transition: all 0.3s ease;
  
  
  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 16px;
    margin: 6px 0;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    margin: 4px 0;
    border-radius: 8px;
  }
`;

export const ChoiceText = styled.div<{ $isSelected: boolean; $hasAnySelection: boolean }>`
  ${(props) => props.theme.fonts.header.h3}
  color: ${({ $isSelected, $hasAnySelection, theme }) => 
    $isSelected ? theme.colors.secondary.gn :
    $hasAnySelection ? theme.colors.grayScale.gy600 : theme.colors.primary.gn};
  line-height: 1.5;
  white-space: pre-wrap;
  padding: 8px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;