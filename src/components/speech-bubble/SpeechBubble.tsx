import * as S from './SpeechBubble.styles';
import type { SpeechBubbleProps } from './SpeechBubble.types';

/**
 * 말풍선 컴포넌트
 * 다양한 색상과 크기, 꼬리 위치를 지원하는 재사용 가능한 말풍선
 */
const SpeechBubble = ({ 
  children, 
  variant = 'pine', 
  size = 'medium',
  tailPosition,
  customColor
}: SpeechBubbleProps) => {
  return (
    <S.SpeechBubbleContainer 
      $variant={variant} 
      $size={size}
      $tailPosition={tailPosition}
      $customColor={customColor}
    >
      {children}
    </S.SpeechBubbleContainer>
  );
};

export default SpeechBubble;