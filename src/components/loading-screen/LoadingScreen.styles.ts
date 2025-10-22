import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  position: relative;
  overflow: hidden;
`;

export const TopNavPlaceholder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 62px;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.grayScale.gy100};
  z-index: 1000;
`;

export const BottomNavPlaceholder = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  border-top: 1px solid ${(props) => props.theme.colors.grayScale.gy100};
  z-index: 1000;
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 16px;
  padding-top: 62px;
  padding-bottom: 80px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${(props) => props.theme.colors.grayScale.gy200};
  border-top: 3px solid ${(props) => props.theme.colors.primary.gn};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.h1`
  ${(props) => props.theme.fonts.body.l600}
  color: ${(props) => props.theme.colors.primary.gn};
  text-align: center;
  margin: 0;
`;