import * as S from './ChoiceButton.styles';
import type { ChoiceButtonProps } from './ChoiceButton.types';

/**
 * 양자택일 버튼 컴포넌트
 */
const ChoiceButton = ({
  children,
  option,
  isSelected = false,
  onClick,
  imageUrl,
}: ChoiceButtonProps) => {
  const handleClick = () => {
    onClick(option);
  };

  return (
    <S.ChoiceContainer $isSelected={isSelected} onClick={handleClick} type="button">
      {imageUrl && (
        <img src={imageUrl} alt={`Option ${option}`} style={{ width: '60px', height: '60px', marginBottom: '12px' }} />
      )}
      <S.ChoiceText $isSelected={isSelected}>
        {children}
      </S.ChoiceText>
    </S.ChoiceContainer>
  );
};

export default ChoiceButton;