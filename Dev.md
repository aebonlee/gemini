# Gemini Master - 개발 문서

## 프로젝트 개요
- **프로젝트명**: Gemini Master - Google Gemini AI 학습 플랫폼
- **목적**: Google Gemini AI의 모든 기능을 체계적으로 학습할 수 있는 종합 웹 플랫폼
- **개발 기간**: 2026-04-04
- **기반 프로젝트**: Claude Master (React/Vite/Supabase) 디자인 시스템 참조

## 기술 스택
| 기술 | 버전 | 용도 |
|------|------|------|
| React | 19.0.0 | UI 프레임워크 |
| Vite | 6.0.0 | 빌드 도구 |
| React Router DOM | 7.1.0 | 클라이언트 라우팅 |
| Supabase | 2.47.0 | 인증 & 데이터베이스 |
| React Markdown | 9.0.1 | 마크다운 렌더링 |
| remark-gfm | 4.0.0 | GitHub Flavored Markdown |
| jsPDF | 2.5.2 | PDF 생성 |

## 디자인 시스템

### 브랜드 컬러
- **Primary Blue** (Google Blue): `#4285F4`
- **Google Red**: `#EA4335`
- **Google Yellow**: `#FBBC04`
- **Google Green**: `#34A853`
- **Gemini Purple**: `#8E24AA`

### 컬러 테마 (5종)
1. **Blue** (기본): `#4285F4` - Google Blue
2. **Gemini** (Purple): `#8E24AA` - Gemini 브랜드
3. **Green**: `#34A853` - Google Green
4. **Red**: `#EA4335` - Google Red
5. **Orange**: `#FF6D00` - 오렌지 테마

### 다크 모드
- Auto (시간 기반: 06-18시 라이트, 그 외 다크)
- Light / Dark 수동 전환
- Cookie 기반 영속성

### 다국어 지원 (i18n)
- 한국어 (기본) / 영어
- Cookie 기반 영속성
- 키 기반 번역 시스템: `t('nav.home')`

