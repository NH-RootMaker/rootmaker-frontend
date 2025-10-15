import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Content = styled.div`
  flex: 1;
  padding: 1rem;
  margin-top: 3.845rem;
  padding-bottom: 120px;
`;

export const AccountSection = styled.div`
  text-align: left;
  margin-left: 0.5rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
`;

export const AccountTitle = styled.h2`
  ${(props) => props.theme.fonts.header.h2}
  color: ${(props) => props.theme.colors.grayScale.gy800};
`;

export const GreenText = styled.span`
  ${(props) => props.theme.fonts.point}
  color: ${(props) => props.theme.colors.primary.gn};
`;

export const AccountNumber = styled.p`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin-top: -12px;
`;

export const AccountNumberValue = styled.span`
  ${(props) => props.theme.fonts.body.l600}
  color: ${(props) => props.theme.colors.grayScale.gy800};
`;

export const QuestionSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;


export const AmountInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const AmountInput = styled.input`
  ${(props) => props.theme.fonts.header.h1}
  color: ${(props) => props.theme.colors.primary.gn};
  text-align: center;
  border: none;
  border-bottom: 1.8px solid ${(props) => props.theme.colors.grayScale.gy400};
  outline: none;
  background: transparent;
  width: 183px;
  max-width: 183px;
  padding-bottom: 0rem;
  
  &::placeholder {
    ${(props) => props.theme.fonts.display}
    color: ${(props) => props.theme.colors.grayScale.gy400};
  }
`;

export const WonUnit = styled.span`
  ${(props) => props.theme.fonts.display}
  color: ${(props) => props.theme.colors.grayScale.black};
  margin-top:0.55rem;
`;

export const MyAccountSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: -40px;
`;

export const MyAccountRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:202px;
`;

export const MyAccountTitle = styled.h4`
  ${(props) => props.theme.fonts.body.l600}
  color: ${(props) => props.theme.colors.primary.gn};
  margin: 0;
`;

export const Balance = styled.p`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  margin: 0;
`;

export const BalanceAmount = styled.span`
  ${(props) => props.theme.fonts.body.l600}
  color: ${(props) => props.theme.colors.grayScale.gy800};
`;

export const ButtonContainer = styled.div`
  padding: 1rem;
  margin-top: 180px;
`;

export const KeyboardOverlay = styled.div`
  position: fixed;
  margin-bottom: 40px;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  border-top: 1px solid ${(props) => props.theme.colors.grayScale.gy200};
  z-index: 1000000000;
`;