import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';

const SECTIONS = [
  { id: 'overview', icon: 'fa-circle-info', ko: '개요', en: 'Overview' },
  { id: 'flash', icon: 'fa-bolt', ko: 'Gemini Flash', en: 'Gemini Flash' },
  { id: 'pro', icon: 'fa-star', ko: 'Gemini Pro', en: 'Gemini Pro' },
  { id: 'ultra', icon: 'fa-crown', ko: 'Gemini Ultra', en: 'Gemini Ultra' },
  { id: 'selection', icon: 'fa-compass', ko: '모델 선택 가이드', en: 'Model Selection Guide' },
  { id: 'pricing', icon: 'fa-tag', ko: '가격 정책', en: 'Pricing' },
];

export default function GeminiModelsGuide() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeSection, setActiveSection] = useState('overview');

  const currentIdx = SECTIONS.findIndex(s => s.id === activeSection);
  const prevSection = currentIdx > 0 ? SECTIONS[currentIdx - 1] : null;
  const nextSection = currentIdx < SECTIONS.length - 1 ? SECTIONS[currentIdx + 1] : null;

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="guide-section">
            <h1>{isKo ? 'Gemini 모델 패밀리 개요' : 'Gemini Model Family Overview'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Google Gemini는 Google DeepMind가 개발한 차세대 멀티모달 AI 모델 패밀리입니다. 텍스트, 이미지, 오디오, 비디오, 코드를 네이티브로 이해하고 생성할 수 있는 능력을 갖추고 있습니다.'
                : 'Google Gemini is a next-generation multimodal AI model family developed by Google DeepMind. It has the ability to natively understand and generate text, images, audio, video, and code.'}
            </p>

            <div className="guide-card-grid">
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}>
                  <i className="fa-solid fa-bolt" />
                </div>
                <h3>Gemini Flash</h3>
                <p>{isKo ? '빠른 속도와 효율성에 최적화된 경량 모델. 대량 처리 및 실시간 응답에 적합합니다.' : 'Lightweight model optimized for speed and efficiency. Ideal for batch processing and real-time responses.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #EA4335, #FBBC04)' }}>
                  <i className="fa-solid fa-star" />
                </div>
                <h3>Gemini Pro</h3>
                <p>{isKo ? '성능과 효율의 균형을 갖춘 범용 모델. 대부분의 작업에 최적의 선택입니다.' : 'General-purpose model balancing performance and efficiency. The optimal choice for most tasks.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #9334E6, #EA4335)' }}>
                  <i className="fa-solid fa-crown" />
                </div>
                <h3>Gemini Ultra</h3>
                <p>{isKo ? '최고 성능의 대규모 모델. 복잡한 추론, 코딩, 연구 분석에 최적화되었습니다.' : 'Highest-performance large-scale model. Optimized for complex reasoning, coding, and research analysis.'}</p>
              </div>
            </div>

            <TipBox type="tip" title={isKo ? '모델 네이밍 규칙' : 'Model Naming Convention'}>
              {isKo
                ? 'Gemini 모델은 "gemini-{버전}-{티어}" 형식으로 명명됩니다. 예: gemini-2.0-flash, gemini-2.5-pro. 버전이 높을수록 최신이며, 티어는 모델 크기를 나타냅니다.'
                : 'Gemini models are named in the format "gemini-{version}-{tier}". Example: gemini-2.0-flash, gemini-2.5-pro. Higher versions are newer, and the tier indicates model size.'}
            </TipBox>

            <h2>{isKo ? '주요 특징' : 'Key Features'}</h2>
            <ul className="guide-list">
              <li><strong>{isKo ? '멀티모달 네이티브' : 'Natively Multimodal'}</strong> — {isKo ? '텍스트, 이미지, 오디오, 비디오를 하나의 모델에서 처리' : 'Process text, images, audio, and video in a single model'}</li>
              <li><strong>{isKo ? '긴 컨텍스트 윈도우' : 'Long Context Window'}</strong> — {isKo ? 'Flash는 최대 1M 토큰, Pro는 최대 2M 토큰 지원' : 'Flash supports up to 1M tokens, Pro supports up to 2M tokens'}</li>
              <li><strong>{isKo ? '함수 호출' : 'Function Calling'}</strong> — {isKo ? '외부 API와 도구를 직접 호출할 수 있는 기능' : 'Ability to directly call external APIs and tools'}</li>
              <li><strong>{isKo ? '코드 실행' : 'Code Execution'}</strong> — {isKo ? '모델이 직접 코드를 작성하고 실행할 수 있음' : 'Models can write and execute code directly'}</li>
              <li><strong>{isKo ? '구조화된 출력' : 'Structured Output'}</strong> — {isKo ? 'JSON 스키마를 지정하여 정형화된 응답 생성' : 'Generate structured responses by specifying JSON schemas'}</li>
              <li><strong>{isKo ? '그라운딩' : 'Grounding'}</strong> — {isKo ? 'Google 검색 결과를 기반으로 최신 정보 제공' : 'Provide up-to-date information based on Google Search results'}</li>
            </ul>
          </div>
        );

      case 'flash':
        return (
          <div className="guide-section">
            <h1>Gemini Flash</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini Flash는 속도와 비용 효율성에 최적화된 모델입니다. 빠른 응답 시간이 필요한 대화형 애플리케이션과 대량 데이터 처리에 이상적입니다.'
                : 'Gemini Flash is a model optimized for speed and cost efficiency. Ideal for interactive applications requiring fast response times and batch data processing.'}
            </p>

            <h2>{isKo ? '버전별 비교' : 'Version Comparison'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '모델' : 'Model'}</th>
                    <th>{isKo ? '컨텍스트 윈도우' : 'Context Window'}</th>
                    <th>{isKo ? '주요 특징' : 'Key Features'}</th>
                    <th>{isKo ? '출시일' : 'Release'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>gemini-2.0-flash</code></td>
                    <td>1M tokens</td>
                    <td>{isKo ? '멀티모달 입력, 이미지/오디오 생성' : 'Multimodal input, image/audio generation'}</td>
                    <td>2025.02</td>
                  </tr>
                  <tr>
                    <td><code>gemini-2.0-flash-lite</code></td>
                    <td>1M tokens</td>
                    <td>{isKo ? '초저비용, 최고 속도' : 'Ultra-low cost, fastest speed'}</td>
                    <td>2025.02</td>
                  </tr>
                  <tr>
                    <td><code>gemini-2.5-flash</code></td>
                    <td>1M tokens</td>
                    <td>{isKo ? 'Thinking 모드, 향상된 추론' : 'Thinking mode, enhanced reasoning'}</td>
                    <td>2025.04</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? '기본 사용법' : 'Basic Usage'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Explain quantum computing in simple terms"
)
print(response.text)`} />

            <TipBox type="tip" title={isKo ? 'Flash 모델 선택 팁' : 'Flash Model Selection Tip'}>
              {isKo
                ? 'gemini-2.0-flash-lite는 단순한 분류, 요약 등 기본 작업에 적합하고, gemini-2.5-flash는 복잡한 추론이 필요한 작업에 사용하세요. Thinking 모드를 활용하면 수학, 코딩 문제에서 더 나은 결과를 얻을 수 있습니다.'
                : 'gemini-2.0-flash-lite is suitable for basic tasks like simple classification and summarization, while gemini-2.5-flash is for tasks requiring complex reasoning. Using Thinking mode gives better results for math and coding problems.'}
            </TipBox>

            <h2>{isKo ? 'Flash Thinking 모드' : 'Flash Thinking Mode'}</h2>
            <p>
              {isKo
                ? 'Gemini 2.5 Flash는 "thinking" 기능을 지원합니다. 모델이 응답 전에 내부적으로 추론 과정을 거치며, 더 정확한 결과를 제공합니다.'
                : 'Gemini 2.5 Flash supports the "thinking" feature. The model goes through an internal reasoning process before responding, providing more accurate results.'}
            </p>
            <CodeBlock language="python" code={`response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="What is the sum of prime numbers less than 100?",
    config={
        "thinking_config": {"thinking_budget": 1024}
    }
)

