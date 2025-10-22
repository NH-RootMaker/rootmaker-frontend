export interface SpeechBubbleProps {
  /**
   * 말풍선 내부 텍스트
   */
  children: React.ReactNode;
  
  /**
   * 나무 유형별 테두리 색상
   */
  variant?: 'pine' | 'cherry' | 'maple' | 'apple' | 'info';
  
  /**
   * 말풍선 크기
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * 말풍선 꼬리 위치 (항상 가운데 정렬)
   */
  tailPosition?: 'bottom' | 'top';
  
  /**
   * 커스텀 색상 (유형 색상을 직접 전달할 때 사용)
   */
  customColor?: string;
}