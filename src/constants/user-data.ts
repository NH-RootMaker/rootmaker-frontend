// 기본 사용자 정보
export const DEFAULT_USER_INFO = {
  name: '김민서',
  accountNumber: '298-37-928374',
  personalityType: '벚나무', // 성격 테스트 결과
  isLoggedIn: true
} as const;

// 각 성격 타입별 테스트 결과 데이터
export const PERSONALITY_TEST_RESULTS = {
  pine: { // 소나무 - 꾸준 성실러
    type: 'pine',
    score: {
      active: 15,
      careful: 90,
      secure: 85,
      challenge: 20
    }
  },
  cherry: { // 벚나무 - 몰입 집중러
    type: 'cherry',
    score: {
      active: 20,
      careful: 15,
      secure: 25,
      challenge: 90
    }
  },
  apple: { // 사과나무 - 인포 탐색러
    type: 'apple',
    score: {
      active: 85,
      careful: 70,
      secure: 30,
      challenge: 25
    }
  },
  maple: { // 단풍나무 - 지인 소통러
    type: 'maple',
    score: {
      active: 75,
      careful: 40,
      secure: 80,
      challenge: 15
    }
  }
} as const;

// 사용자 정보 초기화 함수 (기본: 벚나무 타입)
export const initializeDefaultUser = (personalityType: keyof typeof PERSONALITY_TEST_RESULTS = 'cherry') => {
  localStorage.setItem('user-name', DEFAULT_USER_INFO.name);
  localStorage.setItem('account-number', DEFAULT_USER_INFO.accountNumber);
  localStorage.setItem('user-logged-in', 'true');
  
  // 선택된 성격 테스트 결과 저장
  const selectedResult = PERSONALITY_TEST_RESULTS[personalityType];
  const testResult = {
    ...selectedResult,
    username: DEFAULT_USER_INFO.name,
    date: new Date().toISOString(),
    answers: []
  };
  
  localStorage.setItem('personality-test-result', JSON.stringify(testResult));
};

// 특정 성격 타입으로 사용자 설정하는 함수들
export const setUserPersonalityType = {
  pine: () => initializeDefaultUser('pine'),      // 소나무 - 꾸준 성실러
  cherry: () => initializeDefaultUser('cherry'),  // 벚나무 - 몰입 집중러 (기본값)
  apple: () => initializeDefaultUser('apple'),    // 사과나무 - 인포 탐색러
  maple: () => initializeDefaultUser('maple')     // 단풍나무 - 지인 소통러
};

// 사용자 정보 가져오기 함수
export const getUserInfo = () => {
  const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';
  
  if (!isLoggedIn) {
    return {
      name: null,
      accountNumber: null,
      isLoggedIn: false
    };
  }
  
  return {
    name: localStorage.getItem('user-name') || DEFAULT_USER_INFO.name,
    accountNumber: localStorage.getItem('account-number') || DEFAULT_USER_INFO.accountNumber,
    isLoggedIn: true
  };
};