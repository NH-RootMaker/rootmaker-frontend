import { ReactElement } from 'react';

export interface NavItem {
  id: string;
  path: string;
  label: string;
  defaultIcon: ReactElement;
  activeIcon: ReactElement;
}

export type NavItems = NavItem[];