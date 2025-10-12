import * as S from './Layout.styles';
import TopNav from '@/components/topnav';
import BottomNav from '@/components/bottom-nav';
import { AnimatePresence } from 'framer-motion';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { Outlet, ScrollRestoration } from 'react-router-dom';



/**
 * Layout component
 * @returns {JSX.Element}
 */

export default function Layout() {

  const isNav = useLayoutStore((state) => state.isNav);


  return (
    <S.Container>
      {isNav && <TopNav />}
      <S.Content>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </S.Content>
      <BottomNav />
      <ScrollRestoration />
    </S.Container>
  );
}