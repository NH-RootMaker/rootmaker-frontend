import type { ResultKey } from '@/utils/result-calculator';

export interface ResultTypeInfo {
  id: ResultKey;
  name: string;
  description: string;
  color: string;
  image?: string;
}

export const RESULT_TYPES: Record<ResultKey, ResultTypeInfo> = {
  pine: {
    id: 'pine',
    name: '사시사철 소나무',
    description: '당신은 한결 같은 저축 습관을 가진 꾸준 성실러!\n매월 자동이체를 등록해,\n장기 유지 인센티브도 놓치지 마세요',
    color: '#42CE7A',
    image: '/src/assets/images/trees/pine.png',
  },
  cherry: {
    id: 'cherry',
    name: '두근두근 벚나무',
    description: '당신은 순간 몰입에 강한 몰입 집중러!\n단기 챌린지에 도전하여\n미션 기반 버퍼 계좌를 설계해 보세요',
    color: '#EE5D90',
    image: '/src/assets/images/trees/blossom.png',
  },
  apple: {
    id: 'apple',
    name: '올망졸망 사과나무',
    description: '당신은 스스로 정보를 찾아낼 줄 아는 인포 탐색러!\n농협이 제공하는 맞춤 가이드와 함께\n청약 계획에 날개를 달아 보세요',
    color: '#D03537',
    image: '/src/assets/images/trees/apple.png',
  },
  maple: {
    id: 'maple',
    name: '알록달록 단풍나무',
    description: '부모님과 친구들의 말에 귀를 기울이는 지인 소통러!\n농협이 제공하는 간단 가이드와\n맞춤 푸시 알림을 통해 청약을 200% 활용해 보세요',
    color: '#F6795E',
    image: '/src/assets/images/trees/maple.png',
  },
};

export const getResultTypeInfo = (resultKey: ResultKey): ResultTypeInfo => {
  return RESULT_TYPES[resultKey];
};