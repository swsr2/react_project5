# React Movie App (Project 5)

TMDb API를 활용하여 만든 영화 정보 제공 웹 애플리케이션입니다. 사용자들은 이 앱을 통해 현재 인기 있는 영화, 평점이 높은 영화, 개봉 예정인 영화들을 둘러보고, 원하는 영화를 검색하며 상세 정보를 확인할 수 있습니다.

## ✨ 주요 기능

- **메인 페이지**: 인기, 평점 높은, 개봉 예정 영화 목록을 슬라이드 형태로 제공합니다.
- **영화 목록 페이지**: 전체 영화 목록을 페이지네이션과 함께 보여주며, 키워드 검색 기능을 제공합니다.
- **영화 상세 페이지**: 영화의 포스터, 줄거리, 평점, 예고편(YouTube 연동), 관련 추천 영화 및 리뷰를 확인할 수 있습니다.
- **반응형 디자인**: 웹, 태블릿, 모바일 등 다양한 디바이스에서 최적화된 화면을 제공합니다.
- **데이터 관리**: React Query를 사용하여 서버 상태를 효율적으로 관리하고, 캐싱을 통해 사용자 경험을 향상시킵니다.

## 🛠️ 사용된 기술

- **Frontend**: React, React-Router-DOM
- **Styling**: Bootstrap, React-Bootstrap, CSS
- **State Management**: React Query
- **HTTP Client**: Axios
- **Deployment**: Netlify

## 🚀 시작하기

### 1. 프로젝트 클론

```bash
git clone <repository-url>
cd project5
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

프로젝트 루트 디렉토리에 `.env` 파일을 생성하고, TMDb에서 발급받은 API 키를 추가해야 합니다.

```
REACT_APP_API_KEY=여러분의_TMDb_API_키
```

> TMDb API 키는 [공식 홈페이지](https://www.themoviedb.org/settings/api)에서 발급받을 수 있습니다.

### 4. 프로젝트 실행

```bash
npm start
```

브라우저에서 `http://localhost:3000` 주소로 접속하여 앱을 확인할 수 있습니다.

## 📜 주요 스크립트

- `npm start`: 개발 모드로 앱을 실행합니다.
- `npm run build`: 프로덕션용으로 앱을 빌드합니다.
- `npm test`: 테스트를 실행합니다.

## 📁 폴더 구조

```
src/
├── common/         # 공통 재사용 컴포넌트 (MovieCard, Slider 등)
├── constants/      # 공통 상수 (반응형 설정 등)
├── hooks/          # API 호출 및 상태 관리를 위한 커스텀 훅
├── layout/         # 앱의 전체 레이아웃 (Header, Footer 등)
├── pages/          # 라우팅되는 페이지 컴포넌트
│   ├── Homepage/
│   ├── MovieDetail/
│   ├── Movies/
│   └── NotFoundPage/
├── utils/          # 유틸리티 함수 (axios 인스턴스 등)
└── App.js          # 메인 애플리케이션 컴포넌트 및 라우팅 설정
```