# Access the thinking process
for part in response.candidates[0].content.parts:
    if part.thought:
        print("Thinking:", part.text)
    else:
        print("Answer:", part.text)`} />

            <h2>{isKo ? '적합한 사용 사례' : 'Ideal Use Cases'}</h2>
            <ul className="guide-list">
              <li>{isKo ? '실시간 챗봇 및 대화형 AI' : 'Real-time chatbots and conversational AI'}</li>
              <li>{isKo ? '대량 문서 요약 및 분류' : 'Batch document summarization and classification'}</li>
              <li>{isKo ? '데이터 추출 및 변환' : 'Data extraction and transformation'}</li>
              <li>{isKo ? '빠른 프로토타이핑' : 'Rapid prototyping'}</li>
              <li>{isKo ? '비용 민감한 프로덕션 환경' : 'Cost-sensitive production environments'}</li>
            </ul>
          </div>
        );

      case 'pro':
        return (
          <div className="guide-section">
            <h1>Gemini Pro</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini Pro는 성능과 효율의 균형을 갖춘 Google의 플래그십 모델입니다. 복잡한 추론, 긴 컨텍스트 처리, 고품질 콘텐츠 생성에 탁월합니다.'
                : 'Gemini Pro is Google\'s flagship model that balances performance and efficiency. It excels at complex reasoning, long context processing, and high-quality content generation.'}
            </p>

            <h2>{isKo ? '주요 성능 지표' : 'Key Performance Metrics'}</h2>
            <div className="guide-card-grid">
              <div className="guide-card">
                <h4>2M tokens</h4>
                <p>{isKo ? '업계 최대 컨텍스트 윈도우' : 'Industry-leading context window'}</p>
              </div>
              <div className="guide-card">
                <h4>MMLU: 90.0%</h4>
                <p>{isKo ? '다분야 학술 벤치마크' : 'Multi-domain academic benchmark'}</p>
              </div>
              <div className="guide-card">
                <h4>HumanEval: 84.1%</h4>
                <p>{isKo ? '코딩 벤치마크 최고 수준' : 'Top-tier coding benchmark'}</p>
              </div>
            </div>

            <h2>{isKo ? '고급 기능' : 'Advanced Features'}</h2>
            <h3>{isKo ? '긴 컨텍스트 처리' : 'Long Context Processing'}</h3>
            <p>
              {isKo
                ? 'Gemini 2.5 Pro는 최대 2M 토큰의 컨텍스트 윈도우를 지원하여, 대규모 코드베이스 분석, 긴 문서 요약, 복잡한 연구 논문 분석이 가능합니다.'
                : 'Gemini 2.5 Pro supports a context window of up to 2M tokens, enabling large codebase analysis, long document summarization, and complex research paper analysis.'}
            </p>

            <CodeBlock language="python" code={`# Upload a long document for analysis
