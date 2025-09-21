import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/personality-test/TestPage';
import ResultPage from '../pages/personality-test/ResultPage';
import ErrorPage from '../pages/ErrorPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '/result',
    element: <ResultPage />,
  },
];

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

export default router;