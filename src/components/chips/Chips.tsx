import * as S from './Chips.styles';
import type { ChipsProps } from './Chips.types';

/**
 * 현재 단계를 표시하는 칩스 컴포넌트
 */
const Chips = ({ currentStep, totalSteps }: ChipsProps) => {
  return (
    <S.ChipsContainer>
      {currentStep}/{totalSteps}
    </S.ChipsContainer>
  );
};

export default Chips;