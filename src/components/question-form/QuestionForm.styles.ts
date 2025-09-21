import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const QuestionContainer = styled.div`
  text-align: left;
  box-sizing: border-box;
`;

export const QuestionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 42px;
  line-height: 1.4;
  margin-left: calc(50% - 167.5px);

  @media (max-width: 768px) {
    font-size: 20px;
   
  }

  @media (max-width: 480px) {
    font-size: 18px;
   
  }
`;

export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 20px;
    flex-direction: row;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

export const SubmitButton = styled.button<{ $disabled: boolean }>`
  display: flex;
  width: 335px;
  height: 55px;
  padding: 16px 0 15px 0;
  margin-top: 133px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.primary.gn};
  box-shadow: 0 0 16px 0 ${(props) => props.theme.colors.primary.gn};
  color: ${(props) => props.theme.colors.grayScale.white};
  font-size: 16px;
  font-weight: 600;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  
`;