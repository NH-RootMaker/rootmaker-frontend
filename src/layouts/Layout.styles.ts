import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  margin: 0;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  position: relative;
  padding: 0;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  padding-bottom: 80px; /* BottomNav 공간 확보 */
`;