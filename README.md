# NH-Rootmaker Frontend

루트메이커는 저축 유형 테스트를 기반으로 하여 청약 관리 맞춤형 서비스를 제공하는 React 웹 애플리케이션입니다.
현 레포지토리에서 제공하는 내용 구성은 NH 농협은행과 함께하는 AI 아이디어 챌린지 제안서를 위해 제작된 프로토타입입니다.

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [주요 컴포넌트](#-주요-컴포넌트)
- [개발 가이드](#-개발-가이드)

## 🎯 프로젝트 소개

Rootmaker는 사용자의 성격 유형을 분석하여 맞춤형 청약통장 서비스를 제공하는 핀테크 애플리케이션입니다. 직관적인 UI/UX와 함께 사용자의 금융 목표 달성을 돕습니다.

## ✨ 주요 기능

### 🧪 성격 테스트
- **6가지 질문**: 간단하고 직관적인 성격 분석 테스트
- **4가지 유형**: 나무 테마 기반 성격 유형 분류 (소나무, 벚나무, 단풍나무, 사과나무)
- **맞춤형 결과**: 성격에 따른 청약 상품 추천

### 💰 청약 키우기 (BufferPage)
- **계좌 정보**: 잔액, 개설일, 액션 버튼이 포함된 카드형 UI
- **납입 내역**: 회차별 납입 금액과 잔액 내역 표시
- **레벨 시스템**: 적금 수준에 따른 시각적 레벨 표시

## 🛠 기술 스택

### Frontend
- **React** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Styled Components** - CSS-in-JS 스타일링
- **React Router Dom** - 라우팅
- **Framer Motion** - 애니메이션


### 개발 도구
- **Vite** - 빌드 도구
- **ESLint** - 코드 품질 관리
- **TypeScript ESLint** - TypeScript 린팅

## 🚀 시작하기

### 필요 조건
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 린팅
npm run lint
```

### 환경 설정
개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── buffer-account/  # 청약 관련 컴포넌트
│   ├── speech-bubble/   # 말풍선 컴포넌트
│   ├── topnav/         # 상단 네비게이션
│   └── ...
├── pages/              # 페이지 컴포넌트
│   ├── personality-test/ # 성격 테스트 페이지
│   ├── buffer-account/   # 청약 키우기 페이지
│   └── ...
├── constants/          # 상수 및 정적 데이터
├── hooks/             # 커스텀 훅
├── styles/            # 전역 스타일 및 테마
├── types/             # TypeScript 타입 정의
├── utils/             # 유틸리티 함수
└── router/            # 라우팅 설정
```

## 🧩 주요 컴포넌트

### 📱 BufferPage
청약통장 관리를 위한 메인 페이지
- **AccountCard**: 계좌 정보 및 액션 버튼
- **HistorySection**: 납입 내역 표시
- **반응형 디자인**: 다양한 화면 크기 지원

### 🎭 Personality Test
성격 유형 분석 테스트
- **ProgressBar**: 진행 상황 표시
- **QuestionForm**: 선택형 질문 인터페이스
- **ResultPage**: 성격 유형별 맞춤 결과


### 반응형 브레이크포인트
- **Mobile**: ~480px (SE 기준)
- **Tablet**: 481px~768px  
- **Desktop**: 769px+

## 👨‍💻 개발 가이드

### 컴포넌트 작성 규칙
1. **TypeScript**: 모든 컴포넌트에 타입 정의
2. **Styled Components**: CSS-in-JS 패턴 사용
3. **모듈화**: index.ts를 통한 깔끔한 export
4. **반응형**: 모바일 우선 반응형 디자인

### 폴더 구조 규칙
```
ComponentName/
├── ComponentName.tsx       # 메인 컴포넌트
├── ComponentName.styles.ts # 스타일 정의
├── ComponentName.types.ts  # 타입 정의
└── index.ts               # Export 관리
```


---

**개발팀**: Rootmaker Development Team (두둠칫) 
**연락처**: kmss0426@hanyang.ac.kr
