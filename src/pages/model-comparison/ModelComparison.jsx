import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';

const MODELS = [
  {
    id: 'flash',
    name: 'Gemini Flash',
    icon: 'fa-bolt',
    gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
    versions: ['2.0 Flash', '2.0 Flash-Lite', '2.5 Flash'],
    contextWindow: '1M tokens',
    speed: { label: { ko: '매우 빠름', en: 'Very Fast' }, score: 5 },
    quality: { label: { ko: '좋음', en: 'Good' }, score: 3 },
    cost: { label: { ko: '매우 저렴', en: 'Very Low' }, score: 5 },
    multimodal: true,
    thinking: true,
    codeExec: true,
    functionCalling: true,
    inputPrice: '$0.075 - $0.15',
    outputPrice: '$0.30 - $0.60',
    bestFor: {
      ko: ['실시간 챗봇', '대량 데이터 처리', '빠른 프로토타이핑', '비용 민감한 애플리케이션'],
      en: ['Real-time chatbots', 'Batch data processing', 'Rapid prototyping', 'Cost-sensitive apps'],
    },
  },
  {
    id: 'pro',
    name: 'Gemini Pro',
    icon: 'fa-star',
    gradient: 'linear-gradient(135deg, #EA4335, #FBBC04)',
    versions: ['2.5 Pro'],
    contextWindow: '2M tokens',
    speed: { label: { ko: '보통', en: 'Moderate' }, score: 3 },
    quality: { label: { ko: '매우 높음', en: 'Very High' }, score: 5 },
    cost: { label: { ko: '보통', en: 'Moderate' }, score: 3 },
    multimodal: true,
    thinking: true,
    codeExec: true,
    functionCalling: true,
    inputPrice: '$1.25',
    outputPrice: '$10.00',
    bestFor: {
      ko: ['복잡한 코드 작업', '연구 분석', '고급 추론', '긴 문서 처리'],
      en: ['Complex coding tasks', 'Research analysis', 'Advanced reasoning', 'Long document processing'],
    },
  },
  {
    id: 'ultra',
    name: 'Gemini Ultra',
    icon: 'fa-crown',
    gradient: 'linear-gradient(135deg, #9334E6, #EA4335)',
    versions: ['1.0 Ultra'],
    contextWindow: '128K tokens',
    speed: { label: { ko: '느림', en: 'Slow' }, score: 2 },
    quality: { label: { ko: '최고', en: 'Highest' }, score: 5 },
    cost: { label: { ko: '높음', en: 'High' }, score: 1 },
    multimodal: true,
    thinking: false,
    codeExec: false,
    functionCalling: true,
    inputPrice: 'N/A (Subscription)',
    outputPrice: 'N/A (Subscription)',
    bestFor: {
      ko: ['최고 품질 응답', '전문 분야 분석', '복잡한 추론', '멀티모달 연구'],
      en: ['Highest quality responses', 'Expert domain analysis', 'Complex reasoning', 'Multimodal research'],
    },
  },
];

