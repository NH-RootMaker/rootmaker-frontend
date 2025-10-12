import type { NavItem } from './nav-types';

// 네비게이션 아이콘 import
import CoinSvg from '@/assets/icons/nav/Coin.svg?react';
import PeopleSvg from '@/assets/icons/nav/People.svg?react';
import MapSvg from '@/assets/icons/nav/Map.svg?react';
import ReportSvg from '@/assets/icons/nav/Report.svg?react';

// 네비게이션 아이콘 컴포넌트들
const CoinIcon = () => <CoinSvg width="24" height="24" />;
const CoinActiveIcon = () => <CoinSvg width="24" height="24" />;
const PeopleIcon = () => <PeopleSvg width="24" height="24" />;
const PeopleActiveIcon = () => <PeopleSvg width="24" height="24" />;
const MapIcon = () => <MapSvg width="24" height="24" />;
const MapActiveIcon = () => <MapSvg width="24" height="24" />;
const ReportIcon = () => <ReportSvg width="24" height="24" />;
const ReportActiveIcon = () => <ReportSvg width="24" height="24" />;

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