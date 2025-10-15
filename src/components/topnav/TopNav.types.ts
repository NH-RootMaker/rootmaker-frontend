export interface HeaderProps {
  title?: string;
  isBack?: boolean;
  isClose?: boolean;
  hideLeft?: boolean;
  hideRight?: boolean;
  showBackButton?: boolean;
  showServiceIntro?: boolean;
  onBackClick?: () => void;
  onCloseClick?: () => void;
  onServiceIntroClick?: () => void;
  opacity?: boolean;
  backPath?: number | string;
  transparent?: boolean;
  whiteBackground?: boolean;
}