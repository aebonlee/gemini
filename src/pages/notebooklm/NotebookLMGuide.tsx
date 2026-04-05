import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';

const SECTIONS = [
  { id: 'overview', icon: 'fa-circle-info', ko: '개요', en: 'Overview' },
  { id: 'getting-started', icon: 'fa-rocket', ko: '시작하기', en: 'Getting Started' },
  { id: 'sources', icon: 'fa-folder-open', ko: '소스 관리', en: 'Source Management' },
  { id: 'features', icon: 'fa-star', ko: '핵심 기능', en: 'Core Features' },
  { id: 'audio-overview', icon: 'fa-headphones', ko: '오디오 오버뷰', en: 'Audio Overview' },
  { id: 'collaboration', icon: 'fa-users', ko: '협업 활용', en: 'Collaboration' },
  { id: 'use-cases', icon: 'fa-lightbulb', ko: '활용 사례', en: 'Use Cases' },
  { id: 'tips', icon: 'fa-wand-magic-sparkles', ko: '팁 & 베스트 프랙티스', en: 'Tips & Best Practices' },
];

export default function NotebookLMGuide() {
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
            <h1>{isKo ? 'NotebookLM 개요' : 'NotebookLM Overview'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'NotebookLM은 Google이 만든 AI 기반 리서치 및 노트 작성 어시스턴트입니다. 업로드한 소스 문서에 기반하여 정확한 답변을 제공하는 것이 핵심 특징이며, Gemini 2.5 Pro 모델을 기반으로 동작합니다.'
                : 'NotebookLM is Google\'s AI-powered research and note-taking assistant. Its key feature is providing accurate, source-grounded responses based on your uploaded documents, powered by the Gemini 2.5 Pro model.'}
            </p>

            <div className="guide-card-grid">
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}>
                  <i className="fa-solid fa-book-open" />
                </div>
                <h3>{isKo ? '소스 기반 응답' : 'Source-Grounded Responses'}</h3>
                <p>{isKo ? '업로드한 문서에 기반한 답변만 제공하여 환각(hallucination)을 최소화합니다.' : 'Provides answers only based on uploaded documents, minimizing hallucination.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #EA4335, #FBBC04)' }}>
                  <i className="fa-solid fa-microphone" />
                </div>
                <h3>{isKo ? '오디오 오버뷰' : 'Audio Overview'}</h3>
                <p>{isKo ? 'AI 호스트가 소스 내용을 팟캐스트 형식으로 토론하는 오디오를 생성합니다.' : 'Generates podcast-style audio where AI hosts discuss your source content.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #34A853, #4285F4)' }}>
                  <i className="fa-solid fa-gift" />
                </div>
                <h3>{isKo ? '무료 사용' : 'Free to Use'}</h3>
                <p>{isKo ? 'notebooklm.google.com에서 Google 계정만 있으면 무료로 사용할 수 있습니다.' : 'Free to use at notebooklm.google.com with just a Google account.'}</p>
              </div>
            </div>

            <h2>{isKo ? 'NotebookLM vs ChatGPT vs Perplexity 비교' : 'NotebookLM vs ChatGPT vs Perplexity'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '기능' : 'Feature'}</th>
                    <th>NotebookLM</th>
                    <th>ChatGPT</th>
                    <th>Perplexity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{isKo ? '소스 기반 응답' : 'Source-grounded'}</td>
                    <td>{isKo ? '예' : 'Yes'}</td>
                    <td>{isKo ? '아니오' : 'No'}</td>
                    <td>{isKo ? '부분적' : 'Partial'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '최대 소스 수' : 'Max sources'}</td>
                    <td>300</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '오디오 생성' : 'Audio generation'}</td>
                    <td>{isKo ? '예' : 'Yes'}</td>
                    <td>{isKo ? '아니오' : 'No'}</td>
                    <td>{isKo ? '아니오' : 'No'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '무료 제공' : 'Free tier'}</td>
                    <td>{isKo ? '예' : 'Yes'}</td>
                    <td>{isKo ? '제한적' : 'Limited'}</td>
                    <td>{isKo ? '제한적' : 'Limited'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '환각 위험' : 'Hallucination risk'}</td>
                    <td>{isKo ? '매우 낮음' : 'Very low'}</td>
                    <td>{isKo ? '중간' : 'Medium'}</td>
                    <td>{isKo ? '낮음' : 'Low'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <TipBox type="tip" title={isKo ? 'NotebookLM의 핵심 강점' : 'NotebookLM\'s Key Strength'}>
              {isKo
                ? 'NotebookLM의 가장 큰 장점은 소스 기반 응답입니다. 업로드한 문서에만 기반하여 답변하기 때문에 환각(hallucination) 위험이 매우 낮고, 모든 답변에 인라인 인용이 포함됩니다.'
                : 'NotebookLM\'s greatest advantage is source-grounded responses. Since it only answers based on uploaded documents, the risk of hallucination is very low, and all answers include inline citations.'}
            </TipBox>
          </div>
        );

      case 'getting-started':
        return (
          <div className="guide-section">
            <h1>{isKo ? 'NotebookLM 시작하기' : 'Getting Started with NotebookLM'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'NotebookLM을 시작하는 방법은 매우 간단합니다. 아래 단계를 따라 첫 번째 노트북을 만들어 보세요.'
                : 'Getting started with NotebookLM is very simple. Follow the steps below to create your first notebook.'}
            </p>

            <h2>{isKo ? '시작 단계' : 'Steps to Get Started'}</h2>
            <ol className="guide-list">
              <li>
                <strong>{isKo ? '1단계: 접속하기' : 'Step 1: Access NotebookLM'}</strong>
                <p>{isKo ? 'notebooklm.google.com에 접속하여 Google 계정으로 로그인합니다.' : 'Go to notebooklm.google.com and sign in with your Google account.'}</p>
              </li>
              <li>
                <strong>{isKo ? '2단계: 노트북 만들기' : 'Step 2: Create a Notebook'}</strong>
                <p>{isKo ? '"새 노트북" 버튼을 클릭하여 새로운 노트북을 생성합니다.' : 'Click the "New Notebook" button to create a new notebook.'}</p>
              </li>
              <li>
                <strong>{isKo ? '3단계: 소스 업로드' : 'Step 3: Upload Sources'}</strong>
                <p>{isKo ? 'PDF, Google Docs, 웹사이트 URL, YouTube 링크 등 다양한 소스를 업로드합니다.' : 'Upload various sources such as PDFs, Google Docs, website URLs, YouTube links, and more.'}</p>
              </li>
              <li>
                <strong>{isKo ? '4단계: 질문하기' : 'Step 4: Start Asking Questions'}</strong>
                <p>{isKo ? '채팅창에 소스에 대한 질문을 입력하면 AI가 소스에 기반한 답변을 제공합니다.' : 'Type questions about your sources in the chat, and the AI will provide source-grounded answers.'}</p>
              </li>
            </ol>

            <h2>{isKo ? '지원되는 소스 유형' : 'Supported Source Types'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '유형' : 'Type'}</th>
                    <th>{isKo ? '형식' : 'Formats'}</th>
                    <th>{isKo ? '최대 크기' : 'Max Size'}</th>
                    <th>{isKo ? '비고' : 'Notes'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{isKo ? '문서' : 'Documents'}</td>
                    <td>PDF, TXT, Markdown</td>
                    <td>{isKo ? '50만 단어' : '500K words'}</td>
                    <td>{isKo ? '가장 일반적인 소스 유형' : 'Most common source type'}</td>
                  </tr>
                  <tr>
                    <td>URL</td>
                    <td>{isKo ? '웹 페이지' : 'Web pages'}</td>
                    <td>-</td>
                    <td>{isKo ? '콘텐츠 자동 추출' : 'Auto-extracts content'}</td>
                  </tr>
                  <tr>
                    <td>Google Docs</td>
                    <td>Google Docs</td>
                    <td>-</td>
                    <td>{isKo ? '직접 연동' : 'Direct integration'}</td>
                  </tr>
                  <tr>
                    <td>Google Slides</td>
                    <td>Google Slides</td>
                    <td>-</td>
                    <td>{isKo ? '슬라이드 콘텐츠 분석' : 'Analyzes slide content'}</td>
                  </tr>
                  <tr>
                    <td>YouTube</td>
                    <td>YouTube URL</td>
                    <td>-</td>
                    <td>{isKo ? '오디오 자동 전사' : 'Transcribes audio'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '오디오' : 'Audio'}</td>
                    <td>MP3, WAV</td>
                    <td>-</td>
                    <td>{isKo ? '전사 + 분석' : 'Transcription + analysis'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <TipBox type="important" title={isKo ? '소스 제한 사항' : 'Source Limitations'}>
              {isKo
                ? '노트북당 최대 300개의 소스를 추가할 수 있으며, 각 소스의 최대 크기는 25MB입니다. 최적의 성능을 위해 관련성 높은 소스만 추가하는 것을 권장합니다.'
                : 'You can add up to 300 sources per notebook, with a maximum size of 25MB per source. For optimal performance, it\'s recommended to add only highly relevant sources.'}
            </TipBox>
          </div>
        );

      case 'sources':
        return (
          <div className="guide-section">
            <h1>{isKo ? '소스 관리' : 'Source Management'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'NotebookLM의 핵심은 소스 관리입니다. 소스를 효과적으로 추가하고 관리하면 더 정확한 AI 응답을 받을 수 있습니다.'
                : 'Source management is at the core of NotebookLM. Effectively adding and managing sources leads to more accurate AI responses.'}
            </p>

            <h2>{isKo ? '소스 추가하기' : 'Adding Sources'}</h2>
            <ol className="guide-list">
              <li><strong>{isKo ? '파일 업로드' : 'File Upload'}</strong> — {isKo ? 'PDF, TXT, Markdown 파일을 직접 드래그 앤 드롭하거나 업로드 버튼으로 추가합니다.' : 'Drag and drop or use the upload button to add PDF, TXT, or Markdown files.'}</li>
              <li><strong>{isKo ? 'URL 붙여넣기' : 'Paste URL'}</strong> — {isKo ? '웹 페이지 URL을 입력하면 콘텐츠가 자동으로 추출됩니다.' : 'Enter a web page URL and content will be automatically extracted.'}</li>
              <li><strong>{isKo ? 'Google Drive 연결' : 'Connect Google Drive'}</strong> — {isKo ? 'Google Docs나 Google Slides를 직접 연결합니다.' : 'Directly connect Google Docs or Google Slides.'}</li>
              <li><strong>{isKo ? 'YouTube 링크' : 'YouTube Link'}</strong> — {isKo ? 'YouTube 동영상 URL을 추가하면 자막이 자동으로 전사됩니다.' : 'Add a YouTube video URL to automatically transcribe captions.'}</li>
              <li><strong>{isKo ? '텍스트 직접 입력' : 'Paste Text'}</strong> — {isKo ? '복사한 텍스트를 직접 붙여넣어 소스로 추가할 수 있습니다.' : 'Paste copied text directly to add it as a source.'}</li>
            </ol>

            <h2>{isKo ? '소스 인용 기능' : 'Source Citation Feature'}</h2>
            <p>
              {isKo
                ? 'NotebookLM의 모든 응답에는 인라인 인용이 포함됩니다. 각 답변 옆에 숫자가 표시되며, 클릭하면 해당 소스의 원문으로 바로 이동할 수 있습니다. 이를 통해 AI 응답의 정확성을 쉽게 검증할 수 있습니다.'
                : 'All NotebookLM responses include inline citations. Numbers appear next to each answer, and clicking them takes you directly to the original source text. This makes it easy to verify the accuracy of AI responses.'}
            </p>

            <h2>{isKo ? '소스 가이드 기능' : 'Source Guide Feature'}</h2>
            <p>
              {isKo
                ? 'NotebookLM은 업로드된 소스를 분석하여 자동으로 소스 가이드를 생성합니다. 이 가이드에는 소스의 핵심 주제, 주요 내용 요약, 그리고 추천 질문이 포함됩니다.'
                : 'NotebookLM analyzes uploaded sources and automatically generates a source guide. This guide includes key topics, content summaries, and suggested questions.'}
            </p>

            <h2>{isKo ? '소스 정리 방법' : 'Organizing Sources'}</h2>
            <ul className="guide-list">
              <li>{isKo ? '관련 없는 소스를 삭제하여 응답 품질을 높입니다.' : 'Remove irrelevant sources to improve response quality.'}</li>
              <li>{isKo ? '특정 소스만 선택하여 질문에 포커스를 맞출 수 있습니다.' : 'Select specific sources to focus your questions.'}</li>
              <li>{isKo ? '소스 이름을 변경하여 쉽게 식별할 수 있습니다.' : 'Rename sources for easy identification.'}</li>
            </ul>

            <TipBox type="tip" title={isKo ? '소스 관리 팁' : 'Source Management Tip'}>
              {isKo
                ? '노트북당 하나의 주제에 집중하세요. 여러 주제를 혼합하면 AI의 응답 정확도가 떨어질 수 있습니다. 주제별로 별도의 노트북을 만드는 것이 더 효과적입니다.'
                : 'Keep sources focused on one topic per notebook. Mixing multiple topics can reduce AI response accuracy. Creating separate notebooks per topic is more effective.'}
            </TipBox>
          </div>
        );

      case 'features':
        return (
          <div className="guide-section">
            <h1>{isKo ? 'NotebookLM 핵심 기능' : 'NotebookLM Core Features'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'NotebookLM은 단순한 채팅 이상의 다양한 기능을 제공합니다. 소스를 기반으로 학습 가이드, 타임라인, 브리핑 문서 등을 자동으로 생성할 수 있습니다.'
                : 'NotebookLM offers much more than simple chat. It can automatically generate study guides, timelines, briefing documents, and more from your sources.'}
            </p>

            <h2>{isKo ? '주요 기능 개요' : 'Feature Overview'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '기능' : 'Feature'}</th>
                    <th>{isKo ? '설명' : 'Description'}</th>
                    <th>{isKo ? '최적 활용' : 'Best For'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{isKo ? '채팅' : 'Chat'}</td>
                    <td>{isKo ? '소스에 대해 질문하고 답변 받기' : 'Ask questions about sources'}</td>
                    <td>{isKo ? '리서치, 학습' : 'Research, studying'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '노트' : 'Notes'}</td>
                    <td>{isKo ? '노트 작성 및 고정' : 'Create and pin notes'}</td>
                    <td>{isKo ? '인사이트 정리' : 'Organizing insights'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '오디오 오버뷰' : 'Audio Overview'}</td>
                    <td>{isKo ? '팟캐스트 스타일 오디오 생성' : 'Generate podcast-style audio'}</td>
                    <td>{isKo ? '이동 중 학습' : 'Learning on the go'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '학습 가이드' : 'Study Guide'}</td>
                    <td>{isKo ? '학습 자료 자동 생성' : 'Auto-generate study materials'}</td>
                    <td>{isKo ? '시험 준비' : 'Exam preparation'}</td>
                  </tr>
                  <tr>
                    <td>FAQ</td>
                    <td>{isKo ? '소스에서 FAQ 자동 생성' : 'Generate FAQs from sources'}</td>
                    <td>{isKo ? '빠른 참조' : 'Quick reference'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '타임라인' : 'Timeline'}</td>
                    <td>{isKo ? '이벤트 타임라인 생성' : 'Create event timelines'}</td>
                    <td>{isKo ? '역사적 분석' : 'Historical analysis'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '브리핑 문서' : 'Briefing Doc'}</td>
                    <td>{isKo ? '핵심 요약 문서 생성' : 'Executive summary generation'}</td>
                    <td>{isKo ? '비즈니스 미팅' : 'Business meetings'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? '소스와 채팅하기' : 'Chat with Sources'}</h2>
            <p>
              {isKo
                ? 'NotebookLM의 채팅 기능은 업로드된 소스에 대해 자연어로 질문할 수 있게 해줍니다. AI는 소스 내용에 기반하여 답변하며, 모든 응답에 인용이 포함됩니다.'
                : 'NotebookLM\'s chat feature lets you ask natural language questions about uploaded sources. The AI answers based on source content, and all responses include citations.'}
            </p>

            <h2>{isKo ? '추천 질문' : 'Suggested Questions'}</h2>
            <p>
              {isKo
                ? '소스를 업로드하면 NotebookLM이 자동으로 추천 질문을 생성합니다. 이 질문들은 소스의 핵심 내용을 파악하는 데 도움이 됩니다.'
                : 'When you upload sources, NotebookLM automatically generates suggested questions. These questions help you understand the key content of your sources.'}
            </p>

            <h2>{isKo ? '노트 작성 및 고정' : 'Note-Taking and Pinning'}</h2>
            <p>
              {isKo
                ? 'AI 응답 중 중요한 내용을 노트로 저장할 수 있습니다. 저장된 노트는 나중에 참고하거나, 다른 노트와 결합하여 새로운 문서를 만들 수 있습니다.'
                : 'You can save important AI responses as notes. Saved notes can be referenced later or combined with other notes to create new documents.'}
            </p>

            <h2>{isKo ? '자동 생성 기능' : 'Auto-Generation Features'}</h2>
            <div className="guide-card-grid">
              <div className="guide-card">
                <h4><i className="fa-solid fa-graduation-cap" style={{ color: '#4285F4' }} /> {isKo ? '학습 가이드' : 'Study Guide'}</h4>
                <p>{isKo ? '소스에서 핵심 개념, 용어, 퀴즈를 자동으로 추출하여 학습 자료를 생성합니다.' : 'Automatically extracts key concepts, terms, and quizzes from sources to generate study materials.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-clock-rotate-left" style={{ color: '#EA4335' }} /> {isKo ? '타임라인' : 'Timeline'}</h4>
                <p>{isKo ? '소스에서 날짜와 이벤트를 추출하여 시간순으로 정리합니다.' : 'Extracts dates and events from sources and organizes them chronologically.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-file-lines" style={{ color: '#34A853' }} /> {isKo ? '브리핑 문서' : 'Briefing Document'}</h4>
                <p>{isKo ? '소스의 핵심 내용을 요약한 실행 요약(Executive Summary)을 생성합니다.' : 'Generates an executive summary of the key content from your sources.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-list" style={{ color: '#FBBC04' }} /> {isKo ? '목차 & FAQ' : 'Table of Contents & FAQ'}</h4>
                <p>{isKo ? '소스 내용을 기반으로 목차와 자주 묻는 질문을 자동 생성합니다.' : 'Automatically generates a table of contents and FAQ based on source content.'}</p>
              </div>
            </div>
          </div>
        );

      case 'audio-overview':
        return (
          <div className="guide-section">
            <h1>{isKo ? '오디오 오버뷰' : 'Audio Overview'}</h1>
            <p className="guide-intro">
              {isKo
                ? '오디오 오버뷰는 NotebookLM의 가장 혁신적인 기능 중 하나입니다. 두 명의 AI 호스트가 업로드된 소스에 대해 자연스럽게 토론하는 팟캐스트 스타일의 오디오를 생성합니다.'
                : 'Audio Overview is one of NotebookLM\'s most innovative features. It generates podcast-style audio where two AI hosts naturally discuss your uploaded sources.'}
            </p>

            <h2>{isKo ? '오디오 오버뷰란?' : 'What is Audio Overview?'}</h2>
            <ul className="guide-list">
              <li>{isKo ? '두 명의 AI 호스트가 소스 내용에 대해 대화 형식으로 설명합니다.' : 'Two AI hosts explain source content in a conversational format.'}</li>
              <li>{isKo ? '복잡한 주제도 쉽고 자연스럽게 풀어서 설명합니다.' : 'Even complex topics are explained in an easy and natural way.'}</li>
              <li>{isKo ? '일반적으로 5~15분 길이의 오디오가 생성됩니다.' : 'Typically generates audio that is 5-15 minutes long.'}</li>
              <li>{isKo ? '다양한 언어를 지원합니다.' : 'Supports multiple languages.'}</li>
            </ul>

            <h2>{isKo ? '대화 초점 맞추기' : 'Customizing the Conversation'}</h2>
            <p>
              {isKo
                ? '오디오 오버뷰를 생성할 때 대화의 초점을 가이드할 수 있습니다. 특정 주제나 관점에 집중하도록 지시하면 해당 내용에 대해 더 깊이 있는 토론이 이루어집니다.'
                : 'When generating an Audio Overview, you can guide the conversation focus. Instructing it to focus on specific topics or perspectives results in deeper discussions on that content.'}
            </p>

            <h2>{isKo ? '인터랙티브 모드' : 'Interactive Mode'}</h2>
            <p>
              {isKo
                ? '인터랙티브 모드에서는 오디오 오버뷰 대화에 실시간으로 참여할 수 있습니다. AI 호스트에게 질문을 하거나, 특정 주제에 대해 더 깊이 논의해 달라고 요청할 수 있습니다.'
                : 'In Interactive mode, you can join the Audio Overview conversation in real-time. You can ask the AI hosts questions or request them to discuss specific topics in more depth.'}
            </p>

            <h2>{isKo ? '오디오 오버뷰 활용법' : 'How to Use Audio Overview'}</h2>
            <div className="guide-card-grid">
              <div className="guide-card">
                <h4><i className="fa-solid fa-car" style={{ color: '#4285F4' }} /> {isKo ? '이동 중 학습' : 'Learning on the Go'}</h4>
                <p>{isKo ? '출퇴근길이나 운동 중에 소스 내용을 오디오로 학습합니다.' : 'Learn source content via audio during commutes or workouts.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-brain" style={{ color: '#EA4335' }} /> {isKo ? '복잡한 주제 이해' : 'Understanding Complex Topics'}</h4>
                <p>{isKo ? '읽기 어려운 내용을 대화 형식으로 더 쉽게 이해합니다.' : 'Understand difficult content more easily through conversational format.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-share-nodes" style={{ color: '#34A853' }} /> {isKo ? '콘텐츠 공유' : 'Content Sharing'}</h4>
                <p>{isKo ? '생성된 오디오를 동료나 학생과 공유하여 지식을 전달합니다.' : 'Share generated audio with colleagues or students to transfer knowledge.'}</p>
              </div>
            </div>

            <TipBox type="tip" title={isKo ? '오디오 오버뷰 팁' : 'Audio Overview Tip'}>
              {isKo
                ? '오디오 오버뷰는 복잡한 연구 논문이나 긴 보고서를 이해하는 데 특히 유용합니다. 출퇴근길에 들으면서 효율적으로 학습할 수 있습니다. 초점 지시를 활용하면 특정 부분에 대한 더 깊은 설명을 들을 수 있습니다.'
                : 'Audio Overview is especially useful for understanding complex research papers or long reports. Listen during your commute for efficient learning. Use focus instructions to get deeper explanations on specific sections.'}
            </TipBox>
          </div>
        );

      case 'collaboration':
        return (
          <div className="guide-section">
            <h1>{isKo ? '협업 활용' : 'Collaboration'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'NotebookLM은 노트북을 다른 사용자와 공유하여 팀 단위의 리서치와 분석을 수행할 수 있습니다.'
                : 'NotebookLM allows you to share notebooks with others for team research and analysis.'}
            </p>

            <h2>{isKo ? '노트북 공유하기' : 'Sharing Notebooks'}</h2>
            <p>
              {isKo
                ? '노트북 설정에서 다른 사용자의 이메일을 추가하여 노트북을 공유할 수 있습니다. 공유된 사용자는 동일한 소스에 접근하고, 채팅하고, 노트를 작성할 수 있습니다.'
                : 'Share notebooks by adding other users\' emails in notebook settings. Shared users can access the same sources, chat, and create notes.'}
            </p>

            <h2>{isKo ? '팀 리서치 워크플로우' : 'Team Research Workflows'}</h2>
            <ol className="guide-list">
              <li>{isKo ? '팀 리더가 노트북을 생성하고 핵심 소스를 업로드합니다.' : 'Team leader creates a notebook and uploads key sources.'}</li>
              <li>{isKo ? '팀원들을 노트북에 초대합니다.' : 'Invite team members to the notebook.'}</li>
              <li>{isKo ? '각 팀원이 자신의 관점에서 소스를 분석하고 질문합니다.' : 'Each team member analyzes sources and asks questions from their perspective.'}</li>
              <li>{isKo ? '중요한 발견을 노트로 고정합니다.' : 'Pin important findings as notes.'}</li>
              <li>{isKo ? '노트를 결합하여 최종 보고서를 작성합니다.' : 'Combine notes to create the final report.'}</li>
            </ol>

            <h2>{isKo ? '분야별 협업 활용' : 'Collaboration by Field'}</h2>
            <div className="guide-card-grid">
              <div className="guide-card">
                <h4><i className="fa-solid fa-flask" style={{ color: '#4285F4' }} /> {isKo ? '학술 연구 그룹' : 'Academic Research Groups'}</h4>
                <p>{isKo ? '연구 논문과 문헌을 함께 검토하고, 문헌 리뷰를 공동으로 작성합니다.' : 'Review research papers and literature together, co-author literature reviews.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-briefcase" style={{ color: '#EA4335' }} /> {isKo ? '비즈니스 문서 분석' : 'Business Document Analysis'}</h4>
                <p>{isKo ? '시장 조사 보고서, 경쟁사 분석, 사업 계획서를 팀이 함께 분석합니다.' : 'Team analyzes market research reports, competitive analysis, and business plans together.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-gavel" style={{ color: '#34A853' }} /> {isKo ? '법률 문서 검토' : 'Legal Document Review'}</h4>
                <p>{isKo ? '계약서, 판례, 규정을 팀이 함께 검토하고 주요 조항을 분석합니다.' : 'Team reviews contracts, case studies, and regulations, analyzing key clauses together.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-stethoscope" style={{ color: '#FBBC04' }} /> {isKo ? '의학 문헌 검토' : 'Medical Literature Review'}</h4>
                <p>{isKo ? '의학 논문과 임상 데이터를 함께 분석하여 최신 연구 동향을 파악합니다.' : 'Analyze medical papers and clinical data together to understand latest research trends.'}</p>
              </div>
            </div>

            <TipBox type="tip" title={isKo ? '효과적인 협업 팁' : 'Effective Collaboration Tips'}>
              {isKo
                ? '각 팀원이 다른 관점에서 소스를 분석하도록 역할을 분배하면 더 포괄적인 인사이트를 얻을 수 있습니다. 발견한 내용을 노트에 정리하여 팀원들과 공유하세요.'
                : 'Assign team members to analyze sources from different perspectives for more comprehensive insights. Organize findings in notes and share them with the team.'}
            </TipBox>
          </div>
        );

      case 'use-cases':
        return (
          <div className="guide-section">
            <h1>{isKo ? '활용 사례' : 'Use Cases'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'NotebookLM은 다양한 분야에서 활용할 수 있습니다. 아래는 주요 활용 사례와 각 사례에 적합한 소스 유형입니다.'
                : 'NotebookLM can be used across various fields. Below are key use cases and the source types best suited for each.'}
            </p>

            <h2>{isKo ? '주요 활용 사례' : 'Key Use Cases'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '활용 사례' : 'Use Case'}</th>
                    <th>{isKo ? '설명' : 'Description'}</th>
                    <th>{isKo ? '추천 소스' : 'Sources to Use'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{isKo ? '학술 연구' : 'Academic Research'}</td>
                    <td>{isKo ? '문헌 리뷰, 논문 분석' : 'Literature review, paper analysis'}</td>
                    <td>{isKo ? '연구 논문, 교과서' : 'Research papers, textbooks'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '비즈니스 분석' : 'Business Analysis'}</td>
                    <td>{isKo ? '시장 조사, 경쟁 분석' : 'Market research, competitive analysis'}</td>
                    <td>{isKo ? '보고서, 뉴스 기사' : 'Reports, news articles'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '법률 검토' : 'Legal Review'}</td>
                    <td>{isKo ? '계약 분석, 사례 연구' : 'Contract analysis, case study'}</td>
                    <td>{isKo ? '법률 문서, 규정' : 'Legal documents, regulations'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '학습 & 공부' : 'Study & Learning'}</td>
                    <td>{isKo ? '시험 준비, 강의 자료 복습' : 'Exam prep, course material review'}</td>
                    <td>{isKo ? '강의 노트, 교과서' : 'Lecture notes, textbooks'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '콘텐츠 제작' : 'Content Creation'}</td>
                    <td>{isKo ? '블로그/기사 리서치' : 'Blog/article research'}</td>
                    <td>{isKo ? '참고 자료, 데이터' : 'Reference materials, data'}</td>
                  </tr>
                  <tr>
                    <td>{isKo ? '미팅 준비' : 'Meeting Prep'}</td>
                    <td>{isKo ? '여러 문서를 빠르게 소화' : 'Digest multiple documents quickly'}</td>
                    <td>{isKo ? '회의 자료, 보고서' : 'Meeting docs, reports'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? '사례별 상세 활용법' : 'Detailed Use Case Examples'}</h2>

            <h3>{isKo ? '학술 연구' : 'Academic Research'}</h3>
            <p>
              {isKo
                ? '여러 연구 논문을 업로드하고, 공통 주제, 차이점, 연구 방법론을 비교 분석합니다. 학습 가이드 기능으로 핵심 개념을 정리하고, 오디오 오버뷰로 이동 중에도 복습합니다.'
                : 'Upload multiple research papers and compare common themes, differences, and methodologies. Use the study guide feature to organize key concepts and Audio Overview to review on the go.'}
            </p>

            <h3>{isKo ? '비즈니스 분석' : 'Business Analysis'}</h3>
            <p>
              {isKo
                ? '시장 보고서, 경쟁사 데이터, 산업 분석을 업로드합니다. 브리핑 문서 기능으로 핵심 요약을 생성하고, FAQ로 자주 묻는 질문에 대한 답변을 준비합니다.'
                : 'Upload market reports, competitor data, and industry analyses. Generate executive summaries with the briefing document feature and prepare answers to common questions with FAQ generation.'}
            </p>

            <h3>{isKo ? '학습 & 시험 준비' : 'Study & Exam Prep'}</h3>
            <p>
              {isKo
                ? '교과서와 강의 노트를 업로드합니다. 학습 가이드로 핵심 개념을 정리하고, 채팅으로 이해가 안 되는 부분을 질문합니다. 오디오 오버뷰로 청각 학습을 병행합니다.'
                : 'Upload textbooks and lecture notes. Organize key concepts with the study guide, ask about unclear parts in chat, and supplement with audio learning via Audio Overview.'}
            </p>

            <TipBox type="tip" title={isKo ? '활용도를 높이는 팁' : 'Tips for Maximum Utility'}>
              {isKo
                ? '각 활용 사례에 맞는 소스 유형을 선택하는 것이 중요합니다. 예를 들어, 학술 연구에는 PDF 논문을, 비즈니스 분석에는 웹 URL과 보고서를, 학습에는 YouTube 강의와 교재를 업로드하세요.'
                : 'Choosing the right source types for each use case is key. For example, upload PDF papers for academic research, web URLs and reports for business analysis, and YouTube lectures and textbooks for studying.'}
            </TipBox>
          </div>
        );

      case 'tips':
        return (
          <div className="guide-section">
            <h1>{isKo ? '팁 & 베스트 프랙티스' : 'Tips & Best Practices'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'NotebookLM을 최대한 활용하기 위한 팁과 베스트 프랙티스를 소개합니다.'
                : 'Here are tips and best practices to get the most out of NotebookLM.'}
            </p>

            <h2>{isKo ? '노트북 구성' : 'Notebook Organization'}</h2>
            <ul className="guide-list">
              <li><strong>{isKo ? '주제별 노트북' : 'One Topic Per Notebook'}</strong> — {isKo ? '노트북당 하나의 주제에 집중하세요. 주제가 혼합되면 AI 응답의 정확도가 떨어집니다.' : 'Focus on one topic per notebook. Mixing topics reduces AI response accuracy.'}</li>
              <li><strong>{isKo ? '명확한 이름 지정' : 'Clear Naming'}</strong> — {isKo ? '노트북과 소스에 명확한 이름을 지정하여 쉽게 관리하세요.' : 'Give clear names to notebooks and sources for easy management.'}</li>
              <li><strong>{isKo ? '정기적 정리' : 'Regular Cleanup'}</strong> — {isKo ? '더 이상 필요 없는 소스는 삭제하여 응답 품질을 유지하세요.' : 'Remove unnecessary sources to maintain response quality.'}</li>
            </ul>

            <h2>{isKo ? '질문 기법' : 'Questioning Techniques'}</h2>
            <ul className="guide-list">
              <li><strong>{isKo ? '구체적 질문하기' : 'Ask Specific Questions'}</strong> — {isKo ? '"이 문서에 대해 알려줘" 보다는 "3장에서 설명하는 주요 방법론은 무엇인가?" 같이 구체적으로 질문하세요.' : 'Instead of "Tell me about this document," ask "What are the key methodologies described in Chapter 3?"'}</li>
              <li><strong>{isKo ? '후속 질문 활용' : 'Use Follow-up Questions'}</strong> — {isKo ? '첫 번째 답변을 바탕으로 더 깊이 있는 후속 질문을 하세요.' : 'Ask deeper follow-up questions based on initial answers.'}</li>
              <li><strong>{isKo ? '비교 질문' : 'Comparison Questions'}</strong> — {isKo ? '"소스 A와 소스 B의 관점 차이는?" 같은 비교 질문으로 인사이트를 얻으세요.' : 'Gain insights with comparison questions like "What are the differences between Source A and Source B?"'}</li>
            </ul>

            <h2>{isKo ? '노트 활용법' : 'Making the Most of Notes'}</h2>
            <ul className="guide-list">
              <li>{isKo ? 'AI 응답 중 중요한 내용은 바로 노트로 고정하세요.' : 'Pin important AI responses as notes immediately.'}</li>
              <li>{isKo ? '노트를 결합하여 요약 문서를 만들 수 있습니다.' : 'Combine notes to create summary documents.'}</li>
              <li>{isKo ? '자신의 생각과 AI 응답을 함께 기록하세요.' : 'Record your own thoughts alongside AI responses.'}</li>
            </ul>

            <h2>{isKo ? '오디오 오버뷰 활용' : 'Leveraging Audio Overview'}</h2>
            <ul className="guide-list">
              <li>{isKo ? '복잡한 주제에 대해 오디오 오버뷰를 생성하면 이해하기 쉬운 설명을 들을 수 있습니다.' : 'Generate Audio Overview for complex topics to hear easy-to-understand explanations.'}</li>
              <li>{isKo ? '초점 지시를 활용하여 특정 부분에 집중한 오디오를 생성하세요.' : 'Use focus instructions to generate audio focused on specific parts.'}</li>
              <li>{isKo ? '인터랙티브 모드로 실시간 대화에 참여하여 더 깊은 이해를 얻으세요.' : 'Join the real-time conversation in Interactive mode for deeper understanding.'}</li>
            </ul>

            <h2>{isKo ? '소스 조합 전략' : 'Source Combination Strategies'}</h2>
            <p>
              {isKo
                ? '다양한 유형의 소스를 조합하면 더 풍부한 인사이트를 얻을 수 있습니다. 예를 들어, PDF 보고서 + 관련 뉴스 기사 URL + YouTube 강연을 함께 업로드하면 다각적인 분석이 가능합니다.'
                : 'Combining different source types yields richer insights. For example, uploading PDF reports + related news article URLs + YouTube lectures enables multi-faceted analysis.'}
            </p>

            <TipBox type="tip" title={isKo ? 'Top 5 프로 팁' : 'Top 5 Pro Tips'}>
              <ol>
                <li>{isKo ? '노트북당 하나의 주제만 다루세요 - 소스가 집중될수록 AI 응답 품질이 높아집니다.' : 'Keep one topic per notebook - the more focused your sources, the higher the AI response quality.'}</li>
                <li>{isKo ? '구체적인 질문을 하세요 - "요약해줘" 대신 "핵심 결론 3가지는?" 같이 구체적으로 질문하세요.' : 'Ask specific questions - instead of "summarize this," ask "what are the 3 key conclusions?"'}</li>
                <li>{isKo ? '중요한 응답은 즉시 노트에 고정하세요 - 나중에 찾기 어렵습니다.' : 'Pin important responses as notes immediately - they are hard to find later.'}</li>
                <li>{isKo ? '복잡한 주제는 오디오 오버뷰로 먼저 듣고 이해한 후 채팅으로 심화하세요.' : 'For complex topics, listen to Audio Overview first, then deepen understanding via chat.'}</li>
                <li>{isKo ? '다양한 소스 유형(PDF + URL + YouTube)을 조합하면 더 포괄적인 분석이 가능합니다.' : 'Combine various source types (PDF + URL + YouTube) for more comprehensive analysis.'}</li>
              </ol>
            </TipBox>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? 'NotebookLM 가이드' : 'NotebookLM Guide'} path="/notebooklm" />
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
