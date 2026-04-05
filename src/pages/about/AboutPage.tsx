import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'intro', icon: 'fa-gem', ko: '플랫폼 소개', en: 'Introduction' },
  { id: 'vision', icon: 'fa-eye', ko: '핵심 비전', en: 'Core Vision' },
  { id: 'gemini-models', icon: 'fa-microchip', ko: 'Gemini 모델', en: 'Gemini Models' },
  { id: 'google-ai', icon: 'fa-brain', ko: 'Google AI 서비스', en: 'Google AI Services' },
  { id: 'team', icon: 'fa-users', ko: '팀 소개', en: 'Team' },
  { id: 'tech', icon: 'fa-layer-group', ko: '기술 스택', en: 'Tech Stack' },
  { id: 'timeline', icon: 'fa-clock-rotate-left', ko: '개발 타임라인', en: 'Timeline' },
  { id: 'faq', icon: 'fa-circle-question', ko: 'FAQ', en: 'FAQ' },
];

export default function AboutPage() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeSection, setActiveSection] = useState('intro');

  const currentIdx = SECTIONS.findIndex(s => s.id === activeSection);
  const prevSection = currentIdx > 0 ? SECTIONS[currentIdx - 1] : null;
  const nextSection = currentIdx < SECTIONS.length - 1 ? SECTIONS[currentIdx + 1] : null;

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <div className="guide-section">
            <h1>{isKo ? 'Gemini Master 소개' : 'About Gemini Master'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini Master는 Google Gemini AI의 모든 기능을 체계적으로 학습할 수 있는 종합 플랫폼입니다. Flash, Pro, Ultra 모델부터 API, Google AI Studio, Vertex AI, NotebookLM까지 한 곳에서 학습하세요.'
                : 'Gemini Master is a comprehensive platform for systematically learning all features of Google Gemini AI. From Flash, Pro, Ultra models to API, Google AI Studio, Vertex AI, and NotebookLM — all in one place.'}
            </p>

            <div className="guide-card-grid">
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}>
                  <i className="fa-solid fa-book-open" />
                </div>
                <h3>{isKo ? '8개 학습 가이드' : '8 Learning Guides'}</h3>
                <p>{isKo ? '모델, API, AI Studio, Vertex AI, 프롬프트, 멀티모달, NotebookLM, 모델 비교' : 'Models, API, AI Studio, Vertex AI, Prompts, Multimodal, NotebookLM, Comparison'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #EA4335, #FBBC04)' }}>
                  <i className="fa-solid fa-globe" />
                </div>
                <h3>{isKo ? '한국어 / 영어' : 'Korean / English'}</h3>
                <p>{isKo ? '모든 콘텐츠를 한국어와 영어로 제공합니다.' : 'All content available in Korean and English.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #9334E6, #EA4335)' }}>
                  <i className="fa-solid fa-palette" />
                </div>
                <h3>{isKo ? '5가지 테마' : '5 Themes'}</h3>
                <p>{isKo ? '다크 모드 + 5가지 컬러 테마를 지원합니다.' : 'Dark mode + 5 color themes supported.'}</p>
              </div>
            </div>

            <h2>{isKo ? '이 플랫폼에서 배울 수 있는 것' : 'What You Can Learn'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '학습 경로' : 'Learning Path'}</th>
                    <th>{isKo ? '주요 내용' : 'Key Content'}</th>
                    <th>{isKo ? '난이도' : 'Difficulty'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><Link to="/gemini-models">Gemini {isKo ? '모델' : 'Models'}</Link></td><td>{isKo ? 'Flash, Pro, Ultra 모델 비교 및 선택' : 'Flash, Pro, Ultra model comparison & selection'}</td><td>{isKo ? '입문' : 'Beginner'}</td></tr>
                  <tr><td><Link to="/gemini-api">Gemini API</Link></td><td>{isKo ? 'Python/Node.js SDK, REST API, 스트리밍' : 'Python/Node.js SDK, REST API, Streaming'}</td><td>{isKo ? '중급' : 'Intermediate'}</td></tr>
                  <tr><td><Link to="/google-ai-studio">Google AI Studio</Link></td><td>{isKo ? '프롬프트 설계, 모델 테스트, API 키' : 'Prompt design, model testing, API keys'}</td><td>{isKo ? '입문' : 'Beginner'}</td></tr>
                  <tr><td><Link to="/vertex-ai">Vertex AI</Link></td><td>{isKo ? '엔터프라이즈 배포, RAG, 그라운딩' : 'Enterprise deployment, RAG, Grounding'}</td><td>{isKo ? '고급' : 'Advanced'}</td></tr>
                  <tr><td><Link to="/prompt-engineering">{isKo ? '프롬프트 엔지니어링' : 'Prompt Engineering'}</Link></td><td>{isKo ? 'System Instructions, Few-shot, CoT' : 'System Instructions, Few-shot, CoT'}</td><td>{isKo ? '중급' : 'Intermediate'}</td></tr>
                  <tr><td><Link to="/multimodal">{isKo ? '멀티모달' : 'Multimodal'}</Link></td><td>{isKo ? '이미지, 비디오, 오디오, PDF 처리' : 'Image, video, audio, PDF processing'}</td><td>{isKo ? '중급' : 'Intermediate'}</td></tr>
                  <tr><td><Link to="/notebooklm">NotebookLM</Link></td><td>{isKo ? '문서 분석, 오디오 오버뷰, 연구 보조' : 'Document analysis, audio overview, research'}</td><td>{isKo ? '입문' : 'Beginner'}</td></tr>
                  <tr><td><Link to="/model-comparison">{isKo ? '모델 비교' : 'Model Comparison'}</Link></td><td>{isKo ? '벤치마크, 가격, 용도별 추천' : 'Benchmarks, pricing, recommendations'}</td><td>{isKo ? '입문' : 'Beginner'}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="guide-section">
            <h1>{isKo ? '핵심 비전' : 'Core Vision'}</h1>
            <p className="guide-intro">{isKo ? 'Gemini Master가 추구하는 가치' : 'Values that Gemini Master pursues'}</p>

            <div className="guide-card-grid">
              {[
                { icon: 'fa-book-open', title: isKo ? '체계적 학습' : 'Systematic Learning', desc: isKo ? 'Gemini AI의 모든 기능을 단계별로 체계적으로 학습할 수 있습니다. 입문부터 고급까지 난이도별 콘텐츠를 제공합니다.' : 'Learn all Gemini AI features step by step. Content provided from beginner to advanced levels.' },
                { icon: 'fa-laptop-code', title: isKo ? '실전 중심' : 'Practice-Focused', desc: isKo ? 'API 예제, 프롬프트 실습, 코드 샘플 등 실전 프로젝트를 통해 역량을 키웁니다.' : 'Build skills through API examples, prompt practice, code samples and real projects.' },
                { icon: 'fa-people-group', title: isKo ? '함께 성장' : 'Grow Together', desc: isKo ? '커뮤니티에서 경험을 공유하고, AI 뉴스를 확인하며 함께 성장합니다.' : 'Share experiences in the community, check AI news, and grow together.' },
              ].map((v, i) => (
                <div key={i} className="guide-card">
                  <div className="guide-card-icon" style={{ background: 'var(--primary-gradient)' }}><i className={`fa-solid ${v.icon}`} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'gemini-models':
        return (
          <div className="guide-section">
            <h1>{isKo ? 'Gemini 모델 패밀리' : 'Gemini Model Family'}</h1>
            <p className="guide-intro">{isKo ? 'Google DeepMind가 개발한 차세대 멀티모달 AI 모델. 텍스트, 이미지, 오디오, 비디오, 코드를 네이티브로 처리합니다.' : 'Next-gen multimodal AI models by Google DeepMind. Natively processes text, images, audio, video, and code.'}</p>

            <div className="guide-card-grid">
              {[
                { icon: 'fa-bolt', title: 'Gemini Flash', color: '#4285F4', desc: isKo ? '속도와 비용 효율성에 최적화. 실시간 챗봇, 대량 처리에 적합. 최대 1M 토큰.' : 'Optimized for speed & cost. Ideal for chatbots, batch processing. Up to 1M tokens.' },
                { icon: 'fa-star', title: 'Gemini Pro', color: '#EA4335', desc: isKo ? '성능과 효율의 균형. 복잡한 추론, 코드 작업에 최적. 최대 2M 토큰.' : 'Balances performance & efficiency. Best for reasoning, coding. Up to 2M tokens.' },
                { icon: 'fa-crown', title: 'Gemini Ultra', color: '#9334E6', desc: isKo ? 'Google의 가장 강력한 모델. 최고 수준의 추론과 전문 분야 분석.' : 'Google\'s most powerful. Top-tier reasoning and expert analysis.' },
              ].map((m, i) => (
                <div key={i} className="guide-card">
                  <div className="guide-card-icon" style={{ background: m.color }}><i className={`fa-solid ${m.icon}`} /></div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>

            <h2>{isKo ? '모델 상세 비교' : 'Detailed Model Comparison'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '모델' : 'Model'}</th>
                    <th>{isKo ? '컨텍스트' : 'Context'}</th>
                    <th>{isKo ? '속도' : 'Speed'}</th>
                    <th>{isKo ? '품질' : 'Quality'}</th>
                    <th>{isKo ? '가격 (입력/1M)' : 'Price (Input/1M)'}</th>
                    <th>{isKo ? '적합한 용도' : 'Best For'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Flash 2.0</strong></td><td>1M</td><td>{isKo ? '매우 빠름' : 'Very Fast'}</td><td>{isKo ? '좋음' : 'Good'}</td><td>$0.10</td><td>{isKo ? '챗봇, 요약, 분류' : 'Chatbot, Summary'}</td></tr>
                  <tr><td><strong>Flash 2.0 Lite</strong></td><td>1M</td><td>{isKo ? '최고 속도' : 'Fastest'}</td><td>{isKo ? '기본' : 'Basic'}</td><td>$0.075</td><td>{isKo ? '대량 처리, 저비용' : 'Batch, Low cost'}</td></tr>
                  <tr><td><strong>Flash 2.5</strong></td><td>1M</td><td>{isKo ? '빠름' : 'Fast'}</td><td>{isKo ? '높음' : 'High'}</td><td>$0.15</td><td>{isKo ? 'Thinking 모드, 코딩' : 'Thinking, Coding'}</td></tr>
                  <tr><td><strong>Pro 2.5</strong></td><td>2M</td><td>{isKo ? '보통' : 'Moderate'}</td><td>{isKo ? '매우 높음' : 'Very High'}</td><td>$1.25</td><td>{isKo ? '연구, 코드 리뷰' : 'Research, Code review'}</td></tr>
                  <tr><td><strong>Ultra</strong></td><td>128K</td><td>{isKo ? '느림' : 'Slow'}</td><td>{isKo ? '최고' : 'Highest'}</td><td>{isKo ? '구독제' : 'Subscription'}</td><td>{isKo ? '전문 분석' : 'Expert analysis'}</td></tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? '모델 선택 가이드' : 'Model Selection Guide'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '상황' : 'Scenario'}</th>
                    <th>{isKo ? '추천 모델' : 'Recommended'}</th>
                    <th>{isKo ? '이유' : 'Reason'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>{isKo ? '빠른 응답이 필요할 때' : 'Need fast responses'}</td><td>Flash</td><td>{isKo ? '최고의 속도와 저렴한 비용' : 'Best speed and low cost'}</td></tr>
                  <tr><td>{isKo ? '복잡한 코드 작업' : 'Complex coding'}</td><td>Pro</td><td>{isKo ? '높은 정확도와 긴 컨텍스트' : 'High accuracy and long context'}</td></tr>
                  <tr><td>{isKo ? '대량 데이터 처리' : 'Batch processing'}</td><td>Flash Lite</td><td>{isKo ? '최저 비용으로 대량 처리' : 'Lowest cost for batch jobs'}</td></tr>
                  <tr><td>{isKo ? '연구 논문 분석' : 'Research paper analysis'}</td><td>Pro</td><td>{isKo ? '2M 토큰으로 긴 문서 처리' : '2M tokens for long documents'}</td></tr>
                  <tr><td>{isKo ? '최고 품질 필요' : 'Highest quality needed'}</td><td>Ultra</td><td>{isKo ? '최고 성능의 추론 능력' : 'Top-tier reasoning capability'}</td></tr>
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <Link to="/gemini-models" className="btn btn-primary btn-sm">
                {isKo ? '모델 상세 가이드 보기' : 'View Detailed Model Guide'} <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        );

      case 'google-ai':
        return (
          <div className="guide-section">
            <h1>{isKo ? 'Google AI 서비스 생태계' : 'Google AI Service Ecosystem'}</h1>
            <p className="guide-intro">{isKo ? 'Google이 제공하는 AI 서비스와 플랫폼을 소개합니다.' : 'Introducing AI services and platforms provided by Google.'}</p>

            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '서비스' : 'Service'}</th>
                    <th>{isKo ? '설명' : 'Description'}</th>
                    <th>{isKo ? '대상' : 'Target Users'}</th>
                    <th>{isKo ? '주요 기능' : 'Key Features'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Gemini</strong></td><td>{isKo ? '차세대 멀티모달 AI 모델 패밀리' : 'Next-gen multimodal AI model family'}</td><td>{isKo ? '모든 사용자' : 'All users'}</td><td>{isKo ? '텍스트, 이미지, 오디오, 비디오 처리' : 'Text, image, audio, video processing'}</td></tr>
                  <tr><td><strong>Google AI Studio</strong></td><td>{isKo ? '브라우저 기반 AI 개발 환경' : 'Browser-based AI dev environment'}</td><td>{isKo ? '개발자' : 'Developers'}</td><td>{isKo ? '프롬프트 설계, 모델 테스트, API 키' : 'Prompt design, model test, API key'}</td></tr>
                  <tr><td><strong>Vertex AI</strong></td><td>{isKo ? 'Google Cloud 엔터프라이즈 AI 플랫폼' : 'Google Cloud enterprise AI platform'}</td><td>{isKo ? '기업' : 'Enterprise'}</td><td>{isKo ? 'SLA, 보안, RAG, 튜닝, 배포' : 'SLA, security, RAG, tuning, deploy'}</td></tr>
                  <tr><td><strong>NotebookLM</strong></td><td>{isKo ? 'AI 기반 연구 및 학습 도우미' : 'AI-powered research assistant'}</td><td>{isKo ? '연구자, 학생' : 'Researchers, students'}</td><td>{isKo ? '문서 분석, 오디오 요약, Q&A' : 'Document analysis, audio summary, Q&A'}</td></tr>
                  <tr><td><strong>Gemma</strong></td><td>{isKo ? '오픈소스 경량 AI 모델' : 'Open-source lightweight AI model'}</td><td>{isKo ? '연구자' : 'Researchers'}</td><td>{isKo ? '로컬 실행, 파인튜닝' : 'Local execution, fine-tuning'}</td></tr>
                  <tr><td><strong>Imagen</strong></td><td>{isKo ? '텍스트-이미지 생성 모델' : 'Text-to-image generation model'}</td><td>{isKo ? '크리에이터' : 'Creators'}</td><td>{isKo ? '고품질 이미지 생성, 편집' : 'High-quality image generation, editing'}</td></tr>
                  <tr><td><strong>Veo</strong></td><td>{isKo ? 'AI 비디오 생성 모델' : 'AI video generation model'}</td><td>{isKo ? '영상 크리에이터' : 'Video creators'}</td><td>{isKo ? '텍스트 기반 비디오 생성' : 'Text-based video generation'}</td></tr>
                  <tr><td><strong>AI Overview</strong></td><td>{isKo ? 'AI 기반 검색 결과 요약' : 'AI-powered search summaries'}</td><td>{isKo ? '일반 사용자' : 'General users'}</td><td>{isKo ? '검색 결과 AI 요약' : 'AI search result summary'}</td></tr>
                </tbody>
              </table>
            </div>

            <div className="guide-card-grid" style={{ marginTop: 32 }}>
              {[
                { icon: 'fa-gem', title: 'Gemini', desc: isKo ? 'Flash, Pro, Ultra 세 가지 티어의 멀티모달 모델.' : 'Three-tier multimodal models.' },
                { icon: 'fa-flask', title: 'Google AI Studio', desc: isKo ? '웹에서 바로 Gemini를 테스트하는 무료 도구.' : 'Free tool to test Gemini in the browser.' },
                { icon: 'fa-book-open', title: 'NotebookLM', desc: isKo ? '문서 업로드 후 AI 분석, 오디오 브리핑 생성.' : 'Upload docs for AI analysis, audio briefings.' },
              ].map((v, i) => (
                <div key={i} className="guide-card">
                  <div className="guide-card-icon" style={{ background: 'var(--primary-gradient)' }}><i className={`fa-solid ${v.icon}`} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="guide-section">
            <h1>{isKo ? '팀 소개' : 'Our Team'}</h1>
            <p className="guide-intro">{isKo ? 'Gemini Master를 만드는 사람들' : 'The people behind Gemini Master'}</p>
            <div className="guide-card-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="guide-card" style={{ textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #4285F4, #EA4335)', color: '#fff', fontSize: 32, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>A</div>
                <h3>{isKo ? '이애본' : 'Aebon Lee'}</h3>
                <span className="badge badge-primary" style={{ marginBottom: 12 }}>{isKo ? '대표이사 / 개발자' : 'CEO / Developer'}</span>
                <p>{isKo ? 'AI 교육 및 개발 전문가. DreamIT Biz 대표이사.' : 'AI education and development expert. CEO of DreamIT Biz.'}</p>
              </div>
              <div className="guide-card" style={{ textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #34A853, #FBBC04)', color: '#fff', fontSize: 32, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>G</div>
                <h3>Gemini AI</h3>
                <span className="badge badge-primary" style={{ marginBottom: 12 }}>{isKo ? 'AI 어시스턴트' : 'AI Assistant'}</span>
                <p>{isKo ? 'Google의 최첨단 멀티모달 AI 모델.' : 'Google\'s cutting-edge multimodal AI model.'}</p>
              </div>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="guide-section">
            <h1>{isKo ? '기술 스택' : 'Tech Stack'}</h1>
            <p className="guide-intro">{isKo ? 'Gemini Master 플랫폼을 구성하는 기술들' : 'Technologies powering the Gemini Master platform'}</p>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '기술' : 'Technology'}</th>
                    <th>{isKo ? '버전' : 'Version'}</th>
                    <th>{isKo ? '용도' : 'Purpose'}</th>
                    <th>{isKo ? '선택 이유' : 'Why Chosen'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>React</strong></td><td>19</td><td>UI Framework</td><td>{isKo ? '최신 기능, 컴포넌트 기반 아키텍처' : 'Latest features, component-based architecture'}</td></tr>
                  <tr><td><strong>Vite</strong></td><td>6</td><td>Build Tool</td><td>{isKo ? '초고속 빌드, HMR, 코드 스플리팅' : 'Ultra-fast builds, HMR, code splitting'}</td></tr>
                  <tr><td><strong>React Router</strong></td><td>7.1</td><td>Routing</td><td>{isKo ? '클라이언트 사이드 라우팅, Lazy Loading' : 'Client-side routing, Lazy Loading'}</td></tr>
                  <tr><td><strong>Supabase</strong></td><td>2.47</td><td>Backend</td><td>{isKo ? '인증, 데이터베이스, 실시간 기능' : 'Auth, database, real-time features'}</td></tr>
                  <tr><td><strong>Custom CSS</strong></td><td>-</td><td>Design System</td><td>{isKo ? '테마 시스템, 글래스모피즘, 반응형' : 'Theme system, glassmorphism, responsive'}</td></tr>
                  <tr><td><strong>GitHub Pages</strong></td><td>-</td><td>Hosting</td><td>{isKo ? '무료, GitHub Actions 자동 배포' : 'Free, GitHub Actions auto-deploy'}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="guide-section">
            <h1>{isKo ? '개발 타임라인' : 'Development Timeline'}</h1>
            <p className="guide-intro">{isKo ? 'Gemini Master의 주요 마일스톤' : 'Key milestones of Gemini Master'}</p>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '시기' : 'Date'}</th>
                    <th>{isKo ? '마일스톤' : 'Milestone'}</th>
                    <th>{isKo ? '설명' : 'Description'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>2024.12</strong></td><td>{isKo ? 'Gemini 2.0 출시' : 'Gemini 2.0 Launch'}</td><td>{isKo ? 'Google이 Gemini 2.0 Flash를 발표' : 'Google announced Gemini 2.0 Flash'}</td></tr>
                  <tr><td><strong>2025.01</strong></td><td>{isKo ? '프로젝트 기획' : 'Project Planning'}</td><td>{isKo ? 'Gemini Master 플랫폼 기획 및 설계' : 'Gemini Master platform planning and design'}</td></tr>
                  <tr><td><strong>2025.02</strong></td><td>{isKo ? '개발 시작' : 'Development Start'}</td><td>{isKo ? 'React + Vite 기반 프론트엔드 개발' : 'Frontend development with React + Vite'}</td></tr>
                  <tr><td><strong>2025.03</strong></td><td>{isKo ? '베타 출시' : 'Beta Launch'}</td><td>{isKo ? '핵심 학습 콘텐츠와 가이드 페이지 포함' : 'Core learning content and guide pages'}</td></tr>
                  <tr><td><strong>2025.04</strong></td><td>{isKo ? '커뮤니티 오픈' : 'Community Open'}</td><td>{isKo ? '사용자 커뮤니티 오픈 및 협업 학습' : 'User community open and collaborative learning'}</td></tr>
                  <tr><td><strong>2026.Q2</strong></td><td>{isKo ? '정식 출시' : 'Official Launch'}</td><td>{isKo ? '전체 기능 갖춘 정식 버전 출시 예정' : 'Full-featured official version planned'}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="guide-section">
            <h1>FAQ</h1>
            <p className="guide-intro">{isKo ? '자주 묻는 질문' : 'Frequently Asked Questions'}</p>
            {[
              { q: isKo ? 'Gemini Master는 무료인가요?' : 'Is Gemini Master free?', a: isKo ? '네, 모든 학습 콘텐츠는 무료로 제공됩니다.' : 'Yes, all learning content is provided for free.' },
              { q: isKo ? 'Gemini API 키가 필요한가요?' : 'Do I need a Gemini API key?', a: isKo ? '학습 콘텐츠는 키 없이 이용 가능합니다. API 실습 시에는 Google AI Studio에서 무료 키를 발급받을 수 있습니다.' : 'Learning content is available without a key. For API practice, get a free key from Google AI Studio.' },
              { q: isKo ? '어떤 Gemini 모델을 다루나요?' : 'Which Gemini models are covered?', a: isKo ? 'Flash, Pro, Ultra를 포함한 전체 Gemini 모델 패밀리를 다룹니다.' : 'We cover the entire Gemini model family including Flash, Pro, and Ultra.' },
              { q: isKo ? '프로그래밍 경험이 필요한가요?' : 'Do I need programming experience?', a: isKo ? '기본 개념은 누구나 학습 가능합니다. API 가이드는 기초적인 프로그래밍 지식이 있으면 더 효과적입니다.' : 'Basic concepts are accessible to everyone. API guides are more effective with basic programming knowledge.' },
              { q: isKo ? 'NotebookLM은 무엇인가요?' : 'What is NotebookLM?', a: isKo ? 'Google의 AI 기반 연구 도우미입니다. 문서를 업로드하면 AI가 분석하여 요약, Q&A, 오디오 브리핑을 생성합니다.' : 'Google\'s AI-powered research assistant. Upload documents and AI generates summaries, Q&A, and audio briefings.' },
            ].map((faq, i) => (
              <details key={i} className="about-faq-item" style={{ marginBottom: 12 }}>
                <summary className="about-faq-question">
                  <i className="fa-solid fa-circle-question" />
                  {faq.q}
                  <i className="fa-solid fa-chevron-down about-faq-chevron" />
                </summary>
                <div className="about-faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? 'Gemini Master 소개' : 'About Gemini Master'} path="/about" />
      <div className="guide-layout">
        <aside className="guide-sidebar">
          <div className="guide-sidebar-title">{isKo ? '소개' : 'About'}</div>
          <ul className="guide-nav">
            {SECTIONS.map(s => (
              <li key={s.id} className="guide-nav-item">
                <button
                  className={`guide-nav-link ${activeSection === s.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(s.id)}
                >
                  <i className={`fa-solid ${s.icon} nav-icon`} />
                  {isKo ? s.ko : s.en}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="guide-content">
          {renderContent()}
          <div className="guide-nav-buttons">
            {prevSection && (
              <button className="guide-nav-btn prev" onClick={() => setActiveSection(prevSection.id)}>
                <i className="fa-solid fa-arrow-left" />
                {isKo ? prevSection.ko : prevSection.en}
              </button>
            )}
            {nextSection && (
              <button className="guide-nav-btn next" onClick={() => setActiveSection(nextSection.id)}>
                {isKo ? nextSection.ko : nextSection.en}
                <i className="fa-solid fa-arrow-right" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
