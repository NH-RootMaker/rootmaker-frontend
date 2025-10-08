export interface ChipsProps {
  /**
   * 현재 단계
   */
  currentStep: number;
  
  /**
   * 전체 단계수
   */
  totalSteps: number;
}

export interface LevelChipsProps {
  /**
   * 청약통장 레벨별 닉네임
   */
  levelId: string;
  
  /**
   * 청약통장 레벨 수
   */
  levelNum: number;
  
  /**
   * 칩스 크기 (small, medium, large)
   */
  size?: 'small' | 'medium' | 'large';
}