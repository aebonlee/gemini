import { useState, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = [
  { key: 'all', ko: '전체', en: 'All' },
  { key: 'code', ko: '코드', en: 'Code' },
  { key: 'writing', ko: '글쓰기', en: 'Writing' },
  { key: 'analysis', ko: '분석', en: 'Analysis' },
  { key: 'creative', ko: '창작', en: 'Creative' },
  { key: 'business', ko: '비즈니스', en: 'Business' },
];

const PROMPTS = [
  {
    category: 'code',
    title: { ko: 'Python 코드 리뷰어', en: 'Python Code Reviewer' },
    desc: { ko: 'Python 코드의 버그, 성능, 스타일을 분석하는 전문 리뷰어', en: 'Expert reviewer for Python code bugs, performance, and style' },
    prompt: {
      ko: '당신은 시니어 Python 개발자입니다. 제가 보내는 코드를 다음 기준으로 리뷰해 주세요:\n\n1. **버그**: 잠재적 버그나 에러 케이스\n2. **성능**: 시간/공간 복잡도 개선점\n3. **가독성**: 변수명, 함수 구조, 주석\n4. **Python 관례**: PEP 8, Pythonic한 표현\n\n각 항목별로 구체적인 코드 수정 예시를 포함해 주세요.',
      en: 'You are a senior Python developer. Review my code based on:\n\n1. **Bugs**: Potential bugs or edge cases\n2. **Performance**: Time/space complexity improvements\n3. **Readability**: Variable names, function structure, comments\n4. **Python conventions**: PEP 8, Pythonic expressions\n\nInclude specific code fix examples for each item.',
    },
  },
  {
    category: 'code',
    title: { ko: 'API 설계 도우미', en: 'API Design Helper' },
    desc: { ko: 'RESTful API 엔드포인트 설계를 도와주는 프롬프트', en: 'Helps design RESTful API endpoints' },
    prompt: {
      ko: '다음 요구사항에 맞는 RESTful API를 설계해 주세요:\n\n- 리소스: [리소스명]\n- 주요 기능: CRUD + [추가 기능]\n- 인증: JWT 토큰\n\n각 엔드포인트에 대해: HTTP 메서드, URL 패턴, 요청/응답 JSON 예시, 에러 코드를 포함해 주세요.',
      en: 'Design a RESTful API for the following requirements:\n\n- Resource: [resource name]\n- Key features: CRUD + [additional features]\n- Auth: JWT token\n\nFor each endpoint include: HTTP method, URL pattern, request/response JSON examples, and error codes.',
    },
  },
  {
    category: 'writing',
    title: { ko: '기술 블로그 작성', en: 'Tech Blog Writer' },
    desc: { ko: '구조화된 기술 블로그 포스트를 작성하는 프롬프트', en: 'Write structured technical blog posts' },
    prompt: {
      ko: '다음 주제에 대한 기술 블로그 포스트를 작성해 주세요:\n\n주제: [주제]\n대상 독자: [초급/중급/고급]\n\n구성:\n1. 흥미로운 도입부\n2. 핵심 개념 설명 (비유 활용)\n3. 코드 예제 (주석 포함)\n4. 실전 활용 팁\n5. 마무리 및 다음 학습 안내\n\n톤: 전문적이지만 친근하게, 1인칭 사용',
      en: 'Write a technical blog post about:\n\nTopic: [topic]\nTarget audience: [beginner/intermediate/advanced]\n\nStructure:\n1. Engaging introduction\n2. Core concepts (with analogies)\n3. Code examples (with comments)\n4. Practical tips\n5. Conclusion with next steps\n\nTone: Professional but friendly, first person',
    },
  },
  {
    category: 'writing',
    title: { ko: '보고서 요약', en: 'Report Summarizer' },
    desc: { ko: '긴 문서를 경영진용 요약 보고서로 변환', en: 'Transform long documents into executive summaries' },
    prompt: {
      ko: '다음 문서를 경영진 요약(Executive Summary) 형식으로 변환해 주세요:\n\n형식:\n- 한 줄 요약 (1문장)\n- 핵심 발견사항 (3~5개 불릿포인트)\n- 주요 수치/데이터\n- 권장 액션 아이템 (우선순위 포함)\n- 리스크 요인\n\n[문서 내용]',
      en: 'Convert the following document into an Executive Summary format:\n\nFormat:\n- One-line summary (1 sentence)\n- Key findings (3-5 bullet points)\n- Key metrics/data\n- Recommended action items (with priority)\n- Risk factors\n\n[Document content]',
    },
  },
  {
    category: 'analysis',
    title: { ko: '경쟁사 분석', en: 'Competitor Analysis' },
    desc: { ko: '체계적인 경쟁사 분석 프레임워크', en: 'Systematic competitor analysis framework' },
    prompt: {
      ko: '다음 정보를 바탕으로 경쟁사 분석을 수행해 주세요:\n\n우리 제품: [제품명]\n경쟁사: [경쟁사 목록]\n\n분석 항목:\n1. SWOT 분석 (각 경쟁사)\n2. 기능 비교 매트릭스\n3. 가격 전략 비교\n4. 시장 포지셔닝 맵\n5. 우리의 차별화 전략 제안\n\n표와 차트 형식으로 정리해 주세요.',
      en: 'Perform competitor analysis based on:\n\nOur product: [product name]\nCompetitors: [competitor list]\n\nAnalysis:\n1. SWOT analysis (each competitor)\n2. Feature comparison matrix\n3. Pricing strategy comparison\n4. Market positioning map\n5. Our differentiation strategy\n\nOrganize in tables and charts.',
    },
  },
  {
    category: 'analysis',
    title: { ko: '데이터 인사이트 추출', en: 'Data Insight Extraction' },
    desc: { ko: '데이터셋에서 의미 있는 인사이트를 도출하는 프롬프트', en: 'Extract meaningful insights from datasets' },
    prompt: {
      ko: '다음 데이터를 분석하고 인사이트를 도출해 주세요:\n\n분석 단계:\n1. 데이터 개요 및 기본 통계\n2. 주요 트렌드 및 패턴\n3. 이상치 탐지 및 원인 분석\n4. 상관관계 분석\n5. 예측 및 전망\n6. 비즈니스 액션 제안\n\n시각화 제안도 포함해 주세요.\n\n[데이터]',
      en: 'Analyze the following data and derive insights:\n\nAnalysis steps:\n1. Data overview and basic statistics\n2. Key trends and patterns\n3. Outlier detection and cause analysis\n4. Correlation analysis\n5. Predictions and forecasts\n6. Business action suggestions\n\nInclude visualization recommendations.\n\n[Data]',
    },
  },
  {
    category: 'creative',
    title: { ko: '스토리 생성기', en: 'Story Generator' },
    desc: { ko: '설정에 따라 창의적인 단편 스토리를 생성', en: 'Generate creative short stories based on settings' },
    prompt: {
      ko: '다음 설정으로 흥미로운 단편 스토리를 작성해 주세요:\n\n장르: [SF/판타지/미스터리/로맨스]\n배경: [시대, 장소]\n주인공: [캐릭터 설명]\n핵심 갈등: [갈등 요소]\n\n요구사항:\n- 강렬한 첫 문장으로 시작\n- 감각적 묘사 포함\n- 반전이 있는 결말\n- 약 1000자 분량',
      en: 'Write an engaging short story with these settings:\n\nGenre: [Sci-fi/Fantasy/Mystery/Romance]\nSetting: [era, place]\nProtagonist: [character description]\nCore conflict: [conflict element]\n\nRequirements:\n- Start with a powerful first sentence\n- Include sensory descriptions\n- Twist ending\n- About 500 words',
    },
  },
  {
    category: 'creative',
    title: { ko: '마케팅 카피', en: 'Marketing Copy' },
    desc: { ko: '제품/서비스 마케팅 카피를 다양한 톤으로 생성', en: 'Generate marketing copy in various tones' },
    prompt: {
      ko: '다음 제품의 마케팅 카피를 작성해 주세요:\n\n제품: [제품명]\n특징: [핵심 특징 3개]\n타겟: [타겟 고객]\n\n작성할 카피:\n1. 헤드라인 (5개 변형)\n2. 서브 헤드라인\n3. 제품 설명 (50자/100자/200자)\n4. CTA 문구 (3개)\n5. SNS 포스트 (인스타그램/트위터)',
      en: 'Write marketing copy for:\n\nProduct: [product name]\nFeatures: [3 key features]\nTarget: [target audience]\n\nCopy needed:\n1. Headlines (5 variations)\n2. Sub-headline\n3. Product description (50/100/200 chars)\n4. CTA phrases (3)\n5. Social posts (Instagram/Twitter)',
    },
  },
  {
    category: 'business',
    title: { ko: '비즈니스 이메일', en: 'Business Email' },
    desc: { ko: '상황별 전문적인 비즈니스 이메일 작성', en: 'Write professional business emails by situation' },
    prompt: {
      ko: '다음 상황에 맞는 비즈니스 이메일을 작성해 주세요:\n\n상황: [이메일 상황 - 제안/요청/감사/사과/후속 등]\n받는 사람: [관계 - 고객/파트너/상사/팀원]\n핵심 메시지: [전달할 내용]\n\n요구사항:\n- 명확한 제목\n- 적절한 인사말\n- 본론은 3문단 이내\n- 구체적인 CTA\n- 전문적이지만 따뜻한 톤',
      en: 'Write a business email for:\n\nSituation: [proposal/request/thank you/apology/follow-up]\nRecipient: [relationship - client/partner/manager/teammate]\nKey message: [content to deliver]\n\nRequirements:\n- Clear subject line\n- Appropriate greeting\n- Body within 3 paragraphs\n- Specific CTA\n- Professional but warm tone',
    },
  },
  {
    category: 'business',
    title: { ko: '회의록 정리', en: 'Meeting Notes Organizer' },
    desc: { ko: '회의 내용을 체계적으로 정리하는 프롬프트', en: 'Systematically organize meeting content' },
    prompt: {
      ko: '다음 회의 내용을 정리해 주세요:\n\n형식:\n## 회의 요약\n- 일시:\n- 참석자:\n- 핵심 안건:\n\n## 논의 내용\n(주제별로 정리)\n\n## 결정 사항\n(번호 매기기)\n\n## 액션 아이템\n| 담당자 | 내용 | 기한 |\n\n## 다음 회의 안건\n\n[회의 내용]',
      en: 'Organize the following meeting content:\n\nFormat:\n## Meeting Summary\n- Date:\n- Attendees:\n- Key agenda:\n\n## Discussion Points\n(Organized by topic)\n\n## Decisions Made\n(Numbered)\n\n## Action Items\n| Owner | Task | Deadline |\n\n## Next Meeting Agenda\n\n[Meeting content]',
    },
  },
];

export default function PromptGallery() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [category, setCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const filtered = useMemo(() => {
    return category === 'all'
      ? PROMPTS
      : PROMPTS.filter(p => p.category === category);
  }, [category]);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(idx);
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(() => {});
  };

  return (
    <div className="prompt-gallery-page">
      <SEOHead
        title={isKo ? '프롬프트 갤러리' : 'Prompt Gallery'}
        path="/prompt-gallery"
      />
      <div className="container">
        <div className="page-header">
          <h1>{isKo ? '프롬프트 갤러리' : 'Prompt Gallery'}</h1>
          <p className="page-subtitle">
            {isKo
              ? 'Gemini AI에 최적화된 프롬프트 모음. 복사하여 바로 사용하세요.'
              : 'Curated prompts optimized for Gemini AI. Copy and use right away.'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`chip ${category === cat.key ? 'active' : ''}`}
              onClick={() => setCategory(cat.key)}
            >
              {isKo ? cat.ko : cat.en}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
          {filtered.map((item, idx) => {
            const globalIdx = PROMPTS.indexOf(item);
            const isExpanded = expandedId === globalIdx;
            return (
              <div key={globalIdx} className="card" style={{ padding: 20, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span className="chip" style={{ fontSize: '0.7rem' }}>
                    {CATEGORIES.find(c => c.key === item.category)?.[isKo ? 'ko' : 'en']}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1rem', flex: 1 }}>
                    {isKo ? item.title.ko : item.title.en}
                  </h3>
                </div>
                <p style={{ margin: '0 0 12px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                  {isKo ? item.desc.ko : item.desc.en}
                </p>

                {isExpanded && (
                  <pre style={{
                    background: 'var(--bg-secondary)',
                    padding: 12,
                    borderRadius: 6,
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    marginBottom: 12,
                    maxHeight: 300,
                    overflowY: 'auto',
                    border: '1px solid var(--border)',
                  }}>
                    {isKo ? item.prompt.ko : item.prompt.en}
                  </pre>
                )}

                <div style={{ display: 'flex', gap: 6, marginTop: 'auto' }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setExpandedId(isExpanded ? null : globalIdx)}
                    style={{ flex: 1 }}
                  >
                    <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
                    {' '}{isExpanded ? (isKo ? '접기' : 'Collapse') : (isKo ? '프롬프트 보기' : 'View Prompt')}
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleCopy(isKo ? item.prompt.ko : item.prompt.en, globalIdx)}
                  >
                    <i className={`fa-solid ${copiedId === globalIdx ? 'fa-check' : 'fa-copy'}`} />
                    {' '}{copiedId === globalIdx ? (isKo ? '복사됨' : 'Copied') : (isKo ? '복사' : 'Copy')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
