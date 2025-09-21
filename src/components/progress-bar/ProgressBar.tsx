import * as S from './ProgressBar.styles';
import type { ProgressBarProps } from './ProgressBar.types';

/**
 * 단계별 진행상황을 보여주는 프로그레스 바 컴포넌트
 */
const ProgressBar = ({
  currentStep,
  totalSteps,
}: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <S.ProgressContainer>
      <S.ProgressBarContainer>
        <S.ProgressFill $progress={progress} />
      </S.ProgressBarContainer>
    </S.ProgressContainer>
  );
};

export default ProgressBar;