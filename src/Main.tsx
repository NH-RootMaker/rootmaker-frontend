import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import router from './router/router';
import { theme } from './styles/theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.grayScale.white};
`;

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default Main;
