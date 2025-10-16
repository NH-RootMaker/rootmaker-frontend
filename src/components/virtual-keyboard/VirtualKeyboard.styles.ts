import styled from 'styled-components';

export const KeyboardContainer = styled.div`
  position: fixed;
  bottom: 110px;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.grayScale.gy100};
  border-top: 1px solid ${(props) => props.theme.colors.grayScale.gy200};
  z-index: 1000;
  max-height: 60vh;
  overflow-y: auto;
`;

export const KeyboardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.3rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayScale.gy200};
`;

export const CloseButton = styled.button`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.primary.gn};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const KeyboardContent = styled.div`
  padding: 1rem;
`;

export const NumberSection = styled.div`
  width: 100%;
`;

export const LetterSection = styled.div`
  flex: 2;
`;

export const KeyRow = styled.div<{ isLetterRow?: boolean }>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: center;
`;

export const Key = styled.button<{ $isEmpty?: boolean; $isDelete?: boolean }>`
  ${(props) => props.theme.fonts.body.xl500}
  flex: 1;
  height: 35px;
  border: 1px solid ${(props) => props.theme.colors.grayScale.gy200};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  color: ${(props) => props.theme.colors.secondary.gn};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$isEmpty ? 0 : 1};
  pointer-events: ${props => props.$isEmpty ? 'none' : 'auto'};
  

  ${props => props.$isDelete && `
    background-color: ${props.theme.colors.primary.gn};
    color: ${props.theme.colors.grayScale.white};
  `}
`;


export const index = styled.div``;