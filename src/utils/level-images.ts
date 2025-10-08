/**
 * 레벨별 이미지 경로를 반환하는 유틸리티 함수
 */
export const getLevelImage = (level: number): string => {
  switch (level) {
    case 1:
      return '/sprout.webp';
    case 2:
      // 추후 레벨 2 이미지 추가
      return '/sprout.webp';
    case 3:
      // 추후 레벨 3 이미지 추가
      return '/sprout.webp';
    default:
      return '/sprout.webp';
  }
};

/**
 * 레벨별 이미지 alt 텍스트를 반환하는 함수
 */
export const getLevelImageAlt = (level: number): string => {
  switch (level) {
    case 1:
      return '레벨 1 새싹 이미지';
    case 2:
      return '레벨 2 묘목 이미지';
    case 3:
      return '레벨 3 나무 이미지';
    default:
      return `레벨 ${level} 이미지`;
  }
};