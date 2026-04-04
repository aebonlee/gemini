import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LEARNING_PATHS } from '../config/site';
import SEOHead from '../components/SEOHead';
import HeroBackground from '../components/HeroBackground';
import HeroCarousel from '../components/HeroCarousel';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  const carouselSlides = [
    {
      title: isKo ? 'Gemini 모델 패밀리 완벽 가이드' : 'Complete Guide to Gemini Model Family',
      description: isKo
        ? 'Flash, Pro, Ultra 모델의 특징과 성능을 비교하고, 용도에 맞는 최적의 모델을 선택하는 방법을 배웁니다.'
        : 'Compare Flash, Pro, and Ultra model features and learn to choose the optimal model for your use case.',
    },
    {
      title: isKo ? 'Gemini API로 앱 개발' : 'Build Apps with Gemini API',
      description: isKo
        ? 'REST API, Python/Node.js SDK, Streaming, Function Calling 등 API 활용법을 실전 예제와 함께 학습합니다.'
        : 'Learn REST API, Python/Node.js SDK, Streaming, Function Calling with practical examples.',
    },
    {
      title: isKo ? '멀티모달 AI의 힘을 경험하세요' : 'Experience the Power of Multimodal AI',
      description: isKo
        ? '텍스트, 이미지, 오디오, 비디오를 하나의 모델로 처리하는 Gemini의 멀티모달 기능을 마스터합니다.'
        : 'Master Gemini\'s multimodal capabilities processing text, image, audio, and video in one model.',
    },
  ];

  return (
    <>
      <SEOHead path="/" />

      <section className="hero">
        <HeroBackground />
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fa-solid fa-gem" />
            {t('hero.badge')}
          </div>
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <Link to="/gemini-models" className="btn btn-primary-large">{t('hero.cta')}</Link>
            <Link to="/about" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              {t('hero.ctaSecondary')}
            </Link>
          </div>
          <HeroCarousel slides={carouselSlides} />
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>
          <div className="features-grid">
            <FeatureCard icon="fa-gem" title={t('features.geminiModels.title')} description={t('features.geminiModels.desc')} />
            <FeatureCard icon="fa-wand-magic-sparkles" title={t('features.promptEng.title')} description={t('features.promptEng.desc')} />
            <FeatureCard icon="fa-code" title={t('features.apiDev.title')} description={t('features.apiDev.desc')} />
            <FeatureCard icon="fa-users" title={t('features.community.title')} description={t('features.community.desc')} />
          </div>
        </div>
      </section>

      <section className="paths-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.pathsTitle')}</h2>
            <p className="section-subtitle">{t('home.pathsSubtitle')}</p>
          </div>
          <div className="paths-grid">
            {LEARNING_PATHS.map(path => (
              <Link key={path.id} to={path.path} className="path-card">
                <div className="path-card-header">
                  <div className="path-icon" style={{ background: path.color }}>
                    <i className={`fa-solid ${path.icon}`} />
                  </div>
                  <h3 className="path-name">{isKo ? path.nameKo : path.nameEn}</h3>
                </div>
                <p className="path-desc">{isKo ? path.descKo : path.descEn}</p>
                <div className="path-topics">
                  {path.topics.map((topic, i) => (
                    <span key={i} className="path-topic">{topic}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">{t('stats.guides')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">{t('stats.topics')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">{t('stats.categories')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.workflowTitle')}</h2>
            <p className="section-subtitle">{t('home.workflowSubtitle')}</p>
          </div>
          <div className="workflow-grid">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="workflow-step">
                <div className="workflow-number">{n}</div>
                <h3 className="workflow-title">{t(`home.step${n}`)}</h3>
                <p className="workflow-desc">{t(`home.step${n}desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-description">{t('cta.description')}</p>
          <Link to="/gemini-models" className="btn btn-primary-large">{t('cta.button')}</Link>
        </div>
      </section>
    </>
  );
}
