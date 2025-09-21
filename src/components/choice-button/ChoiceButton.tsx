import * as S from './ChoiceButton.styles';
import type { ChoiceButtonProps } from './ChoiceButton.types';
import OptimizedImage from '@/components/optimized-image';

/**
 * 양자택일 버튼 컴포넌트
 */
const ChoiceButton = ({
  children,
  option,
  isSelected = false,
  hasAnySelection = false,
  onClick,
  imageUrl,
}: ChoiceButtonProps) => {
  const handleClick = () => {
    onClick(option);
  };

  return (
    <S.ChoiceContainer $isSelected={isSelected} $hasAnySelection={hasAnySelection} onClick={handleClick} type="button">
      {imageUrl && (
        <OptimizedImage 
          src={imageUrl} 
          alt={`Option ${option}`} 
          width="110px" 
          height="110px" 
          style={{ marginTop: '7px' }}
          priority={true}
        />
      )}
      <S.ChoiceText $isSelected={isSelected} $hasAnySelection={hasAnySelection}>
        {children}
      </S.ChoiceText>
    </S.ChoiceContainer>
  );
};

export default ChoiceButton;