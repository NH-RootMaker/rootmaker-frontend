export interface AccountInfo {
  name: string;
  number: string;
  balance: number;
  openDate: string;
}

export interface ActionButton {
  label: string;
  onClick: () => void;
}

export interface AccountCardProps {
  accountInfo: AccountInfo;
  actionButtons?: ActionButton[];
  formatCurrency?: (amount: number) => string;
}