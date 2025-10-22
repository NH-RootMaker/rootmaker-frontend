// 사용자 테스트 완료 상태 확인 유틸리티

export const hasUserCompletedTest = (): boolean => {
  try {
    const testResult = localStorage.getItem('personality-test-result');
    if (!testResult) return false;
    
    const parsed = JSON.parse(testResult);
    return !!(parsed.type && parsed.username);
  } catch (error) {
    console.warn('테스트 결과 파싱 실패:', error);
    return false;
  }
};

export const getUserTestResult = () => {
  try {
    const testResult = localStorage.getItem('personality-test-result');
    if (!testResult) return null;
    
    return JSON.parse(testResult);
  } catch (error) {
    console.warn('테스트 결과 파싱 실패:', error);
    return null;
  }
};

export const getPersonalityNavPath = (): string => {
  return hasUserCompletedTest() ? '/result' : '/home';
};