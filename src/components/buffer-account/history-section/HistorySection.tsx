import * as S from './HistorySection.styles';
import type { HistorySectionProps } from './HistorySection.types';

const HistorySection = ({ 
  title, 
  historyData, 
  formatCurrency = (amount) => amount.toLocaleString() + '원' 
}: HistorySectionProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {historyData.map((item) => (
        <S.HistoryItem key={item.round}>
          <S.HistoryHeader>
            <S.RoundNumber>{item.round}회차</S.RoundNumber>
            <S.Divider />
            <S.MonthText>{item.month}</S.MonthText>
          </S.HistoryHeader>
          <S.HistoryDetails>
            <S.HistoryRow>
              <S.HistoryLabel>납입일자</S.HistoryLabel>
              <S.HistoryValue>{item.date}</S.HistoryValue>
            </S.HistoryRow>
            <S.AmountRow>
              <S.HistoryLabel>납입금액</S.HistoryLabel>
              <S.AmountRightGroup>
                <S.AmountValue>{formatCurrency(item.amount)}</S.AmountValue>
                <S.HistoryValue>{item.count}회</S.HistoryValue>
              </S.AmountRightGroup>
            </S.AmountRow>
            <S.HistoryRow>
              <S.HistoryLabel>납입 후 잔액</S.HistoryLabel>
              <S.HistoryLabel>{formatCurrency(item.balance)}</S.HistoryLabel>
            </S.HistoryRow>
          </S.HistoryDetails>
        </S.HistoryItem>
      ))}
    </S.Container>
  );
};

export default HistorySection;