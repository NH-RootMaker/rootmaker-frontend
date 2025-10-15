import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Dot = styled.div<{ $isCurrent: boolean }>`
  width: ${(props) => props.$isCurrent ? '24px' : '8px'};
  height: 8px;
  border-radius: ${(props) => props.$isCurrent ? '4px' : '50%'};
  background: ${(props) => 
    props.$isCurrent 
      ? props.theme.colors.primary.gn 
      : props.theme.colors.grayScale.gy200
  };
  transition: all 0.3s ease;
`;