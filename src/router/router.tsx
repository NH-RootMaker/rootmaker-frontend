import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ErrorPage from '../pages/ErrorPage';

// Lazy load components for better performance
const HomePage = lazy(() => import('../pages/personality-test/test-main/TestHomePage'));
const OnboardingPage = lazy(() => import('../pages/onboarding/OnboardingPage'));
const LoginPage = lazy(() => import('../pages/onboarding/login/LoginPage'));
const TestPage = lazy(() => import('../pages/personality-test/test/TestPage'));
const ResultPage = lazy(() => import('../pages/personality-test/result/ResultPage'));
const BufferPage = lazy(() => import('../pages/buffer-account/BufferPage'));
const BufferEmptyPage = lazy(() => import('../pages/buffer-account/empty/BufferEmptyPage'));
const BufferRouterPage = lazy(() => import('../pages/buffer-account/BufferRouterPage'));
const PaybackPage = lazy(() => import('../pages/payback/roadmap/PaybackPage'));
const ReportPage = lazy(() => import('../pages/report/ReportPage'));
const TransferPage = lazy(() => import('../pages/payback/transfer/TransferPage'));
const ActionPage = lazy(() => import('@/pages/payback/ActionPage'));
const MissionPage = lazy(() => import('../pages/mission/MissionPage'));

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f8f9fa'
  }}>
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '62px',
      backgroundColor: 'white',
      zIndex: 1000,
      borderBottom: '1px solid #e0e0e0'
    }} />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginTop: '62px',
      gap: '16px',
      transform: 'translateY(-50px)'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #e0e0e0',
        borderTop: '3px solid #42CE79',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <div style={{
        fontSize: '16px',
        color: '#42CE79',
        fontWeight: '500'
      }}>로딩 중...</div>
    </div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

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
        path: '/result',
        element: <SuspenseWrapper><ResultPage /></SuspenseWrapper>,
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