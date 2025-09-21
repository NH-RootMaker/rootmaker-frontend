import styled from 'styled-components';

export const ChoiceContainer = styled.button<{ $isSelected: boolean }>`
  display: flex;
  width: 155px;
  height: 204px;
  padding: 24px 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-color:transparent;
  border-radius: 16px;
  background: var(--GrayScale-WT, #FAFAFA);
  box-shadow: 0 0 16px 0 rgba(66, 206, 121, 0.75);
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

export const ChoiceText = styled.div<{ $isSelected: boolean }>`
  font-size: 16px;
  font-weight: ${({ $isSelected }) => $isSelected ? '600' : '400'};
  color: ${({ $isSelected }) => $isSelected ? '#007bff' : '#333'};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;