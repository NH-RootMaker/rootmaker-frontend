import * as S from './ProgressDots.styles';

interface ProgressDotsProps {
  total: number;
  current: number;
  className?: string;
}

const ProgressDots = ({ total, current, className }: ProgressDotsProps) => {
  return (
    <S.Container className={className}>
      {Array.from({ length: total }, (_, index) => (
        <S.Dot key={index} $isCurrent={index === current} />
      ))}
    </S.Container>
  );
};

export default ProgressDots;