// API Base URL 설정
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

// API 응답 타입 정의
interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errorCode?: string;
}

interface UserTypeData {
  userId: string;
  userType: string;
  updatedAt: string;
}

interface UserData {
  name: string;
  accountNumber: string;
  personalityType: string;
  isLoggedIn: boolean;
}

// 사용자 저축유형 저장 API
export const saveUserType = async (name: string, userType: string): Promise<ApiResponse<UserTypeData>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user/type?name=${encodeURIComponent(name)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userType }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('사용자 저축유형 저장 실패:', error);
    throw error;
  }
};

// 사용자 정보 조회 API
export const getUserInfo = async (name: string): Promise<ApiResponse<UserData>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user?name=${encodeURIComponent(name)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('사용자 정보 조회 실패:', error);
    throw error;
  }
};

// 성격 테스트 결과 저장 API
export const saveTestResult = async (testResult: {
  name: string;
  type: string;
  score: Record<string, number>;
  answers: any[];
}): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/user/test-result`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testResult),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('성격 테스트 결과 저장 실패:', error);
    throw error;
  }
};

// 습관 로그 관련 타입
interface HabitLogData {
  logId: string;
  habitId: number;
  isSuccess: boolean;
  date: string;
  streakCount: number;
  totalCount: number;
  updatedAt: string;
}

interface HabitLogRequest {
  habitId: number;
  isSuccess: boolean;
}

// 습관 로그 저장 API
export const saveHabitLog = async (
  name: string, 
  accountNumber: string, 
  habitLog: HabitLogRequest
): Promise<ApiResponse<HabitLogData>> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/habit-logs?name=${encodeURIComponent(name)}&accountNumber=${encodeURIComponent(accountNumber)}`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(habitLog),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('습관 로그 저장 실패:', error);
    throw error;
  }
};

export type { ApiResponse, UserTypeData, UserData, HabitLogData, HabitLogRequest };