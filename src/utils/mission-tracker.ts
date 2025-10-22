// 미션 완료 추적 유틸리티

export const MISSION_COMPLETION_KEY = 'mission-completion-count';
export const TRANSFORMATION_SHOWN_KEY = 'transformation-shown';

export const getMissionCompletionCount = (): number => {
  const count = localStorage.getItem(MISSION_COMPLETION_KEY);
  return count ? parseInt(count, 10) : 0;
};

export const incrementMissionCompletion = (): number => {
  const currentCount = getMissionCompletionCount();
  const newCount = currentCount + 1;
  localStorage.setItem(MISSION_COMPLETION_KEY, newCount.toString());
  return newCount;
};

export const shouldShowTransformation = (): boolean => {
  const count = getMissionCompletionCount();
  const transformationShown = localStorage.getItem(TRANSFORMATION_SHOWN_KEY);
  
  // 3번 완료했고, 아직 변화 페이지를 보여주지 않았다면 true
  return count >= 3 && transformationShown !== 'true';
};

export const markTransformationShown = (): void => {
  localStorage.setItem(TRANSFORMATION_SHOWN_KEY, 'true');
};

export const resetMissionProgress = (): void => {
  localStorage.removeItem(MISSION_COMPLETION_KEY);
  localStorage.removeItem(TRANSFORMATION_SHOWN_KEY);
};