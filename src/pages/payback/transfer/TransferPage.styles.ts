import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  background-color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: hidden;
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
  margin-bottom: 2.5rem;
  margin-top: -40px;
`;

export const TodayTotalSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: -38px;
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
position: fixed;
bottom: 110px;
left: 50%;
transform: translateX(-50%);
max-width: 480px;
width: calc(100vw - 40px);
padding: 20px;
display: flex;
justify-content: center;

${(props) => props.theme.media.tablet} {
  max-width: 768px;
}

${(props) => props.theme.media.desktop} {
    max-width: 1024px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.98) 30%,
      rgba(255, 255, 255, 0.7) 70%,
      transparent 100%
    );
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: -1;
  }
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