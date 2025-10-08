import * as S from './Chips.styles';
import type { LevelChipsProps } from './Chips.types';

/**
 * 청약통장 레벨 정보를 표시하는 칩스 컴포넌트
 */
const LevelChips = ({ levelNum, levelId, size = 'medium' }: LevelChipsProps) => {
  return (
    <S.LevelChipsContainer $size={size}>
      Lv.{levelNum} {levelId}
    </S.LevelChipsContainer>
  );
};

export default LevelChips;