import * as S from './Layout.styles';
import TopNav from '@/components/topnav';
import { AnimatePresence } from 'framer-motion';
import { useLayoutStore } from '@/stores/useLayoutStore';



/**
 * Layout component
 * @returns {JSX.Element}
 */

export default function Layout() {

  const isNav = useLayoutStore((state) => state.isNav);


  return (
    <S.Container>
      {isNav && <TopNav />}
      <AnimatePresence mode="wait">
      </AnimatePresence>
    </S.Container>
  );
}