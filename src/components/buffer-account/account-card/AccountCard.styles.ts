import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.grayScale.white};
  border-radius: 16px;
  padding: 3px 20px;
  margin-bottom: -120px;
  ${(props) => props.theme.effects.dropShadow.dsDefault}
`;

export const AccountName = styled.h3`
  ${(props) => props.theme.fonts.body.l500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
  text-align: center;
`;

export const AccountNumber = styled.p`
  ${(props) => props.theme.fonts.body.xl500}
  color: ${(props) => props.theme.colors.grayScale.black};
  text-align: center;
  margin-top: -15px;
  margin-bottom: 16px;

`;

export const BalanceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BalanceLabel = styled.p`
  ${(props) => props.theme.fonts.body.xl500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
`;

export const BalanceAmount = styled.p`
  ${(props) => props.theme.fonts.body.xl500}
  color: ${(props) => props.theme.colors.secondary.gn};
`;

export const AccountDetails = styled.div`
  margin-bottom: 16px;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailLabel = styled.span`
  ${(props) => props.theme.fonts.body.xl500}
  color: ${(props) => props.theme.colors.grayScale.gy600};
`;

export const DetailValue = styled.span`
  ${(props) => props.theme.fonts.body.xl500}  
  color: ${(props) => props.theme.colors.secondary.gn};
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
`;

export const ActionButton = styled.button`
  ${(props) => props.theme.fonts.body.l600}
  background-color: transparent;
  color: ${(props) => props.theme.colors.grayScale.gy600};
  border: none;
  padding: 8px 12px;
  flex: 1;
  text-align: center;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background-color: ${(props) => props.theme.colors.grayScale.gy200};
  }
`;