export interface ChoiceButtonProps {
  children: React.ReactNode;
  option: 'A' | 'B';
  isSelected?: boolean;
  hasAnySelection?: boolean;
  onClick: (option: 'A' | 'B') => void;
  imageUrl?: string;
}