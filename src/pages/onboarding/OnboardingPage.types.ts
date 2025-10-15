export interface OnboardingSlide {
  id: number;
  chip: string;
  subtitle: string;
  description: string;
  color?: 'yellow' | 'green' | 'blue';
  image?: string;
}

export interface OnboardingPageProps {
  onComplete?: () => void;
}