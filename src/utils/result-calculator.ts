import type { Answer } from '@/types/personality-test.types';

export type ResultKey = 'pine' | 'cherry' | 'apple' | 'maple';

type Score = Record<ResultKey, number>;

const RESULT_PRIORITY: ResultKey[] = ['pine', 'apple', 'cherry', 'maple']; 
// 동점일 때 우선순위

// 각 문항/옵션에 대한 가중치
// Q1~Q6 순서
const SCORING_MAP: Array<{ A: Partial<Score>; B: Partial<Score> }> = [
  // Q1: 월급
  { A: { pine: 1, apple: 1 }, B: { cherry: 2 } },
  // Q2: 1만원
  { A: { apple: 2 }, B: { cherry: 2 } },
  // Q3: 목표 달성 방식
  { A: { pine: 2 }, B: { cherry: 2 } },
  // Q4: 5,000원 절약 실행
  { A: { pine: 1, apple: 1 }, B: { maple: 2 } },
  // Q5: 금융 정보 수집
  { A: { apple: 1, pine: 1 }, B: { cherry: 1, maple: 1 } },
  // Q6: 목돈 선택(청약 vs 고수익)
  { A: { pine: 3 }, B: { cherry: 3 } },
];

export const computeResult = (answers: Answer[]) => {
  const score: Score = { pine: 0, cherry: 0, apple: 0, maple: 0 };

  answers.forEach((answer) => {
    const questionIndex = answer.questionId - 1; // ID는 1부터 시작하므로 0-based 인덱스로 변환
    const weights = SCORING_MAP[questionIndex]?.[answer.selectedOption];
    if (!weights) return;
    
    for (const key in weights) {
      const k = key as ResultKey;
      score[k] += weights[k] ?? 0;
    }
  });

  // 최다 득점 타입 (동점 시 RESULT_PRIORITY로 결정)
  const maxScore = Math.max(...Object.values(score));
  const candidates = (Object.keys(score) as ResultKey[]).filter(
    (k) => score[k] === maxScore
  );
  const winner =
    candidates.sort(
      (a, b) => RESULT_PRIORITY.indexOf(a) - RESULT_PRIORITY.indexOf(b)
    )[0] ?? 'pine';

  return { winner, score };
};