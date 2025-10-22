import * as S from './Layout.styles';
import TopNav from '@/components/topnav';
import BottomNav from '@/components/bottom-nav';
import LoadingScreen from '@/components/loading-screen';
import { AnimatePresence } from 'framer-motion';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useLoadingStore } from '@/stores/useLoadingStore';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



/**
 * Layout component
 * @returns {JSX.Element}
 */

export default function Layout() {
  const isTopNav = useLayoutStore((state) => state.isTopNav);
  const isBottomNav = useLayoutStore((state) => state.isBottomNav);
  const { isLoading, loadingMessage, setLoading } = useLoadingStore();
  const location = useLocation();
  const [isPageReady, setIsPageReady] = useState(false);

  // 페이지 변경 시 로딩 시작 및 초기화
  useEffect(() => {
    // 페이지 변경 시작 - 로딩 시작
    setLoading(true, '로딩중');
    setIsPageReady(false);
    
    // 스크롤 초기화
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.scrollTo(0, 0);
    }
  }, [location.pathname, setLoading]);

  // 페이지 렌더링 완료 감지
  useEffect(() => {
    if (!isLoading) return; // 로딩 중이 아니면 리턴
    
    // DOM 업데이트 대기 후 렌더링 완료 처리
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsPageReady(true);
          setLoading(false);
        });
      });
    }, 150); // 최소 로딩 시간

    return () => clearTimeout(timer);
  }, [location.pathname, isLoading, setLoading]);


  if (isLoading || !isPageReady) {
    return <LoadingScreen message={loadingMessage} />;
  }

  return (
    <S.Container>
      {isTopNav && <TopNav />}
      <S.Content>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </S.Content>
      {isBottomNav && <BottomNav />}
    </S.Container>
  );
}