import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import TestPage from '../pages/personality-test/TestPage';
import ResultPage from '../pages/personality-test/ResultPage';
import ErrorPage from '../pages/ErrorPage';
import BufferPage from '../pages/buffer-account/BufferPage';
import PaybackPage from '../pages/payback/PaybackPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/test',
        element: <TestPage />,
      },
      {
        path: '/result',
        element: <ResultPage />,
      },
      {
        path: '/buffer',
        element: <BufferPage />,
      },
      {
        path: '/payback',
        element: <PaybackPage />,
      },
    ],
  },
];

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

export default router;