import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  padding-top: 3.875rem;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: calc(100vh - 3.875rem);
  overflow: hidden;
`;
