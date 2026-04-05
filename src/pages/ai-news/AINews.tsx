import { useState, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const NEWS_DATA = [
  {
    date: '2025-03-25',
    category: 'model',
    title: { ko: 'Gemini 2.5 Pro 출시', en: 'Gemini 2.5 Pro Released' },
    desc: {
      ko: 'Google이 Gemini 2.5 Pro를 발표했습니다. 향상된 추론 능력, 코딩 성능, 그리고 200만 토큰 컨텍스트 윈도우를 지원합니다.',
      en: 'Google announced Gemini 2.5 Pro with improved reasoning, coding performance, and 2M token context window support.',
    },
    url: 'https://blog.google/technology/ai/',
  },
  {
    date: '2025-03-13',
    category: 'model',
    title: { ko: 'Gemini 2.0 Flash 정식 출시', en: 'Gemini 2.0 Flash Generally Available' },
    desc: {
      ko: 'Gemini 2.0 Flash가 정식 출시되었습니다. 빠른 응답 속도와 멀티모달 출력(이미지, 오디오)을 지원합니다.',
      en: 'Gemini 2.0 Flash is now generally available with fast response times and multimodal output (images, audio).',
    },
    url: 'https://blog.google/technology/ai/',
  },
  {
    date: '2025-02-19',
    category: 'tool',
    title: { ko: 'Google AI Studio 업데이트', en: 'Google AI Studio Update' },
    desc: {
      ko: 'Google AI Studio에 실시간 스트리밍 API 테스트, 향상된 프롬프트 에디터, 코드 실행 기능이 추가되었습니다.',
      en: 'Google AI Studio now features real-time streaming API testing, enhanced prompt editor, and code execution capabilities.',
    },
    url: 'https://aistudio.google.com/',
  },
  {
    date: '2025-02-05',
    category: 'api',
    title: { ko: 'Gemini API Function Calling 개선', en: 'Gemini API Function Calling Improvements' },
    desc: {
      ko: 'Gemini API의 Function Calling이 대폭 개선되었습니다. 병렬 함수 호출, 향상된 파라미터 추출, 더 정확한 함수 선택을 지원합니다.',
      en: 'Gemini API Function Calling significantly improved with parallel function calls, better parameter extraction, and more accurate function selection.',
    },
    url: 'https://ai.google.dev/docs',
  },
  {
    date: '2025-01-21',
    category: 'platform',
    title: { ko: 'Vertex AI Gemini 엔터프라이즈 기능 확대', en: 'Vertex AI Gemini Enterprise Features Expanded' },
    desc: {
      ko: 'Vertex AI에서 Gemini 모델의 엔터프라이즈 기능이 확대되었습니다. 향상된 보안, 커스텀 모델 튜닝, SLA 보장이 포함됩니다.',
      en: 'Vertex AI expanded enterprise features for Gemini models including enhanced security, custom model tuning, and SLA guarantees.',
    },
    url: 'https://cloud.google.com/vertex-ai/docs',
  },
  {
    date: '2025-01-15',
    category: 'model',
    title: { ko: 'Gemini 2.0 Flash Thinking 출시', en: 'Gemini 2.0 Flash Thinking Released' },
    desc: {
      ko: 'Gemini 2.0 Flash Thinking 모드가 출시되었습니다. 모델이 추론 과정을 단계별로 보여주며, 복잡한 문제 해결 능력이 향상되었습니다.',
      en: 'Gemini 2.0 Flash Thinking mode released. The model shows step-by-step reasoning and improved complex problem-solving capabilities.',
    },
    url: 'https://blog.google/technology/ai/',
  },
  {
    date: '2024-12-11',
    category: 'model',
    title: { ko: 'Gemini 2.0 모델 패밀리 발표', en: 'Gemini 2.0 Model Family Announced' },
    desc: {
      ko: 'Google이 Gemini 2.0 모델 패밀리를 발표했습니다. 에이전트 기능, 멀티모달 출력, 네이티브 도구 사용 등 차세대 AI 기능을 제공합니다.',
      en: 'Google announced the Gemini 2.0 model family with agentic capabilities, multimodal output, and native tool use.',
    },
    url: 'https://blog.google/technology/ai/',
  },
  {
    date: '2024-11-20',
    category: 'api',
    title: { ko: 'Gemini API 가격 인하', en: 'Gemini API Price Reduction' },
    desc: {
      ko: 'Google이 Gemini API 가격을 대폭 인하했습니다. Flash 모델은 입력 토큰 기준 50% 이상 인하되어 더욱 경제적으로 사용할 수 있습니다.',
      en: 'Google significantly reduced Gemini API pricing. Flash model input tokens reduced by over 50%, making it more economical.',
    },
    url: 'https://ai.google.dev/pricing',
  },
  {
    date: '2024-10-08',
    category: 'platform',
    title: { ko: 'Google AI Studio 프롬프트 갤러리 런칭', en: 'Google AI Studio Prompt Gallery Launch' },
    desc: {
      ko: 'Google AI Studio에 커뮤니티 프롬프트 갤러리가 추가되었습니다. 다양한 사용 사례별 프롬프트를 탐색하고 공유할 수 있습니다.',
      en: 'Google AI Studio launched a community prompt gallery. Browse and share prompts for various use cases.',
    },
    url: 'https://aistudio.google.com/',
  },
];

const CATEGORY_LABELS = {
  all: { ko: '전체', en: 'All' },
  model: { ko: '모델', en: 'Models' },
  api: { ko: 'API', en: 'API' },
  tool: { ko: '도구', en: 'Tools' },
  platform: { ko: '플랫폼', en: 'Platform' },
};

const CATEGORY_ICONS = {
  model: 'fa-solid fa-microchip',
  api: 'fa-solid fa-plug',
  tool: 'fa-solid fa-screwdriver-wrench',
  platform: 'fa-solid fa-cloud',
};

export default function AINews() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    const items = category === 'all'
      ? NEWS_DATA
      : NEWS_DATA.filter(n => n.category === category);
    return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [category]);

  const formatDate = (d) => {
    const date = new Date(d);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${y}.${m}.${day}`;
  };

  return (
    <div className="ai-news-page">
      <SEOHead
        title={isKo ? 'AI 뉴스' : 'AI News'}
        path="/ai-news"
      />
      <div className="container">
        <div className="page-header">
          <h1>{isKo ? 'AI 뉴스' : 'AI News'}</h1>
          <p className="page-subtitle">
            {isKo
              ? 'Gemini AI 및 Google AI 관련 최신 소식'
              : 'Latest news about Gemini AI and Google AI'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
            <button
              key={key}
              className={`chip ${category === key ? 'active' : ''}`}
              onClick={() => setCategory(key)}
            >
              {isKo ? label.ko : label.en}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          {filtered.map((news, idx) => (
            <a
              key={idx}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ padding: 20, textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: 'var(--primary-light, rgba(66,133,244,0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <i className={CATEGORY_ICONS[news.category] || 'fa-solid fa-newspaper'} style={{ color: 'var(--primary)', fontSize: '1.1rem' }} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span className="chip" style={{ fontSize: '0.7rem' }}>
                      {isKo ? CATEGORY_LABELS[news.category]?.ko : CATEGORY_LABELS[news.category]?.en}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{formatDate(news.date)}</span>
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: '1rem' }}>
                    {isKo ? news.title.ko : news.title.en}
                    <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: 8, fontSize: '0.7rem', color: 'var(--text-light)' }} />
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--text-light)' }}>
                    {isKo ? news.desc.ko : news.desc.en}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', padding: 40, color: 'var(--text-light)' }}>
            {isKo ? '해당 카테고리의 뉴스가 없습니다.' : 'No news in this category.'}
          </p>
        )}
      </div>
    </div>
  );
}
