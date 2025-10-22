import * as S from './CommonButton.styles';

interface CommonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  width?: string;
  type?: 'button' | 'submit';
  customColor?: string;
}

const CommonButton = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  width = '335px',
  type = 'button',
  customColor,
}: CommonButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      $variant={variant}
      $disabled={disabled}
      $width={width}
      $customColor={customColor}
      disabled={disabled}
      type={type}
    >
      {children}
    </S.Button>
  );
};

export default CommonButton;