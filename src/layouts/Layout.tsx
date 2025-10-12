import * as S from './Layout.styles';
import TopNav from '@/components/topnav';
import BottomNav from '@/components/bottom-nav';
import { AnimatePresence } from 'framer-motion';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';



/**
 * Layout component
 * @returns {JSX.Element}
 */

export default function Layout() {
  const isNav = useLayoutStore((state) => state.isNav);
  const location = useLocation();

  // 페이지 변경 시 스크롤을 맨 위로
  useEffect(() => {
    // 여러 스크롤 컨테이너에 대해 시도
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    // #root 컨테이너도 스크롤 초기화
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.scrollTo(0, 0);
    }
  }, [location.pathname]);


  return (
    <S.Container>
      {isNav && <TopNav />}
      <S.Content>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </S.Content>
      <BottomNav />
    </S.Container>
  );
}