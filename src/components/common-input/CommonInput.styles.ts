import styled from 'styled-components';

interface InputContainerProps {
  $width: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ $width }) => $width};
`;

export const Label = styled.label`
  ${(props) => props.theme.fonts.body.m500}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 12px;
  align-self: flex-start;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 16px 20px;
  border: 2px solid ${(props) => props.theme.colors.grayScale.gy200};
  border-radius: 16px;
  ${(props) => props.theme.fonts.body.xl400}
  color: ${(props) => props.theme.colors.grayScale.black};
  background: ${(props) => props.theme.colors.grayScale.white};
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary.gn};
  }

  &::placeholder {
    ${(props) => props.theme.fonts.body.xl400}
    color: ${(props) => props.theme.colors.grayScale.gy400};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.grayScale.gy100};
    color: ${(props) => props.theme.colors.grayScale.gy400};
    cursor: not-allowed;
  }
`;