export default function ModelComparison() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [selectedModels, setSelectedModels] = useState(['flash', 'pro', 'ultra']);

  const toggleModel = (id) => {
    setSelectedModels(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const renderStars = (score) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fa-solid fa-star`}
        style={{ color: i < score ? '#FBBC04' : '#e0e0e0', fontSize: '14px' }}
      />
    ));
  };

  const filteredModels = MODELS.filter(m => selectedModels.includes(m.id));

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? 'Gemini 모델 비교' : 'Gemini Model Comparison'} path="/model-comparison" />
      <div className="guide-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div className="guide-section">
          <h1>{isKo ? 'Gemini 모델 비교' : 'Gemini Model Comparison'}</h1>
          <p className="guide-intro">
            {isKo
              ? 'Gemini 모델 패밀리의 Flash, Pro, Ultra를 비교하여 프로젝트에 가장 적합한 모델을 찾아보세요.'
              : 'Compare Flash, Pro, and Ultra in the Gemini model family to find the best model for your project.'}
          </p>

          {/* Model Filter */}
          <div className="guide-card-grid" style={{ marginBottom: '2rem' }}>
            {MODELS.map(model => (
              <button
                key={model.id}
                className={`guide-card ${selectedModels.includes(model.id) ? '' : 'dimmed'}`}
                onClick={() => toggleModel(model.id)}
                style={{
                  cursor: 'pointer',
                  border: selectedModels.includes(model.id) ? '2px solid #4285F4' : '2px solid transparent',
                  opacity: selectedModels.includes(model.id) ? 1 : 0.5,
                  transition: 'all 0.2s ease',
                }}
              >
                <div className="guide-card-icon" style={{ background: model.gradient }}>
                  <i className={`fa-solid ${model.icon}`} />
                </div>
                <h3>{model.name}</h3>
                <p style={{ fontSize: '0.85rem' }}>
                  {model.versions.join(', ')}
                </p>
                <div style={{ marginTop: '0.5rem' }}>
                  {model.bestFor[isKo ? 'ko' : 'en'].slice(0, 2).map((item, i) => (
                    <span key={i} className="about-hero-badge" style={{ fontSize: '0.75rem', margin: '2px', display: 'inline-block' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Rating Comparison */}
          <h2>{isKo ? '성능 비교' : 'Performance Comparison'}</h2>
          <div className="guide-card-grid">
            {filteredModels.map(model => (
              <div key={model.id} className="guide-card">
                <h4 style={{ marginBottom: '1rem' }}>
                  <i className={`fa-solid ${model.icon}`} style={{ marginRight: '0.5rem' }} />
                  {model.name}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>{isKo ? '속도' : 'Speed'}</div>
                    <div>{renderStars(model.speed.score)} <span style={{ fontSize: '0.85rem', marginLeft: '8px' }}>{model.speed.label[isKo ? 'ko' : 'en']}</span></div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>{isKo ? '품질' : 'Quality'}</div>
                    <div>{renderStars(model.quality.score)} <span style={{ fontSize: '0.85rem', marginLeft: '8px' }}>{model.quality.label[isKo ? 'ko' : 'en']}</span></div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '4px' }}>{isKo ? '비용 효율' : 'Cost Efficiency'}</div>
                    <div>{renderStars(model.cost.score)} <span style={{ fontSize: '0.85rem', marginLeft: '8px' }}>{model.cost.label[isKo ? 'ko' : 'en']}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Comparison Table */}
          <h2>{isKo ? '상세 비교표' : 'Detailed Comparison Table'}</h2>
          <div className="guide-table-wrapper">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>{isKo ? '기능' : 'Feature'}</th>
                  {filteredModels.map(m => (
                    <th key={m.id}>
                      <i className={`fa-solid ${m.icon}`} style={{ marginRight: '6px' }} />
                      {m.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{isKo ? '컨텍스트 윈도우' : 'Context Window'}</td>
                  {filteredModels.map(m => <td key={m.id}>{m.contextWindow}</td>)}
                </tr>
                <tr>
                  <td>{isKo ? '멀티모달' : 'Multimodal'}</td>
                  {filteredModels.map(m => <td key={m.id}>{m.multimodal ? <i className="fa-solid fa-check" style={{ color: '#34A853' }} /> : <i className="fa-solid fa-xmark" style={{ color: '#EA4335' }} />}</td>)}
                </tr>
                <tr>
                  <td>Thinking {isKo ? '모드' : 'Mode'}</td>
                  {filteredModels.map(m => <td key={m.id}>{m.thinking ? <i className="fa-solid fa-check" style={{ color: '#34A853' }} /> : <i className="fa-solid fa-xmark" style={{ color: '#EA4335' }} />}</td>)}
                </tr>
                <tr>
                  <td>{isKo ? '코드 실행' : 'Code Execution'}</td>
                  {filteredModels.map(m => <td key={m.id}>{m.codeExec ? <i className="fa-solid fa-check" style={{ color: '#34A853' }} /> : <i className="fa-solid fa-xmark" style={{ color: '#EA4335' }} />}</td>)}
                </tr>
                <tr>
                  <td>{isKo ? '함수 호출' : 'Function Calling'}</td>
                  {filteredModels.map(m => <td key={m.id}>{m.functionCalling ? <i className="fa-solid fa-check" style={{ color: '#34A853' }} /> : <i className="fa-solid fa-xmark" style={{ color: '#EA4335' }} />}</td>)}
                </tr>
                <tr>
                  <td>{isKo ? '입력 가격 (1M 토큰)' : 'Input Price (1M tokens)'}</td>
                  {filteredModels.map(m => <td key={m.id}>{m.inputPrice}</td>)}
                </tr>
                <tr>
                  <td>{isKo ? '출력 가격 (1M 토큰)' : 'Output Price (1M tokens)'}</td>
                  {filteredModels.map(m => <td key={m.id}>{m.outputPrice}</td>)}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Best Use Cases */}
          <h2>{isKo ? '모델별 추천 사용 사례' : 'Recommended Use Cases by Model'}</h2>
          <div className="guide-card-grid">
            {filteredModels.map(model => (
              <div key={model.id} className="guide-card">
                <div className="guide-card-icon" style={{ background: model.gradient }}>
                  <i className={`fa-solid ${model.icon}`} />
                </div>
                <h3>{model.name}</h3>
                <ul className="guide-list" style={{ textAlign: 'left' }}>
                  {model.bestFor[isKo ? 'ko' : 'en'].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selection Guide */}
          <h2>{isKo ? '빠른 선택 가이드' : 'Quick Selection Guide'}</h2>
          <TipBox type="tip" title={isKo ? '어떤 모델을 선택해야 할까요?' : 'Which model should you choose?'}>
            {isKo ? (
              <div>
                <p><strong>Flash를 선택하세요:</strong> 빠른 응답이 필요하거나, 비용이 중요하거나, 대량 처리가 필요한 경우</p>
                <p><strong>Pro를 선택하세요:</strong> 높은 품질이 필요하거나, 복잡한 추론이 필요하거나, 긴 문서를 처리하는 경우</p>
                <p><strong>Ultra를 선택하세요:</strong> 최고 수준의 성능이 필요하거나, 전문 분야 분석이 필요한 경우</p>
                <p style={{ marginTop: '0.75rem' }}><em>대부분의 경우 Flash로 시작하고, 필요에 따라 Pro로 업그레이드하는 것이 좋습니다.</em></p>
              </div>
            ) : (
              <div>
                <p><strong>Choose Flash:</strong> When you need fast responses, cost matters, or batch processing is needed</p>
                <p><strong>Choose Pro:</strong> When you need high quality, complex reasoning, or long document processing</p>
                <p><strong>Choose Ultra:</strong> When you need the highest performance or expert domain analysis</p>
                <p style={{ marginTop: '0.75rem' }}><em>In most cases, start with Flash and upgrade to Pro as needed.</em></p>
              </div>
            )}
          </TipBox>

          {/* Benchmark Scores */}
          <h2>{isKo ? '벤치마크 비교' : 'Benchmark Comparison'}</h2>
          <div className="guide-table-wrapper">
            <table className="guide-table">
              <thead>
                <tr>
                  <th>{isKo ? '벤치마크' : 'Benchmark'}</th>
                  <th>{isKo ? '설명' : 'Description'}</th>
                  {filteredModels.map(m => (
                    <th key={m.id}>{m.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MMLU</td>
                  <td>{isKo ? '다학제 지식' : 'Multidisciplinary'}</td>
                  {filteredModels.map(m => (
                    <td key={m.id}>{m.id === 'flash' ? '78.7%' : m.id === 'pro' ? '90.0%' : '90.0%+'}</td>
                  ))}
                </tr>
                <tr>
                  <td>HumanEval</td>
                  <td>{isKo ? '코드 생성' : 'Code Generation'}</td>
                  {filteredModels.map(m => (
                    <td key={m.id}>{m.id === 'flash' ? '71.5%' : m.id === 'pro' ? '84.1%' : '74.4%'}</td>
                  ))}
                </tr>
                <tr>
                  <td>MATH</td>
                  <td>{isKo ? '수학 추론' : 'Math Reasoning'}</td>
                  {filteredModels.map(m => (
                    <td key={m.id}>{m.id === 'flash' ? '73.1%' : m.id === 'pro' ? '91.2%' : '94.4%'}</td>
                  ))}
                </tr>
                <tr>
                  <td>MMMU</td>
                  <td>{isKo ? '멀티모달 이해' : 'Multimodal Understanding'}</td>
                  {filteredModels.map(m => (
                    <td key={m.id}>{m.id === 'flash' ? '62.5%' : m.id === 'pro' ? '68.3%' : '59.4%'}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox type="important" title={isKo ? '벤치마크 참고사항' : 'Benchmark Notes'}>
            {isKo
              ? '벤치마크 점수는 참고용이며, 실제 사용 사례에서의 성능과 다를 수 있습니다. 모델 버전에 따라 점수가 다를 수 있으며, 최신 정보는 Google AI 공식 문서를 확인하세요.'
              : 'Benchmark scores are for reference and may differ from real-world performance. Scores may vary by model version. Check Google AI official documentation for the latest information.'}
          </TipBox>
        </div>
      </div>
    </div>
  );
}
