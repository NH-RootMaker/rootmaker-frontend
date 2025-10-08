export interface DepositHistoryItem {
  round: number;
  month: string;
  date: string;
  amount: number;
  count: number;
  balance: number;
}

export interface HistorySectionProps {
  title: string;
  historyData: DepositHistoryItem[];
  formatCurrency?: (amount: number) => string;
}