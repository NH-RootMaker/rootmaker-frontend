export interface ToastMessageProps {
  message: string;
  variant?: 'pine' | 'cherry' | 'maple' | 'apple' | 'info';
  duration?: number;
  onClose?: () => void;
}