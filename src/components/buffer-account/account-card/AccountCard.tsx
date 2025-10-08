import * as S from './AccountCard.styles';
import type { AccountCardProps } from './AccountCard.types';
import Divider from '@/components/divider';

const AccountCard = ({ 
  accountInfo, 
  actionButtons = [],
  formatCurrency = (amount) => amount.toLocaleString() + '원'
}: AccountCardProps) => {
  return (
    <S.Container>
      <S.AccountName>{accountInfo.name}</S.AccountName>
      <S.AccountNumber>{accountInfo.number}</S.AccountNumber>
      <Divider /> 
      <S.BalanceSection>
        <S.BalanceLabel>잔액</S.BalanceLabel>
        <S.BalanceAmount>{formatCurrency(accountInfo.balance)}</S.BalanceAmount>
      </S.BalanceSection>
      
      <S.AccountDetails>
        <S.DetailItem>
          <S.DetailLabel>개설일</S.DetailLabel>
          <S.DetailValue>{accountInfo.openDate}</S.DetailValue>
        </S.DetailItem>
      </S.AccountDetails>
      
      {actionButtons.length > 0 && (
        <>
          <Divider />
          <S.ActionButtons>
            {actionButtons.map((button, index) => (
              <S.ActionButton key={index} onClick={button.onClick}>
                {button.label}
              </S.ActionButton>
            ))}
          </S.ActionButtons>
        </>
      )}
    </S.Container>
  );
};

export default AccountCard;