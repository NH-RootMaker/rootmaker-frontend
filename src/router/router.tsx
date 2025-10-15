import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import OnboardingPage from '../pages/onboarding/OnboardingPage';
import LoginPage from '../pages/login/LoginPage';
import TestPage from '../pages/personality-test/TestPage';
import ResultPage from '../pages/personality-test/ResultPage';
import ErrorPage from '../pages/ErrorPage';
import BufferPage from '../pages/buffer-account/BufferPage';
import BufferEmptyPage from '../pages/buffer-account/BufferEmptyPage';
import BufferRouterPage from '../pages/buffer-account/BufferRouterPage';
import PaybackPage from '../pages/payback/PaybackPage';
import ReportPage from '../pages/report/ReportPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <OnboardingPage />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
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
        element: <BufferRouterPage />,
      },
      {
        path: '/my-subscription',
        element: <BufferPage />,
      },
      {
        path: '/buffer-empty',
        element: <BufferEmptyPage />,
      },
      {
        path: '/payback',
        element: <PaybackPage />,
      },
      {
        path: '/report',
        element: <ReportPage />,
      },
    ],
  },
];

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

export default router;