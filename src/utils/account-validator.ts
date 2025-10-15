/**
 * 계좌번호 유효성 검사 및 포맷팅 유틸리티
 */

// 계좌번호에서 숫자만 추출
export const extractNumbers = (value: string): string => {
  return value.replace(/[^0-9]/g, '');
};

// 계좌번호 포맷팅 (3-2-6 형식)
export const formatAccountNumber = (value: string): string => {
  const numbers = extractNumbers(value);
  
  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 5) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 5)}-${numbers.slice(5, 11)}`;
  }
};

// 계좌번호 유효성 검사
export const validateAccountNumber = (value: string): boolean => {
  const numbers = extractNumbers(value);
  // 한국 계좌번호는 보통 10-14자리
  return numbers.length >= 10 && numbers.length <= 14;
};

// 계좌번호 입력 제한 (최대 14자리 + 하이픈)
export const limitAccountNumberInput = (value: string): string => {
  const numbers = extractNumbers(value);
  const limitedNumbers = numbers.slice(0, 14);
  return formatAccountNumber(limitedNumbers);
};