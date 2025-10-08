export interface DepositHistoryItem {
  round: number;
  month: string;
  date: string;
  amount: number;
  count: number;
  balance: number;
}

export const DEPOSIT_HISTORY: DepositHistoryItem[] = [
  {
    round: 4,
    month: '2025.09월분',
    date: '2025.09.01',
    amount: 500000,
    count: 2,
    balance: 3000000
  },
  {
    round: 3,
    month: '2025.08월분',
    date: '2025.08.01',
    amount: 500000,
    count: 1,
    balance: 2500000
  },
  {
    round: 2,
    month: '2025.07월분',
    date: '2025.07.01',
    amount: 1000000,
    count: 1,
    balance: 2000000
  },
  {
    round: 1,
    month: '2025.06월분',
    date: '2025.06.01',
    amount: 1000000,
    count: 1,
    balance: 1000000
  }
];

export const ACCOUNT_INFO = {
  name: '청년 주택드림 청약통장',
  number: '12345678-91-011121',
  balance: 3000000,
  openDate: '2025.09.16'
};

export const SAVINGS_GOAL = {
  goalText: '지금 5,000원 입금하면\n또래 대비 저축액 상위 10% 돌파!',
  levelNum: 1,
  levelId: '아기청약'
};