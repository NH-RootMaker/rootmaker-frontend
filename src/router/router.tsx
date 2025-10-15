import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Layout from '../layouts/Layout';
import HomePage from '../pages/personality-test/test-main/TestHomePage';
import OnboardingPage from '../pages/onboarding/OnboardingPage';
import LoginPage from '../pages/onboarding/login/LoginPage';
import TestPage from '../pages/personality-test/test/TestPage';
import ResultPage from '../pages/personality-test/result/ResultPage';
import ErrorPage from '../pages/ErrorPage';
import BufferPage from '../pages/buffer-account/BufferPage';
import BufferEmptyPage from '../pages/buffer-account/empty/BufferEmptyPage';
import BufferRouterPage from '../pages/buffer-account/BufferRouterPage';
import PaybackPage from '../pages/payback/roadmap/PaybackPage';
import ReportPage from '../pages/report/ReportPage';
import TransferPage from '../pages/payback/transfer/TransferPage';
import ActionPage from '@/pages/payback/ActionPage';

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
      {
        path: '/transfer',
        element: <TransferPage />,
      },
      {
        path: '/action',
        element: <ActionPage />,
      },
    ],
  },
];

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

export default router;