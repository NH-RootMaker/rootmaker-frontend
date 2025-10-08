export interface HeaderProps {
  title?: string;
  isBack?: boolean;
  isClose?: boolean;
  hideLeft?: boolean;
  hideRight?: boolean;
  showBackButton?: boolean;
  onBackClick?: () => void;
  onCloseClick?: () => void;
  opacity?: boolean;
  backPath?: number | string;
  transparent?: boolean;
  whiteBackground?: boolean;
}