## 프로젝트 구조
```
gemini/
├── public/
│   ├── favicon.svg
│   └── 404.html              # SPA 라우팅 fallback
├── src/
│   ├── App.jsx                # 프로바이더 스택
│   ├── main.jsx               # 엔트리 포인트
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # 글래스모피즘 네비게이션
│   │   │   └── Footer.jsx     # 다크 푸터
│   │   ├── AuthGuard.jsx      # 인증 라우트 가드
│   │   ├── AdminGuard.jsx     # 관리자 라우트 가드
│   │   ├── CodeBlock.jsx      # 커스텀 구문 하이라이터
│   │   ├── FeatureCard.jsx    # 기능 카드
│   │   ├── HeroBackground.jsx # 히어로 배경 애니메이션
│   │   ├── HeroCarousel.jsx   # 5초 자동 회전 캐러셀
│   │   ├── Pagination.jsx     # 페이지네이션
│   │   ├── SEOHead.jsx        # 동적 메타 태그
│   │   └── TipBox.jsx         # 팁/경고 박스
│   ├── contexts/
│   │   ├── ThemeContext.jsx    # 테마 관리 (라이트/다크/컬러)
│   │   ├── LanguageContext.jsx # 다국어 관리
│   │   ├── AuthContext.jsx     # 인증 상태
│   │   └── ToastContext.jsx    # 토스트 알림
│   ├── config/
│   │   ├── site.js            # 사이트 설정 & 학습 경로
│   │   └── admin.js           # 관리자 이메일 목록
│   ├── utils/
│   │   ├── supabase.js        # Supabase 클라이언트
│   │   ├── auth.js            # 인증 함수 (Google/Kakao/Email)
│   │   ├── posts.js           # 게시판 CRUD
│   │   └── translations.js    # 번역 데이터
│   ├── layouts/
│   │   └── PublicLayout.jsx   # 메인 레이아웃 + 라우트
│   ├── pages/
│   │   ├── Home.jsx           # 홈페이지
│   │   ├── Login.jsx          # 로그인
│   │   ├── Register.jsx       # 회원가입
│   │   ├── ForgotPassword.jsx # 비밀번호 찾기
│   │   ├── NotFound.jsx       # 404
│   │   ├── about/             # 소개 페이지
│   │   ├── gemini-models/     # Gemini 모델 가이드
│   │   ├── gemini-api/        # Gemini API 가이드
│   │   ├── google-ai-studio/  # Google AI Studio 가이드
│   │   ├── vertex-ai/         # Vertex AI 가이드
│   │   ├── prompt-engineering/ # 프롬프트 엔지니어링
│   │   ├── multimodal/        # 멀티모달 가이드
│   │   ├── model-comparison/  # 모델 비교
│   │   ├── glossary/          # AI 용어사전
│   │   ├── roadmap/           # 학습 로드맵
│   │   ├── resources/         # 학습 자료
│   │   ├── prompt-practice/   # 프롬프트 실습
│   │   ├── prompt-gallery/    # 프롬프트 갤러리
│   │   ├── ai-news/           # AI 뉴스
│   │   ├── community/         # 커뮤니티 (Board, Detail, Write)
│   │   └── admin/             # 관리자 대시보드
│   └── styles/                # CSS 파일 (18개)
│       ├── index.css          # 메인 임포트
│       ├── base.css           # 변수, 타이포그래피, 버튼
│       ├── navbar.css         # 네비게이션
│       ├── hero.css           # 히어로 섹션
│       ├── home.css           # 홈페이지 섹션들
│       ├── footer.css         # 푸터
│       ├── auth.css           # 인증 페이지
│       ├── guide-pages.css    # 가이드 사이드바+콘텐츠
│       ├── code-blocks.css    # 코드 블록 & TipBox
│       ├── content-pages.css  # 컨텐츠 페이지
│       ├── model-comparison.css # 모델 비교
│       ├── community.css      # 커뮤니티
│       ├── admin.css          # 관리자
│       ├── dashboard.css      # 대시보드
│       ├── ai-tools.css       # AI 도구 & 실습
│       ├── toast.css          # 토스트 알림
│       ├── animations.css     # 키프레임 애니메이션
│       ├── dark-mode.css      # 다크 모드 오버라이드
│       └── responsive.css     # 반응형 (1280/1024/768/480/360)
├── .github/workflows/
│   └── deploy.yml             # GitHub Pages 자동 배포
├── index.html                 # HTML 엔트리
├── vite.config.js             # Vite 설정
├── package.json               # 의존성
└── Dev.md                     # 이 문서

## 라우트 구조
| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | Home | 홈페이지 |
| `/about` | AboutPage | 소개 |
| `/login` | Login | 로그인 |
| `/register` | Register | 회원가입 |
| `/forgot-password` | ForgotPassword | 비밀번호 찾기 |
| `/gemini-models` | GeminiModelsGuide | Gemini 모델 가이드 |
| `/gemini-api` | GeminiAPIGuide | Gemini API 가이드 |
| `/google-ai-studio` | GoogleAIStudioGuide | AI Studio 가이드 |
| `/vertex-ai` | VertexAIGuide | Vertex AI 가이드 |
| `/prompt-engineering` | PromptEngineering | 프롬프트 엔지니어링 |
| `/multimodal` | MultimodalGuide | 멀티모달 가이드 |
| `/model-comparison` | ModelComparison | 모델 비교 |
| `/glossary` | Glossary | AI 용어사전 |
| `/roadmap` | Roadmap | 학습 로드맵 |
| `/resources` | Resources | 학습 자료 |
| `/prompt-practice` | PromptPractice | 프롬프트 실습 |
| `/prompt-gallery` | PromptGallery | 프롬프트 갤러리 |
| `/ai-news` | AINews | AI 뉴스 |
| `/community/board` | Board | 게시판 |
| `/community/board/:id` | BoardDetail | 게시글 상세 |
| `/community/board/write` | BoardWrite | 글쓰기 (인증 필요) |
| `/admin/*` | AdminDashboard | 관리자 (관리자 인증 필요) |

## 네비게이션 메뉴 구조
### 상단 메뉴 (Navbar)
1. About
2. Gemini 모델 (Gemini Models)
3. API 가이드 (API Guide)
4. 프롬프트 가이드 (Prompt Guide)
5. 멀티모달 (Multimodal)
6. AI 뉴스 (AI News)
7. 커뮤니티 (Community)

### 학습 경로 (Learning Paths) - 홈페이지
1. Gemini 모델 가이드 (Flash, Pro, Ultra)
2. Gemini API (REST, Python SDK, Node.js SDK)
3. Google AI Studio (프롬프트 설계, Tuning)
4. Vertex AI (Enterprise, Grounding, RAG)
5. 프롬프트 엔지니어링 (System Instructions, Few-shot)
6. 멀티모달 AI (이미지, 비디오, 오디오)
7. 모델 비교 (벤치마크, 가격)

## 주요 기능
1. **글래스모피즘 네비게이션**: 스크롤 시 블러 효과 변화
2. **5가지 컬러 테마**: 실시간 전환
3. **자동 다크 모드**: 시간대 기반
4. **한국어/영어 전환**: 전체 UI 다국어
5. **커스텀 구문 하이라이터**: Python, JS, Bash, JSON 지원
6. **Lazy Loading**: 모든 페이지 코드 스플리팅
7. **커뮤니티 게시판**: Supabase 기반 CRUD + 댓글
8. **관리자 대시보드**: 이메일 기반 관리자 권한
9. **소셜 로그인**: Google, Kakao OAuth
10. **반응형 디자인**: 5단계 브레이크포인트

## 배포
- **호스팅**: GitHub Pages
- **자동 배포**: GitHub Actions (`deploy.yml`)
- **도메인**: https://gemini.dreamitbiz.com (예정)
- **빌드 커맨드**: `npm run build`
- **개발 서버**: `npm run dev` (port 5177)

## 코드 스플리팅
| 청크 | 포함 라이브러리 |
|------|----------------|
| vendor | react, react-dom, react-router-dom |
| supabase | @supabase/supabase-js |
| markdown | react-markdown, remark-gfm |
| pdf | jspdf |

## 환경 변수
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```
