import styled from 'styled-components';

interface InputContainerProps {
  $width: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  ${(props) => props.theme.fonts.body.m500}
  color: ${(props) => props.theme.colors.primary.gn};
  margin-bottom: 12px;
  align-self: flex-start;
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  padding: 16px 20px 15px 20px;
  border-radius: 16px;
  background: rgba(66, 206, 121, 0.25);
  border: none;
  ${(props) => props.theme.fonts.body.xl400}
  color: ${(props) => props.theme.colors.grayScale.black};
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    ${(props) => props.theme.fonts.body.xl400}
    color: ${(props) => props.theme.colors.primary.gn};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.grayScale.gy100};
    color: ${(props) => props.theme.colors.grayScale.gy400};
    cursor: not-allowed;
  }
`;