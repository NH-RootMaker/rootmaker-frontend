import { useEffect, useState } from 'react';
import SpeechBubble from '@/components/speech-bubble';
import * as S from './ToastMessage.styles';
import type { ToastMessageProps } from './ToastMessage.types';

const ToastMessage = ({ message, variant = 'pine', duration = 2000, onClose }: ToastMessageProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 150); // 애니메이션 완료 후 콜백 실행
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <>
      <S.Overlay $isVisible={isVisible} />
      <S.ToastContainer $isVisible={isVisible}>
        <SpeechBubble variant={variant} tailPosition="top" size="large">
          {message}
        </SpeechBubble>
      </S.ToastContainer>
    </>
  );
};

export default ToastMessage;