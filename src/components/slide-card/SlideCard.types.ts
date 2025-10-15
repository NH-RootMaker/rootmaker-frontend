export interface SlideCardProps {
  id: number;
  chip: string;
  subtitle: string;
  description: string;
  color?: 'yellow' | 'green' | 'blue';
  position: 'prev' | 'current' | 'next';
  index: number;
  image?: string;
  onClick?: () => void;
}