import google.genai as genai

client = genai.Client(api_key="YOUR_API_KEY")

# Upload file for processing
file = client.files.upload(file="research_paper.pdf")

response = client.models.generate_content(
    model="gemini-2.5-pro",
    contents=[
        file,
        "Provide a comprehensive analysis of this paper including: "
        "1. Key findings, 2. Methodology critique, "
        "3. Comparison with existing literature"
    ]
)
print(response.text)`} />

            <h3>{isKo ? 'Thinking 모드 (심화 추론)' : 'Thinking Mode (Deep Reasoning)'}</h3>
            <p>
              {isKo
                ? 'Gemini 2.5 Pro는 기본적으로 Thinking 모드가 활성화되어 있으며, 복잡한 수학, 과학, 코딩 문제에서 뛰어난 성능을 보여줍니다.'
                : 'Gemini 2.5 Pro has Thinking mode enabled by default, showing excellent performance in complex math, science, and coding problems.'}
            </p>

            <CodeBlock language="python" code={`response = client.models.generate_content(
    model="gemini-2.5-pro",
    contents="Prove that there are infinitely many prime numbers.",
    config={
        "thinking_config": {"thinking_budget": 8192}
    }
)

for part in response.candidates[0].content.parts:
    if part.thought:
        print("[Reasoning]", part.text[:200], "...")
    else:
        print("[Answer]", part.text)`} />

            <TipBox type="important" title={isKo ? 'Pro 모델 활용 팁' : 'Pro Model Usage Tip'}>
              {isKo
                ? 'Pro 모델은 복잡한 작업에 적합하지만, 단순 작업에는 Flash가 더 비용 효율적입니다. 작업의 복잡도에 따라 적절한 모델을 선택하세요.'
                : 'Pro model is suitable for complex tasks, but Flash is more cost-effective for simple tasks. Choose the appropriate model based on task complexity.'}
            </TipBox>

            <h2>{isKo ? '적합한 사용 사례' : 'Ideal Use Cases'}</h2>
            <ul className="guide-list">
              <li>{isKo ? '복잡한 코드 리뷰 및 리팩토링' : 'Complex code review and refactoring'}</li>
              <li>{isKo ? '연구 논문 분석 및 요약' : 'Research paper analysis and summarization'}</li>
              <li>{isKo ? '고급 수학 및 과학 문제 해결' : 'Advanced math and science problem solving'}</li>
              <li>{isKo ? '멀티모달 데이터 분석' : 'Multimodal data analysis'}</li>
              <li>{isKo ? '전략 수립 및 의사결정 지원' : 'Strategy planning and decision support'}</li>
            </ul>
          </div>
        );

      case 'ultra':
        return (
          <div className="guide-section">
            <h1>Gemini Ultra</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini Ultra는 Google의 가장 강력한 AI 모델입니다. 최고 수준의 추론 능력, 멀티모달 이해, 코드 생성 기능을 제공합니다.'
                : 'Gemini Ultra is Google\'s most powerful AI model. It provides top-tier reasoning ability, multimodal understanding, and code generation capabilities.'}
            </p>

            <TipBox type="warning" title={isKo ? '접근 제한' : 'Access Limitations'}>
              {isKo
                ? 'Gemini Ultra는 Google One AI Premium 또는 Gemini Advanced 구독을 통해 접근할 수 있습니다. API 접근은 제한적이며, Vertex AI를 통해 사용할 수 있습니다.'
                : 'Gemini Ultra is accessible through Google One AI Premium or Gemini Advanced subscription. API access is limited and available through Vertex AI.'}
            </TipBox>

            <h2>{isKo ? '벤치마크 성능' : 'Benchmark Performance'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '벤치마크' : 'Benchmark'}</th>
                    <th>Gemini Ultra</th>
                    <th>{isKo ? '설명' : 'Description'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>MMLU</td><td>90.0%+</td><td>{isKo ? '57개 분야 다학제 성능' : '57-subject multidisciplinary performance'}</td></tr>
                  <tr><td>MATH</td><td>94.4%</td><td>{isKo ? '경쟁 수학 문제 해결' : 'Competition math problem solving'}</td></tr>
                  <tr><td>HumanEval</td><td>74.4%</td><td>{isKo ? '코드 생성 정확도' : 'Code generation accuracy'}</td></tr>
                  <tr><td>Natural2Code</td><td>74.9%</td><td>{isKo ? '자연어 → 코드 변환' : 'Natural language → code conversion'}</td></tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? '핵심 역량' : 'Core Capabilities'}</h2>
            <ul className="guide-list">
              <li><strong>{isKo ? '최고 수준의 추론' : 'Top-tier Reasoning'}</strong> — {isKo ? '복잡한 논리적 추론과 다단계 문제 해결' : 'Complex logical reasoning and multi-step problem solving'}</li>
              <li><strong>{isKo ? '고급 멀티모달' : 'Advanced Multimodal'}</strong> — {isKo ? '이미지, 비디오, 오디오의 정밀한 이해와 분석' : 'Precise understanding and analysis of images, video, and audio'}</li>
              <li><strong>{isKo ? '대규모 코드 작업' : 'Large-scale Code Tasks'}</strong> — {isKo ? '전체 프로젝트 수준의 코드 이해와 생성' : 'Project-level code understanding and generation'}</li>
              <li><strong>{isKo ? '전문 분야 지식' : 'Domain Expertise'}</strong> — {isKo ? '의학, 법률, 금융 등 전문 분야의 깊은 지식' : 'Deep knowledge in specialized fields like medicine, law, and finance'}</li>
            </ul>

            <h2>{isKo ? '적합한 사용 사례' : 'Ideal Use Cases'}</h2>
            <ul className="guide-list">
              <li>{isKo ? '과학 연구 분석 및 논문 작성 보조' : 'Scientific research analysis and paper writing assistance'}</li>
              <li>{isKo ? '복잡한 엔터프라이즈 애플리케이션' : 'Complex enterprise applications'}</li>
              <li>{isKo ? '고급 의료/법률 분석' : 'Advanced medical/legal analysis'}</li>
              <li>{isKo ? '대규모 코드베이스 마이그레이션' : 'Large-scale codebase migration'}</li>
            </ul>
          </div>
        );

      case 'selection':
        return (
          <div className="guide-section">
            <h1>{isKo ? '모델 선택 가이드' : 'Model Selection Guide'}</h1>
            <p className="guide-intro">
              {isKo
                ? '작업의 특성에 따라 적합한 Gemini 모델을 선택하는 방법을 안내합니다.'
                : 'A guide to selecting the right Gemini model based on your task characteristics.'}
            </p>

            <h2>{isKo ? '의사결정 플로우' : 'Decision Flow'}</h2>
            <div className="guide-card-grid">
              <div className="guide-card">
                <h4><i className="fa-solid fa-gauge-high" style={{ color: '#34A853' }} /> {isKo ? '속도 우선' : 'Speed First'}</h4>
                <p>{isKo ? '→ Gemini Flash 선택' : '→ Choose Gemini Flash'}</p>
                <small>{isKo ? '실시간 채팅, 자동 완성, 스트리밍' : 'Real-time chat, auto-completion, streaming'}</small>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-scale-balanced" style={{ color: '#4285F4' }} /> {isKo ? '균형 필요' : 'Balance Needed'}</h4>
                <p>{isKo ? '→ Gemini Pro 선택' : '→ Choose Gemini Pro'}</p>
                <small>{isKo ? '코드 리뷰, 문서 분석, 연구' : 'Code review, document analysis, research'}</small>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-trophy" style={{ color: '#EA4335' }} /> {isKo ? '최고 품질' : 'Highest Quality'}</h4>
                <p>{isKo ? '→ Gemini Ultra 선택' : '→ Choose Gemini Ultra'}</p>
                <small>{isKo ? '복잡한 추론, 전문 분야, 대규모 프로젝트' : 'Complex reasoning, expert domains, large projects'}</small>
              </div>
            </div>

            <TipBox type="tip" title={isKo ? '비용 최적화 전략' : 'Cost Optimization Strategy'}>
              {isKo
                ? '먼저 Flash로 프로토타입을 만들고, 필요에 따라 Pro로 업그레이드하세요. 대부분의 경우 Flash로도 충분히 좋은 결과를 얻을 수 있습니다. Flash-lite는 대량 처리 시 최고의 비용 효율을 제공합니다.'
                : 'Start prototyping with Flash and upgrade to Pro as needed. In most cases, Flash provides sufficiently good results. Flash-lite offers the best cost efficiency for batch processing.'}
            </TipBox>

            <h2>{isKo ? '작업별 추천 모델' : 'Recommended Models by Task'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '작업 유형' : 'Task Type'}</th>
                    <th>{isKo ? '추천 모델' : 'Recommended'}</th>
                    <th>{isKo ? '이유' : 'Reason'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>{isKo ? '챗봇' : 'Chatbot'}</td><td>Flash</td><td>{isKo ? '빠른 응답, 낮은 비용' : 'Fast response, low cost'}</td></tr>
                  <tr><td>{isKo ? '문서 요약' : 'Document Summary'}</td><td>Flash / Pro</td><td>{isKo ? '문서 길이에 따라 선택' : 'Choose based on document length'}</td></tr>
                  <tr><td>{isKo ? '코드 생성' : 'Code Generation'}</td><td>Pro</td><td>{isKo ? '높은 정확도 필요' : 'High accuracy needed'}</td></tr>
                  <tr><td>{isKo ? '연구 분석' : 'Research Analysis'}</td><td>Pro / Ultra</td><td>{isKo ? '복잡한 추론 필요' : 'Complex reasoning needed'}</td></tr>
                  <tr><td>{isKo ? '데이터 추출' : 'Data Extraction'}</td><td>Flash</td><td>{isKo ? '구조화된 출력에 최적' : 'Optimized for structured output'}</td></tr>
                  <tr><td>{isKo ? '이미지 분석' : 'Image Analysis'}</td><td>Pro</td><td>{isKo ? '정밀한 멀티모달 처리' : 'Precise multimodal processing'}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="guide-section">
            <h1>{isKo ? '가격 정책' : 'Pricing'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini API의 가격은 모델과 사용량에 따라 달라집니다. 무료 티어도 제공되어 학습과 프로토타이핑에 활용할 수 있습니다.'
                : 'Gemini API pricing varies by model and usage. A free tier is also available for learning and prototyping.'}
            </p>

            <TipBox type="important" title={isKo ? '무료 티어' : 'Free Tier'}>
              {isKo
                ? 'Google AI Studio를 통해 Gemini API를 무료로 사용할 수 있습니다. 분당 요청 수(RPM)에 제한이 있지만, 학습과 프로토타이핑에 충분합니다.'
                : 'You can use the Gemini API for free through Google AI Studio. There are limits on requests per minute (RPM), but it is sufficient for learning and prototyping.'}
            </TipBox>

            <h2>{isKo ? '모델별 가격 (유료 티어)' : 'Pricing by Model (Paid Tier)'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '모델' : 'Model'}</th>
                    <th>{isKo ? '입력 (1M 토큰)' : 'Input (1M tokens)'}</th>
                    <th>{isKo ? '출력 (1M 토큰)' : 'Output (1M tokens)'}</th>
                    <th>{isKo ? '무료 RPM' : 'Free RPM'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Gemini 2.0 Flash</td><td>$0.10</td><td>$0.40</td><td>15 RPM</td></tr>
                  <tr><td>Gemini 2.0 Flash-Lite</td><td>$0.075</td><td>$0.30</td><td>30 RPM</td></tr>
                  <tr><td>Gemini 2.5 Flash</td><td>$0.15</td><td>$0.60</td><td>10 RPM</td></tr>
                  <tr><td>Gemini 2.5 Pro</td><td>$1.25</td><td>$10.00</td><td>5 RPM</td></tr>
                </tbody>
              </table>
            </div>

            <TipBox type="tip" title={isKo ? '비용 절감 팁' : 'Cost Saving Tips'}>
              {isKo
                ? '컨텍스트 캐싱을 활용하면 반복되는 시스템 프롬프트나 긴 문서에 대한 비용을 크게 줄일 수 있습니다. 캐시된 입력은 75% 할인된 가격이 적용됩니다.'
                : 'Using context caching can significantly reduce costs for repeated system prompts or long documents. Cached inputs receive a 75% discount.'}
            </TipBox>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? 'Gemini 모델 가이드' : 'Gemini Models Guide'} path="/gemini-models" />
      <div className="guide-layout">
        <aside className="guide-sidebar">
          <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
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
