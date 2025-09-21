import * as S from './CommonInput.styles';

interface CommonInputProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  label?: string;
  width?: string;
  disabled?: boolean;
}

const CommonInput = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onKeyPress,
  label,
  width = '100%',
  disabled = false,
}: CommonInputProps) => {
  return (
    <S.InputContainer $width={width}>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        disabled={disabled}
      />
    </S.InputContainer>
  );
};

export default CommonInput;