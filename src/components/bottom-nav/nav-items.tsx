import type { NavItem } from './nav-types';

// 네비게이션 아이콘 컴포넌트들
const CoinIcon = () => (
  <img src="/src/assets/icons/nav/Coin.svg" alt="Coin" width="24" height="24" />
);

const CoinActiveIcon = () => (
  <img src="/src/assets/icons/nav-active/Coin.svg" alt="Coin" width="24" height="24" />
);

const PeopleIcon = () => (
  <img src="/src/assets/icons/nav/People.svg" alt="People" width="24" height="24" />
);

const PeopleActiveIcon = () => (
  <img src="/src/assets/icons/nav/People.svg" alt="People" width="24" height="24" />
);

const MapIcon = () => (
  <img src="/src/assets/icons/nav/Map.svg" alt="Map" width="24" height="24" />
);

const MapActiveIcon = () => (
  <img src="/src/assets/icons/nav/Map.svg" alt="Map" width="24" height="24" />
);

const ReportIcon = () => (
  <img src="/src/assets/icons/nav/Report.svg" alt="Report" width="24" height="24" />
);

const ReportActiveIcon = () => (
  <img src="/src/assets/icons/nav-active/Report.svg" alt="Report" width="24" height="24" />
);

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'subscription',
    path: '/buffer',
    label: '나의 청약',
    defaultIcon: <CoinIcon />,
    activeIcon: <CoinActiveIcon />,
  },
  {
    id: 'personality',
    path: '/',
    label: '나의 유형',
    defaultIcon: <PeopleIcon />,
    activeIcon: <PeopleActiveIcon />,
  },
  {
    id: 'roadmap',
    path: '/payback',
    label: '나의 로드맵',
    defaultIcon: <MapIcon />,
    activeIcon: <MapActiveIcon />,
  },
  {
    id: 'report',
    path: '/report',
    label: '나의 리포트',
    defaultIcon: <ReportIcon />,
    activeIcon: <ReportActiveIcon />,
  },
];