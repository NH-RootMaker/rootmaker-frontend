import styled from 'styled-components';

export const Overlay = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  transition: opacity 0.15s ease-in-out;
  opacity: ${props => props.$isVisible ? 1 : 0};
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
`;

export const ToastContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  transition: all 0.15s ease-in-out;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible 
    ? 'translateX(-50%) translateY(0)' 
    : 'translateX(-50%) translateY(20px)'
  };
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
  
  display: flex;
  justify-content: center;
  padding: 0;
`;