import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import Layout from '../layouts/Layout';
import LoadingScreen from '../components/loading-screen';
import ErrorPage from '../pages/ErrorPage';

// Lazy load components for better performance
const HomePage = lazy(() => import('../pages/personality-test/test-main/TestHomePage'));
const OnboardingPage = lazy(() => import('../pages/onboarding/OnboardingPage'));
const LoginPage = lazy(() => import('../pages/onboarding/login/LoginPage'));
const TestPage = lazy(() => import('../pages/personality-test/test/TestPage'));
const ResultPage = lazy(() => import('../pages/personality-test/result/ResultPage'));
const ResultPageView = lazy(() => import('../pages/personality-test/result/ResultPageView'));
const BufferPage = lazy(() => import('../pages/buffer-account/BufferPage'));
const BufferEmptyPage = lazy(() => import('../pages/buffer-account/empty/BufferEmptyPage'));
const BufferRouterPage = lazy(() => import('../pages/buffer-account/BufferRouterPage'));
const PaybackPage = lazy(() => import('../pages/payback/roadmap/PaybackPage'));
const ReportPage = lazy(() => import('../pages/report/ReportPage'));
const TransferPage = lazy(() => import('../pages/payback/transfer/TransferPage'));
const ActionPage = lazy(() => import('../pages/payback/action/ActionPage'));
const MissionPage = lazy(() => import('../pages/payback/mission/MissionPage'));

// Loading component for Suspense fallback
const LoadingFallback = () => <LoadingScreen message="로딩중" />;

// Wrapper component for Suspense
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SuspenseWrapper><OnboardingPage /></SuspenseWrapper>,
      },
      {
        path: '/home',
        element: <SuspenseWrapper><HomePage /></SuspenseWrapper>,
      },
      {
        path: '/login',
        element: <SuspenseWrapper><LoginPage /></SuspenseWrapper>,
      },
      {
        path: '/test',
        element: <SuspenseWrapper><TestPage /></SuspenseWrapper>,
      },
      {
        path: '/test-result',
        element: <SuspenseWrapper><ResultPage /></SuspenseWrapper>,
      },
      {
        path: '/result',
        element: <SuspenseWrapper><ResultPageView /></SuspenseWrapper>,
      },
      {
        path: '/buffer',
        element: <SuspenseWrapper><BufferRouterPage /></SuspenseWrapper>,
      },
      {
        path: '/my-subscription',
        element: <SuspenseWrapper><BufferPage /></SuspenseWrapper>,
      },
      {
        path: '/buffer-empty',
        element: <SuspenseWrapper><BufferEmptyPage /></SuspenseWrapper>,
      },
      {
        path: '/payback',
        element: <SuspenseWrapper><PaybackPage /></SuspenseWrapper>,
      },
      {
        path: '/report',
        element: <SuspenseWrapper><ReportPage /></SuspenseWrapper>,
      },
      {
        path: '/transfer',
        element: <SuspenseWrapper><TransferPage /></SuspenseWrapper>,
      },
      {
        path: '/action',
        element: <SuspenseWrapper><ActionPage /></SuspenseWrapper>,
      },
      {
        path: '/mission',
        element: <SuspenseWrapper><MissionPage /></SuspenseWrapper>,
      },
    ],
  },
];

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

export default router;