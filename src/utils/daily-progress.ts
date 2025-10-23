// 일별 진행 상황 관리 유틸리티

interface DailyProgress {
  startDate: string; // 시작 날짜
  completedDays: string[]; // 완료된 날짜들 ['2024-01-01', '2024-01-02']
  lastCompletionDate?: string; // 마지막 완료 날짜
}

// 시작 날짜를 기준으로 현재 day 계산
const calculateCurrentDay = (startDate: string): number => {
  const start = new Date(startDate);
  const today = new Date();
  
  // 날짜만 비교 (시간 제외)
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  
  const diffTime = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.max(1, diffDays + 1); // 최소 1일차
};

// 오늘 날짜 문자열 반환
const getTodayDateString = (): string => {
  return new Date().toISOString().split('T')[0];
};

// 일별 진행 상황 초기화
export const initializeDailyProgress = (): DailyProgress => {
  const saved = localStorage.getItem('daily-progress');
  
  if (saved) {
    return JSON.parse(saved);
  }
  
  const initialProgress: DailyProgress = {
    startDate: getTodayDateString(),
    completedDays: [],
  };
  
  localStorage.setItem('daily-progress', JSON.stringify(initialProgress));
  return initialProgress;
};

// 현재 day 번호 계산 (날짜 기반)
export const getCurrentDay = (): number => {
  const progress = initializeDailyProgress();
  return calculateCurrentDay(progress.startDate);
};

// 오늘 미션이 완료되었는지 확인
export const isTodayMissionCompleted = (): boolean => {
  const progress = initializeDailyProgress();
  const today = getTodayDateString();
  return progress.completedDays.includes(today);
};

// 미션 완료 처리
export const completeTodayMission = (): void => {
  const progress = initializeDailyProgress();
  const today = getTodayDateString();
  
  if (!progress.completedDays.includes(today)) {
    progress.completedDays.push(today);
    progress.lastCompletionDate = today;
    localStorage.setItem('daily-progress', JSON.stringify(progress));
  }
};

// 다음 미션 day 계산
export const getNextMissionDay = (): number => {
  const currentDay = getCurrentDay();
  const isTodayCompleted = isTodayMissionCompleted();
  
  if (isTodayCompleted) {
    // 오늘 완료했으면 다음날 미션
    return currentDay + 1;
  } else {
    // 오늘 완료 안했으면 오늘 미션
    return currentDay;
  }
};

// 미션 페이지 접근 가능한지 확인
export const canAccessMission = (): boolean => {
  const currentDay = getCurrentDay();
  const nextMissionDay = getNextMissionDay();
  
  // current와 nextMission이 같을 때만 접근 가능
  return currentDay === nextMissionDay;
};

// 미션 제한 사유 반환
export const getMissionRestrictionReason = (): string => {
  const currentDay = getCurrentDay();
  const nextMissionDay = getNextMissionDay();
  const isTodayCompleted = isTodayMissionCompleted();
  
  if (isTodayCompleted && nextMissionDay > currentDay) {
    return `오늘의 미션을 이미 완료하셨어요! 다음 미션은 내일(${nextMissionDay}일차)에 도전할 수 있습니다.`;
  }
  
  return '미션에 접근할 수 없습니다.';
};

// 디버그용: 진행 상황 리셋
export const resetDailyProgress = (): void => {
  localStorage.removeItem('daily-progress');
  localStorage.removeItem('challenge-progress'); // 기존 데이터도 정리
};