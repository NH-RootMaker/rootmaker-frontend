export interface ProductInfoItem {
  title: string;
  value: string;
  description: string;
}

export interface ProductInfo {
  [key: string]: ProductInfoItem;
}

export const SUBSCRIPTION_PRODUCT_INFO: ProductInfo = {
  rate: {
    title: '이율',
    value: '',
    description: '최고 3.1%\n기본 3.1%\n(연/세전/24개월 이상, 2025.10.13기준)'
  },
  period: {
    title: '가입기간',
    value: '',
    description: '가입일로부터 입주자로 선정된 날까지\n(별도 만기 없음)'
  },
  amount: {
    title: '가입금액',
    value: '',
    description: '매월 약정납입일(신규가입일 해당일)에\n2만원 이상 50만원 이하의 금액을\n10원 단위로 자유롭게 납입.\n\n단, 월 납입금의 총액이 1,500만원에 이를 때까지는\n50만원을 초과하여 납입가능\n\n(선납회차: 정상 납입회차에 추가하여\n최고 24회차까지 선납 가능)'
  }
};