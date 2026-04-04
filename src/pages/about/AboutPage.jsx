import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function AboutPage() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="about-page">
      <SEOHead title={isKo ? 'Gemini Master 소개' : 'About Gemini Master'} path="/about" />

      {/* Hero */}
      <section className="about-hero-section">
        <div className="about-hero-bg" />
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <i className="fa-solid fa-gem" />
              {isKo ? 'Google Gemini AI 학습 플랫폼' : 'Google Gemini AI Learning Platform'}
            </div>
            <h1 className="about-hero-title">
              {isKo ? 'Gemini AI의 모든 것을 ' : 'Master Everything About '}
              <span className="about-hero-highlight">{isKo ? '한 곳에서' : 'Gemini AI'}</span>
            </h1>
            <p className="about-hero-desc">
              {isKo
                ? 'Gemini Master는 Google Gemini AI의 모든 기능을 체계적으로 학습할 수 있는 종합 플랫폼입니다. Flash, Pro, Ultra 모델부터 API, Google AI Studio, Vertex AI까지 한 곳에서 학습하세요.'
                : 'Gemini Master is a comprehensive platform for systematically learning all features of Google Gemini AI. From Flash, Pro, Ultra models to API, Google AI Studio, and Vertex AI — all in one place.'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="about-vision-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '핵심 비전' : 'Core Vision'}</h2>
            <p className="section-subtitle">{isKo ? 'Gemini Master가 추구하는 가치' : 'Values that Gemini Master pursues'}</p>
          </div>
          <div className="about-vision-grid">
            {[
              { icon: 'fa-book-open', title: isKo ? '체계적 학습' : 'Systematic Learning', desc: isKo ? 'Gemini AI의 모든 기능을 단계별로 체계적으로 학습할 수 있습니다.' : 'Learn all Gemini AI features step by step systematically.' },
              { icon: 'fa-laptop-code', title: isKo ? '실전 중심' : 'Practice-Focused', desc: isKo ? 'API 예제, 프롬프트 실습 등 실전 프로젝트를 통해 역량을 키웁니다.' : 'Build skills through API examples, prompt practice, and real projects.' },
              { icon: 'fa-people-group', title: isKo ? '함께 성장' : 'Grow Together', desc: isKo ? '커뮤니티에서 경험을 공유하고 함께 성장합니다.' : 'Share experiences and grow together in the community.' },
            ].map((v, i) => (
              <div key={i} className="about-vision-card">
                <div className="about-vision-icon"><i className={`fa-solid ${v.icon}`} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '팀 소개' : 'Our Team'}</h2>
          </div>
          <div className="about-team-grid">
            <div className="about-team-card">
              <div className="about-team-avatar" style={{ background: 'linear-gradient(135deg, #4285F4, #EA4335)' }}>A</div>
              <div className="about-team-name">{isKo ? '이애본' : 'Aebon Lee'}</div>
              <div className="about-team-role">{isKo ? '대표이사 / 개발자' : 'CEO / Developer'}</div>
              <p className="about-team-desc">{isKo ? 'AI 교육 및 개발 전문가. DreamIT Biz 대표이사.' : 'AI education and development expert. CEO of DreamIT Biz.'}</p>
            </div>
            <div className="about-team-card">
              <div className="about-team-avatar" style={{ background: 'linear-gradient(135deg, #34A853, #FBBC04)' }}>G</div>
              <div className="about-team-name">Gemini AI</div>
              <div className="about-team-role">{isKo ? 'AI 어시스턴트' : 'AI Assistant'}</div>
              <p className="about-team-desc">{isKo ? 'Google의 최첨단 멀티모달 AI 모델.' : 'Google\'s cutting-edge multimodal AI model.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '개발 타임라인' : 'Development Timeline'}</h2>
            <p className="section-subtitle">{isKo ? 'Gemini Master의 주요 마일스톤' : 'Key milestones of Gemini Master'}</p>
          </div>
          <div className="about-timeline">
            {[
              { date: '2024.12', title: isKo ? 'Gemini 2.0 출시' : 'Gemini 2.0 Launch', desc: isKo ? 'Google이 Gemini 2.0 Flash를 발표하며 새로운 AI 시대를 열었습니다.' : 'Google announced Gemini 2.0 Flash, opening a new era of AI.', icon: 'fa-rocket' },
              { date: '2025.01', title: isKo ? '프로젝트 기획' : 'Project Planning', desc: isKo ? 'Gemini Master 플랫폼의 기획 및 설계를 시작했습니다.' : 'Started planning and designing the Gemini Master platform.', icon: 'fa-lightbulb' },
              { date: '2025.02', title: isKo ? '개발 시작' : 'Development Start', desc: isKo ? 'React + Vite 기반으로 프론트엔드 개발을 시작했습니다.' : 'Started frontend development based on React + Vite.', icon: 'fa-code' },
              { date: '2025.03', title: isKo ? '베타 출시' : 'Beta Launch', desc: isKo ? '핵심 학습 콘텐츠와 가이드 페이지를 포함한 베타 버전을 출시했습니다.' : 'Launched beta version with core learning content and guide pages.', icon: 'fa-flag-checkered' },
              { date: '2025.04', title: isKo ? '커뮤니티 오픈' : 'Community Open', desc: isKo ? '사용자 커뮤니티를 오픈하고 협업 학습 기능을 추가했습니다.' : 'Opened user community and added collaborative learning features.', icon: 'fa-users' },
              { date: '2026.Q2', title: isKo ? '정식 출시' : 'Official Launch', desc: isKo ? '전체 기능을 갖춘 정식 버전 출시 예정입니다.' : 'Full-featured official version launch planned.', icon: 'fa-star' },
            ].map((item, i) => (
              <div key={i} className="about-timeline-item">
                <div className="about-timeline-marker">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <div className="about-timeline-content">
                  <div className="about-timeline-date">{item.date}</div>
                  <h3 className="about-timeline-title">{item.title}</h3>
                  <p className="about-timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-tech-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '기술 스택' : 'Tech Stack'}</h2>
          </div>
          <div className="about-tech-detail-grid">
            {[
              { icon: 'fa-brands fa-react', name: 'React 19', desc: 'UI Framework', color: '#61DAFB' },
              { icon: 'fa-solid fa-bolt', name: 'Vite 6', desc: 'Build Tool', color: '#646CFF' },
              { icon: 'fa-solid fa-database', name: 'Supabase', desc: 'Backend', color: '#3ECF8E' },
              { icon: 'fa-brands fa-github', name: 'GitHub Pages', desc: 'Hosting', color: '#333' },
              { icon: 'fa-solid fa-palette', name: 'Custom CSS', desc: 'Design System', color: '#4285F4' },
              { icon: 'fa-solid fa-language', name: 'i18n', desc: 'KO/EN Support', color: '#FF6D00' },
            ].map((t, i) => (
              <div key={i} className="about-tech-detail-card">
                <i className={t.icon} style={{ color: t.color }} />
                <div>
                  <div className="about-tech-name">{t.name}</div>
                  <div className="about-tech-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">FAQ</h2>
          </div>
          <div className="about-faq-list">
            {[
              { q: isKo ? 'Gemini Master는 무료인가요?' : 'Is Gemini Master free?', a: isKo ? '네, 모든 학습 콘텐츠는 무료로 제공됩니다.' : 'Yes, all learning content is provided for free.' },
              { q: isKo ? 'Gemini API 키가 필요한가요?' : 'Do I need a Gemini API key?', a: isKo ? '학습 콘텐츠는 키 없이 이용 가능합니다. API 실습 시에는 Google AI Studio에서 무료 키를 발급받을 수 있습니다.' : 'Learning content is available without a key. For API practice, you can get a free key from Google AI Studio.' },
              { q: isKo ? '어떤 Gemini 모델을 다루나요?' : 'Which Gemini models are covered?', a: isKo ? 'Flash, Pro, Ultra를 포함한 전체 Gemini 모델 패밀리를 다룹니다.' : 'We cover the entire Gemini model family including Flash, Pro, and Ultra.' },
              { q: isKo ? '프로그래밍 경험이 필요한가요?' : 'Do I need programming experience?', a: isKo ? '기본 개념은 누구나 학습 가능합니다. API 가이드는 기초적인 프로그래밍 지식이 있으면 더 효과적입니다.' : 'Basic concepts are accessible to everyone. API guides are more effective with basic programming knowledge.' },
            ].map((faq, i) => (
              <details key={i} className="about-faq-item">
                <summary className="about-faq-question">
                  <i className="fa-solid fa-circle-question" />
                  {faq.q}
                  <i className="fa-solid fa-chevron-down about-faq-chevron" />
                </summary>
                <div className="about-faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">{isKo ? 'Gemini AI 학습을 시작하세요' : 'Start Learning Gemini AI'}</h2>
            <p className="about-cta-desc">{isKo ? 'Google Gemini AI의 모든 기능을 체계적으로 학습하고 실무에 활용하세요.' : 'Systematically learn all Google Gemini AI features and apply them in practice.'}</p>
            <div className="about-cta-actions">
              <Link to="/gemini-models" className="btn btn-primary-large">{isKo ? '학습 시작하기' : 'Start Learning'}</Link>
              <Link to="/community/board" className="btn-ghost-light">{isKo ? '커뮤니티 참여' : 'Join Community'}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
