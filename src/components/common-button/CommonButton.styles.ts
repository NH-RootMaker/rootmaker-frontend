import styled from 'styled-components';

interface ButtonProps {
  $variant: 'primary' | 'secondary';
  $disabled: boolean;
  $width: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: ${({ $width }) => $width};
  height: 55px;
  padding: 16px 0 15px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  ${(props) => props.theme.fonts.header.h3}
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  
  ${({ $variant, theme, $disabled }) => $variant === 'primary' && `
    border: none;
    background: ${$disabled ? theme.colors.grayScale.gy400 : theme.colors.primary.gn};
    box-shadow: 0 0 16px 0 ${$disabled ? theme.colors.grayScale.gy400 : theme.colors.primary.gn};
    color: ${theme.colors.grayScale.white};
  `}
  
  ${({ $variant, theme, $disabled }) => $variant === 'secondary' && `
    border: 1px solid ${$disabled ? theme.colors.grayScale.gy400 : theme.colors.primary.gn};
    background: transparent;
    color: ${$disabled ? theme.colors.grayScale.gy400 : theme.colors.primary.gn};
    box-shadow: none;
  `}

  @media (max-width: 768px) {
    height: 50px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    height: 48px;
    font-size: 0.9rem;
    border-radius: 12px;
  }

  @media (max-width: 320px) {
    height: 44px;
    font-size: 0.8rem;
    padding: 16px 16px 15px 16px;
    border-radius: 8px;
    width: ${({ $width }) => $width === '100%' ? '100%' : $width};
  }

  &:active {
    ${({ $disabled }) => !$disabled && `
      transform: scale(0.98);
    `}
  }
`;