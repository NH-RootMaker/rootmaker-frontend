import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/personality-test/TestPage';
import ErrorPage from '../pages/ErrorPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/personality-test',
    element: <TestPage />,
  },
  {
    path: '/personality-test/:step',
    element: <TestPage />,
  },
];

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

export default router;