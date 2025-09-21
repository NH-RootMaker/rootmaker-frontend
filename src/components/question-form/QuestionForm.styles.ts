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

export const QuestionTitle = styled.h2 ` 
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-bottom: 42px;
  line-height: 1.4;
  margin-left: calc(50% - 164.5px);
  white-space: pre-wrap;
  line-height: 1.5;

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
  margin-top: 133px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;
