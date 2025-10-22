// 미션 완료 상태 관리 유틸리티

interface MissionStatus {
  completedDate: string;
  isCompleted: boolean;
}

// 오늘 미션 완료 여부 확인
export const isTodayMissionCompleted = (): boolean => {
  try {
    const today = new Date().toDateString();
    const dailyTransfers = JSON.parse(localStorage.getItem('daily-transfers') || '{}');
    const todayTotal = dailyTransfers[today] || 0;
    
    return todayTotal >= 5000; // 5000원 이상 입금 시 완료
  } catch (error) {
    console.warn('미션 완료 상태 확인 실패:', error);
    return false;
  }
};

// 현재 진행 중인 미션이 오늘 완료된 건지 확인
export const isCurrentMissionCompletedToday = (): boolean => {
  try {
    const today = new Date().toDateString();
    const savedProgress = localStorage.getItem('challenge-progress');
    
    if (!savedProgress) return false;
    
    const currentProgress = JSON.parse(savedProgress);
    const currentNode = currentProgress.current;
    
    // 현재 노드가 완료된 노드 목록에 있고, 오늘 미션이 완료된 경우
    return currentProgress.completed.includes(currentNode) && isTodayMissionCompleted();
  } catch (error) {
    console.warn('현재 미션 완료 상태 확인 실패:', error);
    return false;
  }
};

// 다음 미션이 접근 가능한지 확인 (내일까지 제한)
export const isNextMissionAvailable = (): boolean => {
  try {
    // 오늘 미션을 완료했다면 내일까지 다음 미션 비활성화
    if (isCurrentMissionCompletedToday()) {
      const today = new Date();
      const completionTime = localStorage.getItem('mission-completion-time');
      
      if (completionTime) {
        const completionDate = new Date(completionTime);
        const nextDay = new Date(completionDate);
        nextDay.setDate(nextDay.getDate() + 1);
        nextDay.setHours(0, 0, 0, 0); // 다음날 00:00:00
        
        return today >= nextDay;
      }
    }
    
    return true;
  } catch (error) {
    console.warn('다음 미션 접근 가능성 확인 실패:', error);
    return true;
  }
};

// 미션 완료 시 완료 시간 저장
export const recordMissionCompletion = (): void => {
  const completionTime = new Date().toISOString();
  localStorage.setItem('mission-completion-time', completionTime);
};

// 미션 완료까지 남은 시간 계산 (시간:분 형식)
export const getTimeUntilNextMission = (): string | null => {
  try {
    if (!isCurrentMissionCompletedToday()) return null;
    
    const completionTime = localStorage.getItem('mission-completion-time');
    if (!completionTime) return null;
    
    const completionDate = new Date(completionTime);
    const nextDay = new Date(completionDate);
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);
    
    const now = new Date();
    const timeDiff = nextDay.getTime() - now.getTime();
    
    if (timeDiff <= 0) return null;
    
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}시간 ${minutes}분`;
  } catch (error) {
    console.warn('다음 미션까지 시간 계산 실패:', error);
    return null;
  }
};