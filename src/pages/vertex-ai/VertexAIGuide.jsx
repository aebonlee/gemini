import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';

const SECTIONS = [
  { id: 'overview', icon: 'fa-circle-info', ko: '개요', en: 'Overview' },
  { id: 'setup', icon: 'fa-gear', ko: '환경 설정', en: 'Setup' },
  { id: 'model-garden', icon: 'fa-seedling', ko: 'Model Garden', en: 'Model Garden' },
  { id: 'grounding', icon: 'fa-anchor', ko: '그라운딩', en: 'Grounding' },
  { id: 'rag', icon: 'fa-database', ko: 'RAG', en: 'RAG' },
  { id: 'enterprise', icon: 'fa-building', ko: '엔터프라이즈 기능', en: 'Enterprise Features' },
];

export default function VertexAIGuide() {
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
            <h1>{isKo ? 'Vertex AI 개요' : 'Vertex AI Overview'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Vertex AI는 Google Cloud의 엔터프라이즈급 AI 플랫폼입니다. Gemini 모델을 프로덕션 환경에서 안전하고 확장 가능하게 사용할 수 있는 완전 관리형 서비스를 제공합니다.'
                : 'Vertex AI is Google Cloud\'s enterprise-grade AI platform. It provides fully managed services for using Gemini models safely and scalably in production environments.'}
            </p>

            <div className="guide-card-grid">
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}>
                  <i className="fa-solid fa-shield-halved" />
                </div>
                <h3>{isKo ? '엔터프라이즈 보안' : 'Enterprise Security'}</h3>
                <p>{isKo ? 'VPC, IAM, 데이터 암호화 등 엔터프라이즈 수준의 보안을 제공합니다.' : 'Enterprise-level security with VPC, IAM, data encryption, and more.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #EA4335, #FBBC04)' }}>
                  <i className="fa-solid fa-chart-line" />
                </div>
                <h3>{isKo ? '확장성' : 'Scalability'}</h3>
                <p>{isKo ? '자동 스케일링과 배치 처리로 대규모 워크로드를 처리합니다.' : 'Handle large-scale workloads with auto-scaling and batch processing.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #34A853, #4285F4)' }}>
                  <i className="fa-solid fa-puzzle-piece" />
                </div>
                <h3>{isKo ? 'MLOps 통합' : 'MLOps Integration'}</h3>
                <p>{isKo ? 'ML 파이프라인, 모니터링, 평가 도구가 내장되어 있습니다.' : 'Built-in ML pipelines, monitoring, and evaluation tools.'}</p>
              </div>
            </div>

            <h2>{isKo ? 'Google AI Studio vs Vertex AI' : 'Google AI Studio vs Vertex AI'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '기능' : 'Feature'}</th>
                    <th>Google AI Studio</th>
                    <th>Vertex AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>{isKo ? '대상' : 'Target'}</td><td>{isKo ? '개인 개발자, 프로토타이핑' : 'Individual developers, prototyping'}</td><td>{isKo ? '기업, 프로덕션' : 'Enterprise, production'}</td></tr>
                  <tr><td>{isKo ? '인증' : 'Auth'}</td><td>API Key</td><td>OAuth 2.0 / Service Account</td></tr>
                  <tr><td>SLA</td><td>{isKo ? '없음' : 'None'}</td><td>99.9%</td></tr>
                  <tr><td>{isKo ? '데이터 보호' : 'Data Protection'}</td><td>{isKo ? '기본' : 'Basic'}</td><td>{isKo ? 'VPC-SC, CMEK, DLP' : 'VPC-SC, CMEK, DLP'}</td></tr>
                  <tr><td>{isKo ? '모델 튜닝' : 'Model Tuning'}</td><td>{isKo ? '제한적' : 'Limited'}</td><td>{isKo ? '전체 지원' : 'Full support'}</td></tr>
                  <tr><td>{isKo ? '배치 처리' : 'Batch Processing'}</td><td>{isKo ? '없음' : 'None'}</td><td>{isKo ? '지원' : 'Supported'}</td></tr>
                  <tr><td>{isKo ? '가격' : 'Pricing'}</td><td>{isKo ? '무료 + 유료' : 'Free + Paid'}</td><td>{isKo ? '사용량 기반' : 'Usage-based'}</td></tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? '상세 기능 비교' : 'Detailed Feature Comparison'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '항목' : 'Category'}</th>
                    <th>Google AI Studio</th>
                    <th>Vertex AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>{isKo ? 'RAG / 그라운딩' : 'RAG / Grounding'}</td><td>{isKo ? 'Google 검색만' : 'Google Search only'}</td><td>{isKo ? 'Google 검색 + 커스텀 데이터' : 'Google Search + Custom data'}</td></tr>
                  <tr><td>{isKo ? '모델 배포' : 'Model Deployment'}</td><td>{isKo ? '서버리스만' : 'Serverless only'}</td><td>{isKo ? '서버리스 + 프로비저닝' : 'Serverless + Provisioned'}</td></tr>
                  <tr><td>{isKo ? '모니터링' : 'Monitoring'}</td><td>{isKo ? '기본 사용량' : 'Basic usage'}</td><td>{isKo ? 'Cloud Monitoring 통합' : 'Cloud Monitoring integration'}</td></tr>
                  <tr><td>{isKo ? '평가 도구' : 'Evaluation Tools'}</td><td>{isKo ? '없음' : 'None'}</td><td>{isKo ? 'BLEU, ROUGE 등 내장' : 'Built-in BLEU, ROUGE, etc.'}</td></tr>
                  <tr><td>{isKo ? '오픈소스 모델' : 'Open Source Models'}</td><td>{isKo ? '없음' : 'None'}</td><td>{isKo ? 'Model Garden (Llama, Gemma 등)' : 'Model Garden (Llama, Gemma, etc.)'}</td></tr>
                  <tr><td>{isKo ? '네트워크 보안' : 'Network Security'}</td><td>{isKo ? '없음' : 'None'}</td><td>VPC-SC</td></tr>
                </tbody>
              </table>
            </div>

            <TipBox type="tip" title={isKo ? '언제 Vertex AI를 선택해야 하나요?' : 'When Should You Choose Vertex AI?'}>
              {isKo
                ? '프로덕션 환경에서 SLA가 필요하거나, 기업 보안 요구사항이 있거나, 대규모 배치 처리가 필요하거나, 기존 GCP 인프라와 통합해야 할 때 Vertex AI를 선택하세요.'
                : 'Choose Vertex AI when you need SLA in production, have enterprise security requirements, need large-scale batch processing, or need to integrate with existing GCP infrastructure.'}
            </TipBox>
          </div>
        );

      case 'setup':
        return (
          <div className="guide-section">
            <h1>{isKo ? 'Vertex AI 환경 설정' : 'Vertex AI Setup'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Vertex AI를 사용하기 위한 Google Cloud 프로젝트 설정 방법을 안내합니다.'
                : 'This guide covers setting up a Google Cloud project for Vertex AI.'}
            </p>

            <h2>{isKo ? '사전 요구사항' : 'Prerequisites'}</h2>
            <ul className="guide-list">
              <li>{isKo ? 'Google Cloud 계정' : 'Google Cloud account'}</li>
              <li>{isKo ? 'GCP 프로젝트 생성' : 'GCP project created'}</li>
              <li>{isKo ? '결제 활성화' : 'Billing enabled'}</li>
              <li>{isKo ? 'Vertex AI API 활성화' : 'Vertex AI API enabled'}</li>
            </ul>

            <h2>{isKo ? '1단계: gcloud CLI 설치' : 'Step 1: Install gcloud CLI'}</h2>
            <CodeBlock language="bash" code={`# macOS
brew install google-cloud-sdk

# Linux
curl https://sdk.cloud.google.com | bash

# Initialize and authenticate
gcloud init
gcloud auth application-default login`} />

            <h2>{isKo ? '2단계: API 활성화' : 'Step 2: Enable APIs'}</h2>
            <CodeBlock language="bash" code={`# Enable Vertex AI API
gcloud services enable aiplatform.googleapis.com

# Verify
gcloud services list --enabled | grep aiplatform`} />

            <h2>{isKo ? '3단계: Python SDK 설치' : 'Step 3: Install Python SDK'}</h2>
            <CodeBlock language="bash" code={`pip install google-cloud-aiplatform`} />

            <h2>{isKo ? '4단계: SDK 초기화' : 'Step 4: Initialize SDK'}</h2>
            <CodeBlock language="python" code={`import vertexai
from vertexai.generative_models import GenerativeModel

# Initialize Vertex AI
vertexai.init(
    project="your-project-id",
    location="us-central1"  # or asia-northeast3 for Seoul
)

# Create model instance
model = GenerativeModel("gemini-2.0-flash")

# Generate content
response = model.generate_content("Hello, Vertex AI!")
print(response.text)`} />

            <TipBox type="tip" title={isKo ? '리전 선택' : 'Region Selection'}>
              {isKo
                ? '한국에서 사용하는 경우 asia-northeast3 (서울) 리전을 선택하면 지연 시간을 최소화할 수 있습니다. 단, 모든 모델이 모든 리전에서 사용 가능한 것은 아니므로 문서를 확인하세요.'
                : 'For users in Korea, selecting the asia-northeast3 (Seoul) region minimizes latency. Note that not all models are available in all regions, so check the documentation.'}
            </TipBox>

            <h2>{isKo ? '서비스 계정 설정' : 'Service Account Setup'}</h2>
            <CodeBlock language="bash" code={`# Create service account
gcloud iam service-accounts create gemini-app \\
  --display-name="Gemini App Service Account"

# Grant Vertex AI User role
gcloud projects add-iam-policy-binding YOUR_PROJECT_ID \\
  --member="serviceAccount:gemini-app@YOUR_PROJECT_ID.iam.gserviceaccount.com" \\
  --role="roles/aiplatform.user"

# Create and download key
gcloud iam service-accounts keys create key.json \\
  --iam-account=gemini-app@YOUR_PROJECT_ID.iam.gserviceaccount.com

# Set credentials
export GOOGLE_APPLICATION_CREDENTIALS="key.json"`} />
          </div>
        );

      case 'model-garden':
        return (
          <div className="guide-section">
            <h1>Model Garden</h1>
            <p className="guide-intro">
              {isKo
                ? 'Model Garden은 Vertex AI에서 제공하는 모델 카탈로그입니다. Gemini 외에도 다양한 오픈소스 모델과 파트너 모델을 발견하고 배포할 수 있습니다.'
                : 'Model Garden is a model catalog provided by Vertex AI. Besides Gemini, you can discover and deploy various open-source and partner models.'}
            </p>

            <h2>{isKo ? '사용 가능한 모델 카테고리' : 'Available Model Categories'}</h2>
            <div className="guide-card-grid">
              <div className="guide-card">
                <h4><i className="fa-solid fa-gem" style={{ color: '#4285F4' }} /> Google Models</h4>
                <p>{isKo ? 'Gemini, PaLM, Imagen, Chirp 등 Google의 자체 모델' : 'Google\'s own models: Gemini, PaLM, Imagen, Chirp, etc.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-globe" style={{ color: '#34A853' }} /> {isKo ? '오픈소스 모델' : 'Open Source Models'}</h4>
                <p>{isKo ? 'Llama, Mistral, Gemma 등 커뮤니티 모델' : 'Community models: Llama, Mistral, Gemma, etc.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-handshake" style={{ color: '#EA4335' }} /> {isKo ? '파트너 모델' : 'Partner Models'}</h4>
                <p>{isKo ? 'Anthropic Claude, AI21 등 파트너사 모델' : 'Partner models: Anthropic Claude, AI21, etc.'}</p>
              </div>
            </div>

            <h2>{isKo ? 'Gemma 모델 사용하기' : 'Using Gemma Models'}</h2>
            <p>
              {isKo
                ? 'Gemma는 Google이 공개한 경량 오픈소스 모델입니다. Vertex AI에서 직접 배포하거나 다운로드하여 사용할 수 있습니다.'
                : 'Gemma is a lightweight open-source model released by Google. You can deploy it directly on Vertex AI or download it.'}
            </p>
            <CodeBlock language="python" code={`from vertexai.preview.language_models import TextGenerationModel

# Deploy Gemma from Model Garden
# Use the Vertex AI console to deploy Gemma to an endpoint

# Once deployed, use it like any other model
import vertexai
from vertexai.generative_models import GenerativeModel

vertexai.init(project="your-project-id", location="us-central1")

# Use Gemma via Model Garden endpoint
model = GenerativeModel("gemma-2-27b-it")
response = model.generate_content("Explain the theory of relativity simply.")
print(response.text)`} />

            <TipBox type="important" title={isKo ? '모델 배포 비용' : 'Model Deployment Costs'}>
              {isKo
                ? 'Model Garden에서 오픈소스 모델을 직접 배포하면 GPU 인스턴스 비용이 발생합니다. 사용하지 않을 때는 엔드포인트를 삭제하여 비용을 절감하세요. Gemini 모델은 서버리스이므로 별도의 배포 비용이 없습니다.'
                : 'Deploying open-source models from Model Garden incurs GPU instance costs. Delete endpoints when not in use to reduce costs. Gemini models are serverless, so there are no separate deployment costs.'}
            </TipBox>

            <h2>{isKo ? '모델 탐색 및 비교' : 'Model Discovery & Comparison'}</h2>
            <p>
              {isKo
                ? 'Model Garden에서 모델을 검색하고 성능, 가격, 라이선스를 비교할 수 있습니다. 필터를 사용하여 특정 작업(텍스트 생성, 이미지 생성, 임베딩 등)에 적합한 모델을 찾으세요.'
                : 'Search models in Model Garden and compare performance, pricing, and licenses. Use filters to find models suitable for specific tasks (text generation, image generation, embeddings, etc.).'}
            </p>
          </div>
        );

      case 'grounding':
        return (
          <div className="guide-section">
            <h1>{isKo ? '그라운딩 (Grounding)' : 'Grounding'}</h1>
            <p className="guide-intro">
              {isKo
                ? '그라운딩은 Gemini 모델의 응답을 실제 데이터에 기반하여 생성하는 기능입니다. Google 검색이나 자체 데이터를 소스로 사용하여 환각(hallucination)을 줄이고 정확도를 높입니다.'
                : 'Grounding generates Gemini model responses based on real data. It uses Google Search or your own data as sources to reduce hallucination and improve accuracy.'}
            </p>

            <h2>{isKo ? 'Google 검색 그라운딩' : 'Google Search Grounding'}</h2>
            <p>
              {isKo
                ? '모델이 Google 검색 결과를 참고하여 최신 정보가 포함된 응답을 생성합니다.'
                : 'The model references Google Search results to generate responses with up-to-date information.'}
            </p>
            <CodeBlock language="python" code={`from vertexai.generative_models import GenerativeModel, Tool
from vertexai.preview.generative_models import grounding

model = GenerativeModel("gemini-2.0-flash")

# Enable Google Search grounding
google_search_tool = Tool.from_google_search_retrieval(
    grounding.GoogleSearchRetrieval()
)

response = model.generate_content(
    "What are the latest developments in quantum computing in 2026?",
    tools=[google_search_tool]
)
print(response.text)

# Access grounding metadata
metadata = response.candidates[0].grounding_metadata
if metadata and metadata.search_entry_point:
    print("Search query:", metadata.search_entry_point.rendered_content)`} />

            <h2>{isKo ? '자체 데이터 그라운딩' : 'Custom Data Grounding'}</h2>
            <p>
              {isKo
                ? 'Vertex AI Search를 사용하여 자체 데이터(문서, 웹사이트, FAQ)를 기반으로 응답을 생성할 수 있습니다.'
                : 'Use Vertex AI Search to generate responses based on your own data (documents, websites, FAQs).'}
            </p>
            <CodeBlock language="python" code={`from vertexai.generative_models import GenerativeModel, Tool
from vertexai.preview.generative_models import grounding

model = GenerativeModel("gemini-2.0-flash")

# Ground with Vertex AI Search datastore
custom_tool = Tool.from_retrieval(
    grounding.Retrieval(
        grounding.VertexAISearch(
            datastore="projects/PROJECT_ID/locations/global/collections/default_collection/dataStores/DATASTORE_ID"
        )
    )
)

response = model.generate_content(
    "What is our company's refund policy?",
    tools=[custom_tool]
)
print(response.text)`} />

            <TipBox type="tip" title={isKo ? '그라운딩 활용 팁' : 'Grounding Tips'}>
              {isKo
                ? '1) 실시간 정보가 필요한 질문에는 Google 검색 그라운딩을 사용하세요. 2) 기업 내부 지식 베이스는 Vertex AI Search 그라운딩을 사용하세요. 3) 그라운딩 메타데이터에서 소스를 확인하여 인용을 표시할 수 있습니다.'
                : '1) Use Google Search grounding for questions needing real-time information. 2) Use Vertex AI Search grounding for internal knowledge bases. 3) Check sources in grounding metadata to display citations.'}
            </TipBox>
          </div>
        );

      case 'rag':
        return (
          <div className="guide-section">
            <h1>RAG (Retrieval-Augmented Generation)</h1>
            <p className="guide-intro">
              {isKo
                ? 'RAG는 외부 데이터를 검색하여 모델의 응답을 강화하는 기법입니다. Vertex AI는 RAG 파이프라인을 구축하기 위한 도구를 제공합니다.'
                : 'RAG is a technique that enhances model responses by retrieving external data. Vertex AI provides tools for building RAG pipelines.'}
            </p>

            <h2>{isKo ? 'RAG 아키텍처' : 'RAG Architecture'}</h2>
            <ol className="guide-list">
              <li><strong>{isKo ? '문서 수집' : 'Document Ingestion'}</strong> — {isKo ? '문서를 청크로 분할' : 'Split documents into chunks'}</li>
              <li><strong>{isKo ? '임베딩 생성' : 'Embedding Generation'}</strong> — {isKo ? '각 청크를 벡터로 변환' : 'Convert each chunk to vectors'}</li>
              <li><strong>{isKo ? '벡터 저장' : 'Vector Storage'}</strong> — {isKo ? '벡터 데이터베이스에 저장' : 'Store in vector database'}</li>
              <li><strong>{isKo ? '쿼리 검색' : 'Query Retrieval'}</strong> — {isKo ? '관련 문서 검색' : 'Search for relevant documents'}</li>
              <li><strong>{isKo ? '응답 생성' : 'Response Generation'}</strong> — {isKo ? '검색 결과와 함께 모델이 응답 생성' : 'Model generates response with search results'}</li>
            </ol>

            <h2>{isKo ? 'Vertex AI RAG API 사용' : 'Using Vertex AI RAG API'}</h2>
            <CodeBlock language="python" code={`from vertexai import rag
from vertexai.generative_models import GenerativeModel, Tool
import vertexai

vertexai.init(project="your-project-id", location="us-central1")

# Step 1: Create a RAG corpus
corpus = rag.create_corpus(display_name="my-knowledge-base")

# Step 2: Import documents
rag.import_files(
    corpus.name,
    paths=["gs://your-bucket/documents/"],
    chunk_size=512,
    chunk_overlap=100
)

# Step 3: Use RAG for generation
rag_retrieval_tool = Tool.from_retrieval(
    retrieval=rag.Retrieval(
        source=rag.VertexRagStore(
            rag_resources=[
                rag.RagResource(rag_corpus=corpus.name)
            ],
            similarity_top_k=5,
            vector_distance_threshold=0.5
        )
    )
)

model = GenerativeModel(
    model_name="gemini-2.0-flash",
    tools=[rag_retrieval_tool]
)

response = model.generate_content(
    "What are the key findings from the Q4 report?"
)
print(response.text)`} />

            <h2>{isKo ? '임베딩 모델' : 'Embedding Models'}</h2>
            <CodeBlock language="python" code={`from vertexai.language_models import TextEmbeddingModel

# Use Vertex AI embedding model
model = TextEmbeddingModel.from_pretrained("text-embedding-005")

texts = [
    "Machine learning basics",
    "Neural network architectures",
    "Natural language processing"
]

embeddings = model.get_embeddings(texts)

for text, emb in zip(texts, embeddings):
    print(f"{text}: dimension={len(emb.values)}")`} />

            <TipBox type="important" title={isKo ? 'RAG 최적화 팁' : 'RAG Optimization Tips'}>
              {isKo
                ? '1) 청크 크기를 문서 유형에 맞게 조정하세요 (일반: 512, 코드: 1024). 2) 청크 오버랩을 10-20%로 설정하면 문맥 유지에 도움됩니다. 3) similarity_top_k는 3-5가 보통 최적입니다. 4) 정기적으로 임베딩을 업데이트하세요.'
                : '1) Adjust chunk size for document type (general: 512, code: 1024). 2) 10-20% chunk overlap helps maintain context. 3) similarity_top_k of 3-5 is usually optimal. 4) Regularly update embeddings.'}
            </TipBox>
          </div>
        );

      case 'enterprise':
        return (
          <div className="guide-section">
            <h1>{isKo ? '엔터프라이즈 기능' : 'Enterprise Features'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Vertex AI는 기업 환경에 필요한 보안, 규정 준수, 모니터링 기능을 제공합니다.'
                : 'Vertex AI provides security, compliance, and monitoring features required for enterprise environments.'}
            </p>

            <h2>{isKo ? '보안 기능' : 'Security Features'}</h2>
            <div className="guide-card-grid">
              <div className="guide-card">
                <h4><i className="fa-solid fa-lock" style={{ color: '#4285F4' }} /> VPC Service Controls</h4>
                <p>{isKo ? '데이터 유출을 방지하는 네트워크 보안 경계를 설정합니다.' : 'Set up network security perimeters to prevent data exfiltration.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-key" style={{ color: '#EA4335' }} /> CMEK</h4>
                <p>{isKo ? '고객 관리 암호화 키로 데이터를 보호합니다.' : 'Protect data with Customer-Managed Encryption Keys.'}</p>
              </div>
              <div className="guide-card">
                <h4><i className="fa-solid fa-user-shield" style={{ color: '#34A853' }} /> IAM</h4>
                <p>{isKo ? '세분화된 접근 제어로 리소스를 관리합니다.' : 'Manage resources with fine-grained access control.'}</p>
              </div>
            </div>

            <h2>{isKo ? '배치 처리' : 'Batch Processing'}</h2>
            <p>
              {isKo
                ? '대량의 요청을 비동기적으로 처리할 수 있습니다. 50% 할인된 가격이 적용됩니다.'
                : 'Process large volumes of requests asynchronously. A 50% discount applies.'}
            </p>
            <CodeBlock language="python" code={`from vertexai.batch_prediction import BatchPredictionJob

# Create batch prediction job
job = BatchPredictionJob.submit(
    source_model="gemini-2.0-flash",
    input_dataset="bq://project.dataset.input_table",
    output_uri_prefix="gs://your-bucket/output/",
)

# Check job status
print(f"Job state: {job.state}")
print(f"Job resource: {job.resource_name}")

# Wait for completion
job.wait()
print(f"Completed. Output: {job.output_info}")`} />

            <h2>{isKo ? '모니터링 및 로깅' : 'Monitoring & Logging'}</h2>
            <ul className="guide-list">
              <li><strong>Cloud Monitoring</strong> — {isKo ? 'API 호출 횟수, 지연 시간, 오류율 추적' : 'Track API call counts, latency, and error rates'}</li>
              <li><strong>Cloud Logging</strong> — {isKo ? '모든 API 요청/응답 로그 기록' : 'Log all API request/response'}</li>
              <li><strong>Cloud Audit Logs</strong> — {isKo ? '감사 로그로 규정 준수 지원' : 'Support compliance with audit logs'}</li>
            </ul>

            <h2>{isKo ? '모델 평가' : 'Model Evaluation'}</h2>
            <CodeBlock language="python" code={`from vertexai.evaluation import EvalTask

# Define evaluation metrics
eval_task = EvalTask(
    dataset="gs://your-bucket/eval_dataset.jsonl",
    metrics=[
        "bleu",
        "rouge",
        "coherence",
        "fluency",
        "groundedness"
    ]
)

# Run evaluation
results = eval_task.evaluate(
    model=GenerativeModel("gemini-2.0-flash")
)

# View results
for metric, score in results.summary_metrics.items():
    print(f"{metric}: {score:.4f}")`} />

            <h2>{isKo ? '데이터 거버넌스' : 'Data Governance'}</h2>
            <TipBox type="important" title={isKo ? '데이터 처리 정책' : 'Data Processing Policy'}>
              {isKo
                ? 'Vertex AI를 통해 전송되는 데이터는 모델 학습에 사용되지 않습니다. Google의 데이터 처리 약관이 적용되며, 데이터 레지던시 옵션을 통해 데이터 저장 위치를 제어할 수 있습니다.'
                : 'Data transmitted through Vertex AI is not used for model training. Google\'s data processing terms apply, and you can control data storage location through data residency options.'}
            </TipBox>

            <h2>{isKo ? '프로비저닝된 처리량' : 'Provisioned Throughput'}</h2>
            <p>
              {isKo
                ? '예측 가능한 워크로드에 대해 프로비저닝된 처리량을 구매하면 일관된 성능과 할인된 가격을 보장받을 수 있습니다.'
                : 'For predictable workloads, purchasing provisioned throughput guarantees consistent performance and discounted pricing.'}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? 'Vertex AI 가이드' : 'Vertex AI Guide'} path="/vertex-ai" />
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
