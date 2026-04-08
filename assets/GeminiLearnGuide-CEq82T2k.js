import{j as e}from"./markdown-Cxpyo6vT.js";import{b as u}from"./vendor-Cbm2kc8j.js";import{u as g}from"./index-Dpz-Vn6Q.js";import{S as x}from"./SEOHead-DYQLs8MZ.js";import{C as s}from"./CodeBlock-CxbI80kj.js";import{T as t}from"./TipBox-Cj4ZeRJn.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const r=[{id:"overview",icon:"fa-circle-info",ko:"개요",en:"Overview"},{id:"conversation",icon:"fa-comments",ko:"대화 활용법",en:"Conversation Tips"},{id:"writing",icon:"fa-pen-fancy",ko:"글쓰기 활용",en:"Writing"},{id:"coding",icon:"fa-code",ko:"코딩 활용",en:"Coding"},{id:"research",icon:"fa-magnifying-glass-chart",ko:"리서치 활용",en:"Research"},{id:"creative",icon:"fa-palette",ko:"크리에이티브",en:"Creative"},{id:"productivity",icon:"fa-rocket",ko:"생산성 향상",en:"Productivity"},{id:"advanced",icon:"fa-wand-magic-sparkles",ko:"고급 활용법",en:"Advanced Tips"}];function w(){const{language:h}=g(),i=h==="ko",[l,c]=u.useState("overview"),a=r.findIndex(n=>n.id===l),o=a>0?r[a-1]:null,d=a<r.length-1?r[a+1]:null,m=()=>{switch(l){case"overview":return e.jsxs("div",{className:"guide-section",children:[e.jsx("h1",{children:i?"Gemini 실전 활용 가이드":"Practical Guide to Using Gemini"}),e.jsx("p",{className:"guide-intro",children:i?"Google Gemini를 일상과 업무에서 효과적으로 활용하는 방법을 소개합니다. 대화, 글쓰기, 코딩, 리서치, 크리에이티브, 생산성 향상까지 실전 팁과 프롬프트 예시를 제공합니다.":"Learn how to effectively use Google Gemini in your daily life and work. This guide covers practical tips and prompt examples for conversation, writing, coding, research, creative work, and productivity."}),e.jsx("h2",{children:i?"Gemini에 접근하는 방법":"How to Access Gemini"}),e.jsxs("div",{className:"guide-card-grid",children:[e.jsxs("div",{className:"guide-card",children:[e.jsx("div",{className:"guide-card-icon",style:{background:"linear-gradient(135deg, #4285F4, #34A853)"},children:e.jsx("i",{className:"fa-solid fa-globe"})}),e.jsx("h3",{children:"gemini.google.com"}),e.jsx("p",{children:i?"웹 브라우저에서 바로 사용. 무료 플랜과 Gemini Advanced(유료) 모두 지원합니다.":"Use directly in your web browser. Supports both free and Gemini Advanced (paid) plans."})]}),e.jsxs("div",{className:"guide-card",children:[e.jsx("div",{className:"guide-card-icon",style:{background:"linear-gradient(135deg, #EA4335, #FBBC04)"},children:e.jsx("i",{className:"fa-solid fa-mobile-screen"})}),e.jsx("h3",{children:i?"모바일 앱":"Mobile App"}),e.jsx("p",{children:i?"iOS/Android 앱으로 이동 중에도 Gemini 사용. 음성 대화, 카메라 활용이 가능합니다.":"Use Gemini on the go with iOS/Android apps. Supports voice conversation and camera input."})]}),e.jsxs("div",{className:"guide-card",children:[e.jsx("div",{className:"guide-card-icon",style:{background:"linear-gradient(135deg, #9334E6, #EA4335)"},children:e.jsx("i",{className:"fa-solid fa-terminal"})}),e.jsx("h3",{children:"Gemini API"}),e.jsx("p",{children:i?"Google AI Studio 또는 Vertex AI를 통해 API로 접근. 앱 개발과 자동화에 활용합니다.":"Access via API through Google AI Studio or Vertex AI. Use for app development and automation."})]})]}),e.jsx("h2",{children:i?"무료 vs 유료 (Gemini Advanced)":"Free vs Paid (Gemini Advanced)"}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i?"기능":"Feature"}),e.jsx("th",{children:i?"무료":"Free"}),e.jsx("th",{children:"Gemini Advanced"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i?"사용 모델":"Model"}),e.jsx("td",{children:"Gemini Flash"}),e.jsx("td",{children:"Gemini Pro / Ultra"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"이미지 생성":"Image Generation"}),e.jsx("td",{children:i?"제한적":"Limited"}),e.jsx("td",{children:i?"고품질 Imagen 3":"High-quality Imagen 3"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"파일 업로드":"File Upload"}),e.jsx("td",{children:i?"기본 지원":"Basic support"}),e.jsx("td",{children:i?"대용량 파일, 긴 문서":"Large files, long documents"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Gems"}),e.jsx("td",{children:e.jsx("i",{className:"fa-solid fa-xmark",style:{color:"#EA4335"}})}),e.jsx("td",{children:e.jsx("i",{className:"fa-solid fa-check",style:{color:"#34A853"}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"Google Workspace 통합":"Google Workspace Integration"}),e.jsx("td",{children:e.jsx("i",{className:"fa-solid fa-xmark",style:{color:"#EA4335"}})}),e.jsx("td",{children:e.jsx("i",{className:"fa-solid fa-check",style:{color:"#34A853"}})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"가격":"Price"}),e.jsx("td",{children:i?"무료":"Free"}),e.jsx("td",{children:"$19.99/mo (Google One AI Premium)"})]})]})]})}),e.jsx(t,{type:"tip",title:i?"시작 팁":"Getting Started Tip",children:i?"무료 플랜으로도 Gemini의 핵심 기능을 충분히 체험할 수 있습니다. 먼저 무료로 사용해보고, 필요에 따라 Advanced로 업그레이드하세요. 학생이나 개인 사용자라면 무료 플랜만으로도 많은 작업을 처리할 수 있습니다.":"You can fully experience Gemini's core features with the free plan. Try it free first, then upgrade to Advanced as needed. Students and individual users can accomplish many tasks with just the free plan."})]});case"conversation":return e.jsxs("div",{className:"guide-section",children:[e.jsx("h1",{children:i?"효과적인 대화 활용법":"Effective Conversation Tips"}),e.jsx("p",{className:"guide-intro",children:i?"Gemini와의 대화에서 더 나은 결과를 얻기 위한 핵심 기법들을 알아봅니다. 프롬프트 작성법, 멀티턴 대화 전략, 컨텍스트 관리 방법을 다룹니다.":"Learn key techniques for getting better results from conversations with Gemini. Covers prompt writing, multi-turn conversation strategies, and context management."}),e.jsx("h2",{children:i?"좋은 프롬프트 vs 나쁜 프롬프트":"Good Prompts vs Bad Prompts"}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i?"나쁜 프롬프트":"Bad Prompt"}),e.jsx("th",{children:i?"좋은 프롬프트":"Good Prompt"}),e.jsx("th",{children:i?"개선 포인트":"Improvement"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i?"마케팅에 대해 알려줘":"Tell me about marketing"}),e.jsx("td",{children:i?"B2B SaaS 스타트업의 초기 고객 확보를 위한 콘텐츠 마케팅 전략 5가지를 예산별로 정리해줘":"List 5 content marketing strategies for early customer acquisition at a B2B SaaS startup, organized by budget level"}),e.jsx("td",{children:i?"구체적 맥락 + 수량 + 구조화":"Specific context + quantity + structure"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"코드 좀 짜줘":"Write some code"}),e.jsx("td",{children:i?"Python으로 CSV 파일을 읽어서 월별 매출을 집계하고 막대 그래프로 시각화하는 코드를 작성해줘. pandas와 matplotlib을 사용해줘":"Write Python code that reads a CSV file, aggregates monthly sales, and visualizes it as a bar chart. Use pandas and matplotlib"}),e.jsx("td",{children:i?"언어 + 입출력 + 라이브러리 명시":"Language + I/O + library specified"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"이메일 써줘":"Write an email"}),e.jsx("td",{children:i?"프로젝트 납기가 2주 지연될 것 같아서 클라이언트에게 보낼 정중하면서도 해결책을 제시하는 이메일을 작성해줘. 대안으로 부분 납품 제안도 포함해줘":"Write a polite email to a client about a 2-week project delay that proposes solutions. Include a partial delivery alternative"}),e.jsx("td",{children:i?"상황 + 톤 + 요구사항 명시":"Situation + tone + requirements specified"})]})]})]})}),e.jsx("h2",{children:i?"프롬프트 작성 공식":"Prompt Writing Formula"}),e.jsx(s,{language:"text",code:i?`[역할] + [맥락] + [구체적 요청] + [출력 형식] + [제약 조건]

예시:
"너는 10년 경력의 UX 디자이너야. (역할)
우리 회사는 50대 이상을 타겟으로 하는 건강관리 앱을 만들고 있어. (맥락)
홈 화면의 레이아웃을 설계해줘. (구체적 요청)
각 요소의 목적과 배치 이유를 표로 정리해줘. (출력 형식)
접근성 가이드라인(WCAG 2.1 AA)을 반드시 준수해야 해. (제약 조건)"`:`[Role] + [Context] + [Specific Request] + [Output Format] + [Constraints]

Example:
"You are a UX designer with 10 years of experience. (Role)
Our company is building a health management app targeting people over 50. (Context)
Design the home screen layout. (Specific Request)
Organize each element's purpose and placement rationale in a table. (Output Format)
Must comply with accessibility guidelines (WCAG 2.1 AA). (Constraints)"`}),e.jsx("h2",{children:i?"멀티턴 대화 전략":"Multi-Turn Conversation Strategy"}),e.jsx("p",{children:i?"Gemini는 대화 내 이전 메시지를 기억합니다. 이를 활용하여 점진적으로 결과를 개선할 수 있습니다.":"Gemini remembers previous messages in a conversation. Use this to progressively refine results."}),e.jsx(s,{language:"text",code:i?`1번째 메시지: "React로 할 일 관리 앱의 기본 구조를 설계해줘"
2번째 메시지: "여기에 드래그 앤 드롭으로 순서 변경 기능을 추가해줘"
3번째 메시지: "로컬 스토리지에 저장하는 기능도 넣어줘"
4번째 메시지: "전체 코드를 정리해서 최종 버전으로 보여줘"`:`1st message: "Design the basic structure of a todo app in React"
2nd message: "Add drag-and-drop reordering to this"
3rd message: "Also add local storage persistence"
4th message: "Clean up the full code and show me the final version"`}),e.jsx(t,{type:"tip",title:i?"컨텍스트 관리 팁":"Context Management Tips",children:i?'대화가 길어지면 Gemini의 응답 품질이 떨어질 수 있습니다. 주제가 바뀌면 새 대화를 시작하세요. 또한 중간에 "지금까지 논의한 내용을 요약해줘"라고 요청하면 컨텍스트를 정리할 수 있습니다.':`Response quality may decrease as conversations get longer. Start a new conversation when the topic changes. You can also ask "Summarize what we've discussed so far" to consolidate context mid-conversation.`}),e.jsx("h2",{children:i?"유용한 대화 패턴":"Useful Conversation Patterns"}),e.jsxs("ul",{className:"guide-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:i?"역할 부여":"Role Assignment"})," — ",i?'"너는 시니어 데이터 사이언티스트야" 처럼 전문가 역할을 부여하면 더 전문적인 답변을 얻을 수 있습니다.':'Assigning an expert role like "You are a senior data scientist" yields more expert-level responses.']}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"단계적 질문":"Step-by-Step Questions"})," — ",i?"복잡한 요청을 한 번에 하지 말고 단계별로 나누어 질문하세요.":"Break complex requests into step-by-step questions instead of asking all at once."]}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"예시 제공":"Provide Examples"})," — ",i?'"다음과 같은 형식으로 작성해줘: [예시]" 처럼 원하는 출력의 예시를 보여주면 정확도가 높아집니다.':'Showing examples of desired output like "Write in this format: [example]" improves accuracy.']}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"피드백 루프":"Feedback Loop"})," — ",i?'"좋은데 좀 더 간결하게" 또는 "예시를 추가해줘" 처럼 피드백을 주면 결과가 개선됩니다.':'Give feedback like "Good, but make it more concise" or "Add examples" to refine results.']})]}),e.jsx("h2",{children:i?"Google 검색 그라운딩":"Google Search Grounding"}),e.jsx("p",{children:i?'Gemini는 Google 검색을 활용하여 최신 정보를 기반으로 답변할 수 있습니다. "@Google"을 사용하거나 최신 정보가 필요한 질문을 하면 자동으로 검색을 수행합니다.':'Gemini can use Google Search to provide answers based on up-to-date information. Use "@Google" or ask questions requiring current information to trigger automatic search.'}),e.jsx(s,{language:"text",code:i?`"@Google 오늘 서울 날씨 어때?"
"@Google 최근 AI 관련 뉴스를 요약해줘"
"2025년 한국 GDP 성장률 전망은?"`:`"@Google What's the weather like in Seoul today?"
"@Google Summarize recent AI-related news"
"What is the 2025 GDP growth forecast for South Korea?"`})]});case"writing":return e.jsxs("div",{className:"guide-section",children:[e.jsx("h1",{children:i?"글쓰기 활용 가이드":"Writing with Gemini"}),e.jsx("p",{className:"guide-intro",children:i?"Gemini를 활용하여 블로그 글, 이메일, 보고서, SNS 콘텐츠, 번역 등 다양한 글쓰기 작업을 효율적으로 수행하는 방법을 알아봅니다.":"Learn how to efficiently perform various writing tasks with Gemini, including blog posts, emails, reports, social media content, and translations."}),e.jsx("h2",{children:i?"글쓰기 용도별 가이드":"Writing Guide by Use Case"}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i?"용도":"Use Case"}),e.jsx("th",{children:i?"프롬프트 예시":"Example Prompt"}),e.jsx("th",{children:i?"추천 모델":"Model Recommendation"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i?"블로그 글":"Blog Post"}),e.jsx("td",{children:i?'"AI 시대 직장인의 생존 전략에 대해 1000자 블로그 글을 써줘"':'"Write a 1000-word blog post about surviving the AI era as a professional"'}),e.jsx("td",{children:"Flash / Pro"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"비즈니스 이메일":"Business Email"}),e.jsx("td",{children:i?'"프로젝트 진행 상황을 보고하는 전문적인 이메일을 작성해줘"':'"Draft a professional email reporting on project progress"'}),e.jsx("td",{children:"Flash"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"보고서":"Report"}),e.jsx("td",{children:i?'"이 데이터를 분석하고 경영진을 위한 보고서를 작성해줘"':'"Analyze this data and create a report for the management team"'}),e.jsx("td",{children:"Pro"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"SNS 콘텐츠":"Social Media"}),e.jsx("td",{children:i?'"인스타그램용 제품 소개 캡션 5개를 해시태그와 함께 작성해줘"':'"Write 5 Instagram product captions with relevant hashtags"'}),e.jsx("td",{children:"Flash"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"번역":"Translation"}),e.jsx("td",{children:i?'"이 기술 문서를 자연스러운 한국어로 번역해줘. 전문 용어는 영어를 병기해줘"':'"Translate this technical document to natural Korean. Keep technical terms in English with Korean"'}),e.jsx("td",{children:"Pro"})]})]})]})}),e.jsx("h2",{children:i?"블로그 글쓰기 예시":"Blog Writing Example"}),e.jsx(s,{language:"text",code:i?`다음 조건으로 블로그 글을 작성해줘:

주제: 재택근무 생산성을 높이는 5가지 방법
대상 독자: 30-40대 직장인
분량: 1500자 내외
톤: 친근하지만 전문적인
구조:
- 도입부 (공감 유도)
- 5가지 방법 (각각 소제목 + 설명 + 실천 팁)
- 마무리 (동기 부여)
SEO 키워드: 재택근무, 생산성, 홈오피스, 워라밸`:`Write a blog post with these specifications:

Topic: 5 Ways to Boost Remote Work Productivity
Target audience: Professionals aged 30-40
Length: ~1500 words
Tone: Friendly but professional
Structure:
- Introduction (build empathy)
- 5 methods (each with subtitle + explanation + practical tip)
- Conclusion (motivational)
SEO keywords: remote work, productivity, home office, work-life balance`}),e.jsx("h2",{children:i?"이메일 작성 예시":"Email Writing Example"}),e.jsx(s,{language:"text",code:i?`다음 상황에 맞는 비즈니스 이메일을 작성해줘:

상황: 클라이언트가 요청한 기능 변경으로 인해 개발 일정이 2주 지연됨
받는 사람: 클라이언트 프로젝트 매니저 (김부장님)
톤: 정중하되 솔직하게
포함 내용:
- 지연 사유와 사과
- 수정된 타임라인
- 대안 제안 (부분 배포 가능)
- 다음 미팅 제안`:`Write a business email for this situation:

Situation: Development timeline delayed by 2 weeks due to client's feature change request
Recipient: Client's project manager (Mr. Kim)
Tone: Polite but honest
Include:
- Reason for delay and apology
- Updated timeline
- Alternative proposal (partial deployment possible)
- Suggest next meeting`}),e.jsx("h2",{children:i?"SNS 콘텐츠 생성":"Social Media Content"}),e.jsx(s,{language:"text",code:i?`우리 카페의 새로운 시즌 메뉴 "벚꽃 라떼"를 홍보하는 인스타그램 게시글을 작성해줘.

요구사항:
- 캡션 3가지 버전 (감성적 / 유머러스 / 정보형)
- 각 캡션에 적합한 해시태그 10개
- 스토리용 짧은 문구 2개
- 릴스 스크립트 1개 (15초 분량)`:`Create Instagram posts to promote our cafe's new seasonal menu item "Cherry Blossom Latte".

Requirements:
- 3 caption versions (emotional / humorous / informational)
- 10 relevant hashtags for each caption
- 2 short phrases for Stories
- 1 Reels script (15 seconds)`}),e.jsx(t,{type:"tip",title:i?"글쓰기 품질 높이기":"Improving Writing Quality",children:i?'초안을 받은 후 "더 자연스럽게 다듬어줘", "전문 용어를 줄여줘", "예시를 추가해줘" 등의 후속 요청으로 품질을 높일 수 있습니다. 한 번에 완벽한 결과를 기대하기보다 반복 수정이 효과적입니다.':'After receiving a draft, refine it with follow-up requests like "Make it more natural", "Reduce jargon", or "Add examples". Iterative refinement is more effective than expecting perfect results in one go.'}),e.jsx("h2",{children:i?"번역 활용 팁":"Translation Tips"}),e.jsxs("ul",{className:"guide-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:i?"맥락 제공":"Provide Context"})," — ",i?'"이것은 마케팅 브로셔입니다" 처럼 문서의 성격을 알려주면 번역 품질이 향상됩니다.':'Telling Gemini "This is a marketing brochure" improves translation quality.']}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"용어집 제공":"Provide Glossary"})," — ",i?"특정 용어의 번역 방식을 지정하면 일관된 번역을 얻을 수 있습니다.":"Specifying how to translate certain terms ensures consistency."]}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"대상 독자 명시":"Specify Target Audience"})," — ",i?'"10대를 위한 캐주얼한 번역" vs "법률 전문가를 위한 정확한 번역" 등 대상에 맞게 요청하세요.':'Request like "casual translation for teens" vs "precise translation for legal professionals".']})]})]});case"coding":return e.jsxs("div",{className:"guide-section",children:[e.jsx("h1",{children:i?"코딩 활용 가이드":"Coding with Gemini"}),e.jsx("p",{className:"guide-intro",children:i?"Gemini를 코드 생성, 디버깅, 코드 리뷰, 리팩토링, 문서화에 활용하는 방법을 알아봅니다. 실제 코드 예시와 효과적인 프롬프트를 제공합니다.":"Learn how to use Gemini for code generation, debugging, code review, refactoring, and documentation. Includes real code examples and effective prompts."}),e.jsx("h2",{children:i?"코드 생성":"Code Generation"}),e.jsx("p",{children:i?"구체적인 요구사항과 함께 코드를 요청하면 바로 사용할 수 있는 코드를 생성합니다.":"Request code with specific requirements to get ready-to-use code."}),e.jsx(s,{language:"text",code:i?`Python으로 다음 기능을 가진 REST API를 만들어줘:
- FastAPI 프레임워크 사용
- /users 엔드포인트 (CRUD)
- SQLAlchemy로 SQLite 연결
- Pydantic 모델로 입력 검증
- 에러 핸들링 포함
- 각 함수에 docstring 추가`:`Create a REST API in Python with these features:
- Use FastAPI framework
- /users endpoint (CRUD)
- SQLAlchemy with SQLite connection
- Pydantic models for input validation
- Include error handling
- Add docstrings to each function`}),e.jsx("p",{children:i?"Gemini가 생성하는 코드 예시:":"Example code generated by Gemini:"}),e.jsx(s,{language:"python",code:`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

app = FastAPI(title="User API")

# Database setup
engine = create_engine("sqlite:///users.db")
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

class UserDB(Base):
    """SQLAlchemy User model."""
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)

class UserCreate(BaseModel):
    """Pydantic schema for creating a user."""
    name: str
    email: EmailStr

class UserResponse(BaseModel):
    """Pydantic schema for user response."""
    id: int
    name: str
    email: str

Base.metadata.create_all(bind=engine)

@app.post("/users", response_model=UserResponse)
def create_user(user: UserCreate):
    """Create a new user."""
    db = SessionLocal()
    try:
        db_user = UserDB(name=user.name, email=user.email)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        db.close()

@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int):
    """Retrieve a user by ID."""
    db = SessionLocal()
    user = db.query(UserDB).filter(UserDB.id == user_id).first()
    db.close()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user`}),e.jsx("h2",{children:i?"디버깅":"Debugging"}),e.jsx("p",{children:i?"에러 메시지와 코드를 함께 제공하면 원인 분석과 해결책을 제시합니다.":"Provide the error message along with your code to get root cause analysis and solutions."}),e.jsx(s,{language:"text",code:i?`다음 코드에서 에러가 발생해. 원인을 분석하고 수정해줘.

에러 메시지:
TypeError: Cannot read properties of undefined (reading 'map')

코드:
\`\`\`javascript
function UserList({ data }: any) {
  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

data는 API에서 비동기로 받아오고 있어.`:`I'm getting an error in this code. Analyze the cause and fix it.

Error message:
TypeError: Cannot read properties of undefined (reading 'map')

Code:
\`\`\`javascript
function UserList({ data }: any) {
  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

data is being fetched asynchronously from an API.`}),e.jsx("h2",{children:i?"코드 리뷰":"Code Review"}),e.jsx(s,{language:"text",code:i?`다음 코드를 리뷰해줘. 다음 관점에서 분석해줘:

1. 보안 취약점
2. 성능 최적화 가능 여부
3. 코드 가독성 및 유지보수성
4. 에러 처리 적절성
5. 모범 사례(Best Practices) 준수 여부

심각도를 높음/중간/낮음으로 분류해서 표로 정리해줘.`:`Review this code and analyze it from these perspectives:

1. Security vulnerabilities
2. Performance optimization opportunities
3. Code readability and maintainability
4. Error handling adequacy
5. Best practices compliance

Classify severity as High/Medium/Low and organize in a table.`}),e.jsx("h2",{children:i?"리팩토링":"Refactoring"}),e.jsx(s,{language:"text",code:i?`다음 함수를 리팩토링해줘:
- SOLID 원칙을 적용해줘
- 함수를 작은 단위로 분리해줘
- 타입 힌트를 추가해줘
- 테스트하기 쉬운 구조로 변경해줘
- 변경 전후 비교를 보여줘`:`Refactor this function:
- Apply SOLID principles
- Split into smaller functions
- Add type hints
- Make it testable
- Show before/after comparison`}),e.jsx("h2",{children:i?"코딩 작업별 추천 프롬프트":"Recommended Prompts by Coding Task"}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i?"작업":"Task"}),e.jsx("th",{children:i?"핵심 프롬프트":"Key Prompt"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i?"단위 테스트 작성":"Unit Tests"}),e.jsx("td",{children:i?'"이 함수에 대한 pytest 단위 테스트를 작성해줘. 엣지 케이스도 포함해줘"':'"Write pytest unit tests for this function. Include edge cases"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"API 문서화":"API Docs"}),e.jsx("td",{children:i?'"이 API 엔드포인트들에 대한 OpenAPI (Swagger) 문서를 생성해줘"':'"Generate OpenAPI (Swagger) docs for these API endpoints"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"SQL 쿼리":"SQL Queries"}),e.jsx("td",{children:i?'"이 테이블 스키마를 기반으로 월별 매출 집계 쿼리를 작성해줘"':'"Write a monthly sales aggregation query based on this table schema"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"정규식":"Regex"}),e.jsx("td",{children:i?'"한국 전화번호 형식을 검증하는 정규식을 만들고 설명해줘"':'"Create and explain a regex that validates phone number formats"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"설정 파일":"Config Files"}),e.jsx("td",{children:i?'"Docker Compose 파일을 작성해줘: nginx + Node.js + PostgreSQL"':'"Write a Docker Compose file: nginx + Node.js + PostgreSQL"'})]})]})]})}),e.jsx(t,{type:"important",title:i?"코딩 활용 핵심 팁":"Key Coding Tips",children:i?"Gemini가 생성한 코드는 반드시 직접 테스트하세요. 특히 보안 관련 코드(인증, 암호화 등)는 전문가 검토가 필요합니다. 코드를 복붙하기 전에 로직을 이해하고, 프로젝트에 맞게 수정하세요.":"Always test code generated by Gemini yourself. Security-related code (auth, encryption) especially needs expert review. Understand the logic before copying and adapt it to your project."})]});case"research":return e.jsxs("div",{className:"guide-section",children:[e.jsx("h1",{children:i?"리서치 활용 가이드":"Research with Gemini"}),e.jsx("p",{className:"guide-intro",children:i?"Gemini를 활용하여 문서 분석, 데이터 종합, 문헌 조사, 경쟁 분석 등 리서치 작업을 효율적으로 수행하는 방법을 알아봅니다.":"Learn how to efficiently perform research tasks with Gemini, including document analysis, data synthesis, literature review, and competitive analysis."}),e.jsx("h2",{children:i?"문서 분석":"Document Analysis"}),e.jsx("p",{children:i?"Gemini는 PDF, 문서, 스프레드시트를 업로드하여 분석할 수 있습니다. 긴 문서도 한 번에 처리 가능합니다.":"Gemini can analyze uploaded PDFs, documents, and spreadsheets. It can process even long documents at once."}),e.jsx(s,{language:"text",code:i?`이 PDF 보고서를 분석해서 다음을 정리해줘:

1. 핵심 요약 (3줄)
2. 주요 데이터 포인트 (표로 정리)
3. 보고서의 주요 주장과 근거
4. 한계점 및 추가 조사 필요 사항
5. 실무에 적용할 수 있는 액션 아이템

[파일 업로드]`:`Analyze this PDF report and organize:

1. Executive summary (3 lines)
2. Key data points (in a table)
3. Main arguments and evidence
4. Limitations and areas needing further investigation
5. Actionable items for practical application

[Upload file]`}),e.jsx("h2",{children:i?"경쟁 분석":"Competitive Analysis"}),e.jsx(s,{language:"text",code:i?`다음 3개 제품의 경쟁 분석을 해줘: Notion, Obsidian, Logseq

분석 항목:
- 가격 정책 (무료/유료)
- 핵심 기능 비교
- 타겟 사용자
- 장단점
- 시장 포지셔닝

비교표와 함께 각 제품이 적합한 사용자 유형을 추천해줘.`:`Do a competitive analysis of these 3 products: Notion, Obsidian, Logseq

Analysis criteria:
- Pricing (free/paid)
- Core feature comparison
- Target users
- Pros and cons
- Market positioning

Include a comparison table and recommend which user types each product suits best.`}),e.jsx("h2",{children:i?"데이터 종합 및 분석":"Data Synthesis & Analysis"}),e.jsx(s,{language:"text",code:i?`다음 설문조사 데이터를 분석해줘:

[데이터 붙여넣기 또는 파일 업로드]

요청 사항:
1. 응답자 분포 분석 (연령, 성별, 직업)
2. 주요 트렌드와 패턴 도출
3. 교차 분석 (연령대별 선호도 차이)
4. 통계적 유의미성 확인
5. 시각화를 위한 차트 추천
6. 결론 및 제안 사항`:`Analyze this survey data:

[Paste data or upload file]

Requirements:
1. Respondent distribution analysis (age, gender, occupation)
2. Identify key trends and patterns
3. Cross-analysis (preference differences by age group)
4. Statistical significance check
5. Chart recommendations for visualization
6. Conclusions and recommendations`}),e.jsx("h2",{children:i?"리서치 활용 분야":"Research Use Cases"}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i?"분야":"Area"}),e.jsx("th",{children:i?"활용 방법":"How to Use"}),e.jsx("th",{children:i?"프롬프트 팁":"Prompt Tip"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i?"학술 리서치":"Academic Research"}),e.jsx("td",{children:i?"논문 요약, 방법론 비교, 문헌 정리":"Paper summary, methodology comparison, literature organization"}),e.jsx("td",{children:i?'"이 논문의 방법론을 비판적으로 분석해줘"':'"Critically analyze the methodology of this paper"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"시장 조사":"Market Research"}),e.jsx("td",{children:i?"시장 규모 추정, 트렌드 분석, SWOT":"Market sizing, trend analysis, SWOT"}),e.jsx("td",{children:i?'"한국 EdTech 시장의 SWOT 분석을 해줘"':'"Do a SWOT analysis of the Korean EdTech market"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"기술 리서치":"Tech Research"}),e.jsx("td",{children:i?"기술 비교, 아키텍처 분석, 도입 검토":"Tech comparison, architecture analysis, adoption review"}),e.jsx("td",{children:i?'"React vs Vue vs Svelte를 비교해줘"':'"Compare React vs Vue vs Svelte for our use case"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"법률/규제 조사":"Legal/Regulatory"}),e.jsx("td",{children:i?"규정 요약, 컴플라이언스 체크리스트":"Regulation summary, compliance checklist"}),e.jsx("td",{children:i?'"GDPR의 주요 요구사항을 체크리스트로 만들어줘"':'"Create a checklist of GDPR key requirements"'})]})]})]})}),e.jsx(t,{type:"warning",title:i?"리서치 시 주의사항":"Research Precautions",children:i?"Gemini의 학습 데이터에는 시점 제한이 있습니다. 최신 통계나 실시간 데이터가 필요한 경우 Google 검색 그라운딩을 활용하거나 직접 확인하세요. 학술 논문의 인용이나 구체적 수치는 반드시 원본을 검증하세요.":"Gemini's training data has a cutoff date. For the latest statistics or real-time data, use Google Search grounding or verify directly. Always verify citations and specific figures from academic papers against the originals."}),e.jsx("h2",{children:i?"문헌 조사 워크플로우":"Literature Review Workflow"}),e.jsxs("ul",{className:"guide-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:i?"1단계: 주제 정의":"Step 1: Define Topic"})," — ",i?'"[주제]에 대한 최근 연구 동향을 정리해줘"로 전체 맥락을 파악합니다.':'Get an overview with "Summarize recent research trends on [topic]".']}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"2단계: 핵심 논문 분석":"Step 2: Key Paper Analysis"})," — ",i?"개별 논문을 업로드하여 요약과 비판적 분석을 요청합니다.":"Upload individual papers for summary and critical analysis."]}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"3단계: 비교 종합":"Step 3: Comparative Synthesis"})," — ",i?'"이 5개 논문의 방법론과 결론을 비교 분석해줘"로 종합합니다.':'Synthesize with "Compare the methodologies and conclusions of these 5 papers".']}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"4단계: 갭 분석":"Step 4: Gap Analysis"})," — ",i?'"기존 연구에서 다루지 않은 부분은 무엇인가?"로 연구 기회를 발견합니다.':'Discover research opportunities with "What gaps exist in existing research?".']})]})]});case"creative":return e.jsxs("div",{className:"guide-section",children:[e.jsx("h1",{children:i?"크리에이티브 활용 가이드":"Creative Work with Gemini"}),e.jsx("p",{className:"guide-intro",children:i?"Gemini의 이미지 생성(Imagen), 브레인스토밍, 스토리텔링, 마케팅 카피 작성 등 크리에이티브 작업 활용법을 알아봅니다.":"Learn how to use Gemini for creative tasks including image generation (Imagen), brainstorming, storytelling, and marketing copywriting."}),e.jsx("h2",{children:i?"이미지 생성 (Imagen 3)":"Image Generation (Imagen 3)"}),e.jsx("p",{children:i?"Gemini는 Google의 Imagen 3 모델을 사용하여 텍스트 설명으로 고품질 이미지를 생성할 수 있습니다. 대화 중에 자연스럽게 이미지 생성을 요청할 수 있습니다.":"Gemini can generate high-quality images from text descriptions using Google's Imagen 3 model. You can naturally request image generation during a conversation."}),e.jsx(s,{language:"text",code:i?`다음 이미지를 생성해줘:

"도시 옥상 정원에서 노을을 바라보는 고양이의 수채화 스타일 일러스트.
따뜻한 오렌지색과 보라색 색감. 스튜디오 지브리 느낌.
배경에는 서울 스카이라인이 보임."`:`Generate the following image:

"A watercolor-style illustration of a cat watching the sunset from a city rooftop garden.
Warm orange and purple tones. Studio Ghibli feel.
Seoul skyline visible in the background."`}),e.jsx("h2",{children:i?"이미지 프롬프트 작성 팁":"Image Prompt Tips"}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i?"요소":"Element"}),e.jsx("th",{children:i?"설명":"Description"}),e.jsx("th",{children:i?"예시":"Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i?"주제":"Subject"}),e.jsx("td",{children:i?"이미지의 핵심 대상":"Main subject of the image"}),e.jsx("td",{children:i?'"책을 읽는 소녀"':'"A girl reading a book"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"스타일":"Style"}),e.jsx("td",{children:i?"예술적 스타일":"Artistic style"}),e.jsx("td",{children:i?'"수채화", "미니멀리스트", "포토리얼리스틱"':'"Watercolor", "Minimalist", "Photorealistic"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"색감":"Colors"}),e.jsx("td",{children:i?"색상 팔레트":"Color palette"}),e.jsx("td",{children:i?'"파스텔 톤", "모노크롬", "비비드한 원색"':'"Pastel tones", "Monochrome", "Vivid primary colors"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"분위기":"Mood"}),e.jsx("td",{children:i?"전반적인 느낌":"Overall feeling"}),e.jsx("td",{children:i?'"몽환적인", "에너지 넘치는", "고요한"':'"Dreamy", "Energetic", "Serene"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"구도":"Composition"}),e.jsx("td",{children:i?"카메라 앵글/배치":"Camera angle/layout"}),e.jsx("td",{children:i?'"탑뷰", "클로즈업", "와이드샷"':'"Top view", "Close-up", "Wide shot"'})]})]})]})}),e.jsx("h2",{children:i?"브레인스토밍":"Brainstorming"}),e.jsx(s,{language:"text",code:i?`우리 팀이 새로운 건강관리 앱을 기획하고 있어. 브레인스토밍을 도와줘.

배경:
- 타겟: 30-50대 직장인
- 핵심 가치: 바쁜 일상에서도 쉽게 건강 관리
- 차별점이 필요함

요청:
1. 앱 이름 아이디어 10개 (한국어/영어)
2. 핵심 기능 아이디어 15개
3. 수익화 전략 5가지
4. 경쟁 앱 대비 차별화 포인트 3가지
5. 마케팅 슬로건 5개`:`Our team is planning a new health management app. Help us brainstorm.

Background:
- Target: Working professionals aged 30-50
- Core value: Easy health management despite busy schedules
- Need differentiation

Requests:
1. 10 app name ideas
2. 15 core feature ideas
3. 5 monetization strategies
4. 3 differentiation points vs competitors
5. 5 marketing slogans`}),e.jsx("h2",{children:i?"스토리텔링":"Storytelling"}),e.jsx(s,{language:"text",code:i?`다음 설정으로 짧은 이야기를 써줘:

장르: SF / 미스터리
배경: 2050년, AI가 일상화된 서울
주인공: 30대 AI 윤리 감사관
갈등: 자신이 감사하는 AI가 인간보다 더 윤리적인 판단을 내리는 상황
분량: 2000자
문체: 간결하고 긴장감 있는 하드보일드`:`Write a short story with these settings:

Genre: Sci-Fi / Mystery
Setting: Seoul in 2050, where AI is commonplace
Protagonist: An AI ethics auditor in their 30s
Conflict: The AI they're auditing makes more ethical decisions than humans
Length: 2000 words
Style: Concise, tense hard-boiled`}),e.jsx("h2",{children:i?"마케팅 카피":"Marketing Copy"}),e.jsx(s,{language:"text",code:i?`다음 제품의 마케팅 카피를 작성해줘:

제품: 무선 노이즈 캔슬링 이어폰 "SoundPure Pro"
타겟: 20-30대 직장인, 음악 애호가
핵심 셀링 포인트: 40시간 배터리, 업계 최고 ANC, 10g 초경량
톤: 세련되고 자신감 있는

필요한 카피:
1. 메인 헤드라인 (3가지 버전)
2. 서브 헤드라인
3. 제품 설명 (150자)
4. 키 베네핏 3가지 (각 한 줄)
5. CTA (Call to Action) 문구`:`Write marketing copy for this product:

Product: Wireless noise-canceling earphones "SoundPure Pro"
Target: Professionals aged 20-30, music lovers
Key selling points: 40-hour battery, best-in-class ANC, 10g ultra-light
Tone: Sophisticated and confident

Copy needed:
1. Main headline (3 versions)
2. Sub-headline
3. Product description (150 chars)
4. 3 key benefits (one line each)
5. CTA (Call to Action) phrase`}),e.jsx(t,{type:"tip",title:i?"크리에이티브 작업 팁":"Creative Work Tips",children:i?'크리에이티브 작업에서는 "이것도 포함하고, 저것도 포함해줘"보다 구체적인 제약 조건을 주는 것이 더 좋은 결과를 낳습니다. "딱 3가지만", "100자 이내로", "초등학생도 이해할 수 있게" 같은 제약이 창의성을 자극합니다.':'For creative work, specific constraints produce better results than "include everything". Constraints like "exactly 3 items", "under 100 characters", or "understandable by a 5th grader" stimulate creativity.'})]});case"productivity":return e.jsxs("div",{className:"guide-section",children:[e.jsx("h1",{children:i?"생산성 향상 가이드":"Productivity with Gemini"}),e.jsx("p",{className:"guide-intro",children:i?"Gemini를 활용하여 회의록 정리, 작업 계획, 이메일 초안, 스프레드시트 수식 등 업무 생산성을 높이는 실전 방법을 알아봅니다.":"Learn practical methods to boost your work productivity with Gemini, including meeting notes, task planning, email drafting, and spreadsheet formulas."}),e.jsx("h2",{children:i?"회의록 정리":"Meeting Notes"}),e.jsx(s,{language:"text",code:i?`다음 회의 녹취록을 정리해줘:

[녹취록 또는 메모 붙여넣기]

정리 형식:
1. 회의 요약 (3줄)
2. 주요 논의 사항 (번호 매기기)
3. 결정 사항 (확정된 것만)
4. 액션 아이템 (담당자 + 기한 + 내용)
5. 미해결 이슈
6. 다음 회의 안건`:`Organize these meeting notes:

[Paste transcript or notes]

Format:
1. Meeting summary (3 lines)
2. Key discussion points (numbered)
3. Decisions made (confirmed only)
4. Action items (person + deadline + content)
5. Unresolved issues
6. Next meeting agenda`}),e.jsx("h2",{children:i?"작업 계획 수립":"Task Planning"}),e.jsx(s,{language:"text",code:i?`다음 프로젝트의 작업 계획을 수립해줘:

프로젝트: 회사 웹사이트 리뉴얼
기간: 8주
팀: 디자이너 2명, 개발자 3명, PM 1명
요구사항: 반응형 디자인, CMS 도입, SEO 최적화

다음 형식으로 정리해줘:
- 주차별 마일스톤
- 각 태스크별 담당자 배정
- 의존성 관계
- 리스크 포인트와 대응 방안`:`Create a work plan for this project:

Project: Company website renewal
Duration: 8 weeks
Team: 2 designers, 3 developers, 1 PM
Requirements: Responsive design, CMS integration, SEO optimization

Format as:
- Weekly milestones
- Task assignments per person
- Dependencies
- Risk points and mitigation plans`}),e.jsx("h2",{children:i?"스프레드시트 수식":"Spreadsheet Formulas"}),e.jsx(s,{language:"text",code:i?`Google Sheets에서 다음 기능을 하는 수식을 만들어줘:

1. A열의 날짜를 기준으로 B열 매출을 월별로 합산
2. 전월 대비 성장률 계산
3. 상위 10% 매출 거래를 조건부 서식으로 강조
4. VLOOKUP으로 제품 코드에 해당하는 제품명을 다른 시트에서 가져오기

각 수식에 대해 설명도 추가해줘.`:`Create these Google Sheets formulas:

1. Sum column B sales by month based on column A dates
2. Calculate month-over-month growth rate
3. Conditional formatting to highlight top 10% sales transactions
4. VLOOKUP to pull product names from another sheet by product code

Add explanations for each formula.`}),e.jsx("p",{children:i?"Gemini가 제안하는 수식 예시:":"Example formulas Gemini might suggest:"}),e.jsx(s,{language:"text",code:`=SUMPRODUCT((MONTH(A2:A100)=1)*(YEAR(A2:A100)=2025)*B2:B100)

=QUERY(A:B, "SELECT MONTH(A)+1, SUM(B) WHERE A IS NOT NULL GROUP BY MONTH(A)+1 LABEL MONTH(A)+1 'Month', SUM(B) 'Total Sales'")

=(C2-C1)/C1*100

=VLOOKUP(D2, Products!A:B, 2, FALSE)`}),e.jsx("h2",{children:i?"생산성 활용 시나리오":"Productivity Scenarios"}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i?"시나리오":"Scenario"}),e.jsx("th",{children:i?"프롬프트 예시":"Prompt Example"}),e.jsx("th",{children:i?"예상 시간 절약":"Est. Time Saved"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i?"회의록 정리":"Meeting Notes"}),e.jsx("td",{children:i?'"이 녹취록을 액션 아이템 중심으로 정리해줘"':'"Organize this transcript focusing on action items"'}),e.jsx("td",{children:i?"30분 → 5분":"30min → 5min"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"주간 보고서":"Weekly Report"}),e.jsx("td",{children:i?'"이 업무 로그로 주간 보고서를 작성해줘"':'"Write a weekly report from this work log"'}),e.jsx("td",{children:i?"1시간 → 10분":"1hr → 10min"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"이메일 회신":"Email Replies"}),e.jsx("td",{children:i?'"이 이메일에 긍정적으로 회신하는 초안을 작성해줘"':'"Draft a positive reply to this email"'}),e.jsx("td",{children:i?"15분 → 2분":"15min → 2min"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"데이터 정리":"Data Cleanup"}),e.jsx("td",{children:i?'"이 CSV 데이터에서 중복을 제거하고 정렬하는 코드를 작성해줘"':'"Write code to remove duplicates and sort this CSV data"'}),e.jsx("td",{children:i?"2시간 → 15분":"2hrs → 15min"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"프레젠테이션 구성":"Presentation Outline"}),e.jsx("td",{children:i?'"이 주제로 15분 발표 슬라이드 구성을 잡아줘"':'"Create a slide outline for a 15-minute presentation on this topic"'}),e.jsx("td",{children:i?"1시간 → 10분":"1hr → 10min"})]})]})]})}),e.jsx(t,{type:"tip",title:i?"일상 업무 자동화 팁":"Daily Workflow Automation Tips",children:i?"반복적인 업무 패턴을 파악하고 Gemini 프롬프트 템플릿을 만들어두세요. 예: 매주 월요일 주간 보고서 작성, 매일 이메일 정리 등. Gems를 활용하면 자주 사용하는 프롬프트를 저장해 둘 수 있습니다.":"Identify repetitive work patterns and create Gemini prompt templates. E.g., weekly report on Mondays, daily email organization. Use Gems to save frequently used prompts."})]});case"advanced":return e.jsxs("div",{className:"guide-section",children:[e.jsx("h1",{children:i?"고급 활용법":"Advanced Tips"}),e.jsx("p",{className:"guide-intro",children:i?"Gems, Extensions, Google Workspace 통합, 모바일 앱 팁 등 Gemini의 고급 기능을 마스터하여 활용도를 극대화하는 방법을 알아봅니다.":"Master Gemini's advanced features including Gems, Extensions, Google Workspace integration, and mobile app tips to maximize your productivity."}),e.jsx("h2",{children:i?"Gems (커스텀 Gemini)":"Gems (Custom Gemini)"}),e.jsx("p",{children:i?"Gems는 특정 용도에 맞게 미리 설정된 Gemini 인스턴스입니다. 반복적으로 사용하는 역할, 톤, 지시사항을 저장하여 매번 프롬프트를 작성할 필요 없이 바로 활용할 수 있습니다.":"Gems are pre-configured Gemini instances for specific purposes. Save frequently used roles, tones, and instructions so you can use them instantly without writing prompts each time."}),e.jsx("h3",{children:i?"Gem 만드는 방법":"How to Create a Gem"}),e.jsxs("ul",{className:"guide-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:i?"1단계":"Step 1"})," — ",i?'gemini.google.com 좌측 메뉴에서 "Gem manager"를 클릭합니다.':'Click "Gem manager" in the left menu on gemini.google.com.']}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"2단계":"Step 2"})," — ",i?'"New Gem"을 클릭하고 이름과 설명을 입력합니다.':'Click "New Gem" and enter a name and description.']}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"3단계":"Step 3"})," — ",i?"시스템 지시사항을 자세히 작성합니다 (역할, 톤, 규칙, 출력 형식 등).":"Write detailed system instructions (role, tone, rules, output format, etc.)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"4단계":"Step 4"})," — ",i?"저장하면 좌측 메뉴에서 바로 접근할 수 있습니다.":"Save it and access it directly from the left menu."]})]}),e.jsx("h3",{children:i?"Gem 활용 예시":"Gem Examples"}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["Gem ",i?"이름":"Name"]}),e.jsx("th",{children:i?"용도":"Purpose"}),e.jsx("th",{children:i?"시스템 지시사항 예시":"System Instruction Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i?"코드 리뷰어":"Code Reviewer"}),e.jsx("td",{children:i?"코드 리뷰 전문":"Code review specialist"}),e.jsx("td",{children:i?'"시니어 개발자로서 코드를 리뷰해. 보안, 성능, 가독성 관점에서 분석하고 개선안을 제시해."':'"As a senior developer, review code. Analyze from security, performance, readability perspectives and suggest improvements."'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"마케팅 카피라이터":"Marketing Copywriter"}),e.jsx("td",{children:i?"마케팅 콘텐츠 생성":"Marketing content"}),e.jsx("td",{children:i?'"당신은 디지털 마케팅 전문 카피라이터입니다. 트렌디하고 임팩트 있는 카피를 작성하세요."':'"You are a digital marketing copywriter. Write trendy, impactful copy."'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"영어 튜터":"English Tutor"}),e.jsx("td",{children:i?"영어 학습 도우미":"English learning helper"}),e.jsx("td",{children:i?'"영어 회화 튜터로서 대화해. 문법 오류를 교정하고, 더 자연스러운 표현을 제안해."':'"Converse as an English tutor. Correct grammar errors and suggest more natural expressions."'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:i?"회의 비서":"Meeting Secretary"}),e.jsx("td",{children:i?"회의록 정리 전문":"Meeting minutes specialist"}),e.jsx("td",{children:i?'"회의 내용을 체계적으로 정리해. 항상 액션 아이템, 결정 사항, 담당자를 구분해서 출력해."':'"Organize meeting content systematically. Always separate action items, decisions, and assignees."'})]})]})]})}),e.jsx(t,{type:"tip",title:i?"Gem 활용 팁":"Gem Tips",children:i?'Gem의 시스템 지시사항은 구체적일수록 좋습니다. "항상 한국어로 응답해", "코드 블록에는 항상 언어를 명시해", "표 형식으로 정리해" 같은 세부 규칙을 추가하면 일관된 결과를 얻을 수 있습니다.':'The more specific your Gem system instructions, the better. Add detailed rules like "Always respond in English", "Always specify language in code blocks", "Organize in table format" for consistent results.'}),e.jsx("h2",{children:i?"Extensions (확장 기능)":"Extensions"}),e.jsx("p",{children:i?"Gemini Extensions는 외부 서비스와 연동하여 Gemini의 기능을 확장합니다. 대화 중에 자연스럽게 사용할 수 있습니다.":"Gemini Extensions connect with external services to expand Gemini's capabilities. They can be used naturally during conversations."}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Extension"}),e.jsx("th",{children:i?"기능":"Function"}),e.jsx("th",{children:i?"사용 예시":"Usage Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@YouTube"})}),e.jsx("td",{children:i?"YouTube 영상 검색 및 요약":"YouTube video search and summary"}),e.jsx("td",{children:i?'"@YouTube React 18 새 기능에 대한 영상을 찾아서 요약해줘"':'"@YouTube Find and summarize videos about React 18 new features"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Google Maps"})}),e.jsx("td",{children:i?"장소 검색, 경로 안내":"Place search, directions"}),e.jsx("td",{children:i?'"@Google Maps 강남역 근처 평점 좋은 이탈리안 레스토랑 추천해줘"':'"@Google Maps Recommend highly-rated Italian restaurants near Gangnam Station"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Google Flights"})}),e.jsx("td",{children:i?"항공편 검색, 가격 비교":"Flight search, price comparison"}),e.jsx("td",{children:i?'"@Google Flights 다음 주 서울에서 도쿄 가는 저렴한 항공편 찾아줘"':'"@Google Flights Find cheap flights from Seoul to Tokyo next week"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Google Hotels"})}),e.jsx("td",{children:i?"호텔 검색, 비교":"Hotel search, comparison"}),e.jsx("td",{children:i?'"@Google Hotels 도쿄 시부야 근처 1박 10만원 이하 호텔 찾아줘"':'"@Google Hotels Find hotels near Shibuya Tokyo under $100/night"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Google Workspace"})}),e.jsx("td",{children:i?"Gmail, Drive, Docs 연동":"Gmail, Drive, Docs integration"}),e.jsx("td",{children:i?'"@Google Workspace 이번 주 받은 이메일 중 중요한 것을 정리해줘"':'"@Google Workspace Summarize important emails I received this week"'})]})]})]})}),e.jsx("h2",{children:i?"Google Workspace 통합":"Google Workspace Integration"}),e.jsx("p",{children:i?"Gemini Advanced (Google One AI Premium) 사용자는 Google Workspace 앱 내에서 직접 Gemini를 사용할 수 있습니다.":"Gemini Advanced (Google One AI Premium) users can use Gemini directly within Google Workspace apps."}),e.jsx("div",{className:"guide-table-wrapper",children:e.jsxs("table",{className:"guide-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:i?"앱":"App"}),e.jsx("th",{children:i?"주요 기능":"Key Features"}),e.jsx("th",{children:i?"활용 예시":"Usage Example"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Google Docs"})}),e.jsx("td",{children:i?"글 작성 보조, 요약, 톤 변경":"Writing assistance, summarization, tone change"}),e.jsx("td",{children:i?'"이 문서를 더 전문적인 톤으로 다시 작성해줘"':'"Rewrite this document in a more professional tone"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Google Sheets"})}),e.jsx("td",{children:i?"데이터 분석, 수식 생성, 차트 추천":"Data analysis, formula creation, chart recommendations"}),e.jsx("td",{children:i?'"이 데이터에서 트렌드를 분석하고 차트를 만들어줘"':'"Analyze trends in this data and create a chart"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Google Slides"})}),e.jsx("td",{children:i?"슬라이드 생성, 이미지 제작, 발표 노트":"Slide creation, image generation, speaker notes"}),e.jsx("td",{children:i?'"이 주제로 10장짜리 프레젠테이션을 만들어줘"':'"Create a 10-slide presentation on this topic"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Gmail"})}),e.jsx("td",{children:i?"이메일 작성, 회신 초안, 요약":"Email composition, reply drafts, summarization"}),e.jsx("td",{children:i?'"이 이메일 스레드를 요약하고 회신 초안을 작성해줘"':'"Summarize this email thread and draft a reply"'})]})]})]})}),e.jsx("h2",{children:i?"모바일 앱 활용 팁":"Mobile App Tips"}),e.jsxs("ul",{className:"guide-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:i?"음성 대화":"Voice Conversation"})," — ",i?"마이크 아이콘을 눌러 음성으로 대화할 수 있습니다. 이동 중이나 운전 중에 유용합니다.":"Tap the microphone icon to converse by voice. Useful while commuting or driving."]}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"카메라 활용":"Camera Input"})," — ",i?"카메라로 사진을 찍어 바로 분석을 요청할 수 있습니다. 문서 스캔, 제품 정보 확인, 식물 식별 등에 활용하세요.":"Take photos with your camera for instant analysis. Use for document scanning, product info, plant identification, etc."]}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"화면 공유 (Android)":"Screen Sharing (Android)"})," — ",i?"Android에서는 현재 화면을 Gemini와 공유하여 화면 내용에 대해 질문할 수 있습니다.":"On Android, share your current screen with Gemini to ask about screen content."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gemini Live"})," — ",i?"자연스러운 실시간 음성 대화가 가능합니다. 중간에 끊지 않아도 되고, 자연스럽게 주제를 바꿀 수 있습니다.":"Have natural real-time voice conversations. No need to wait for pauses, and you can change topics naturally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:i?"위젯":"Widget"})," — ",i?"홈 화면에 Gemini 위젯을 추가하면 앱을 열지 않고도 빠르게 질문할 수 있습니다.":"Add a Gemini widget to your home screen for quick questions without opening the app."]})]}),e.jsx(t,{type:"important",title:i?"고급 사용자를 위한 종합 팁":"Comprehensive Tips for Advanced Users",children:i?e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"1. 프롬프트 체이닝:"})," 복잡한 작업을 여러 단계로 나누어 순차적으로 요청하세요.",e.jsx("br",{}),e.jsx("strong",{children:"2. 파일 활용:"})," 텍스트보다 파일을 업로드하면 더 정확한 분석이 가능합니다.",e.jsx("br",{}),e.jsx("strong",{children:"3. 출력 형식 지정:"}),' "표로", "JSON으로", "마크다운으로" 등 원하는 형식을 명시하세요.',e.jsx("br",{}),e.jsx("strong",{children:"4. 반복 작업 템플릿화:"})," 자주 사용하는 프롬프트는 Gems로 만들어 저장하세요.",e.jsx("br",{}),e.jsx("strong",{children:"5. 멀티모달 활용:"})," 텍스트만 쓰지 말고, 이미지, PDF, 스프레드시트를 함께 활용하세요."]}):e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"1. Prompt Chaining:"})," Break complex tasks into multiple sequential steps.",e.jsx("br",{}),e.jsx("strong",{children:"2. File Upload:"})," Uploading files gives more accurate analysis than pasting text.",e.jsx("br",{}),e.jsx("strong",{children:"3. Specify Output Format:"}),' Explicitly request "as a table", "in JSON", "in markdown", etc.',e.jsx("br",{}),e.jsx("strong",{children:"4. Template Repetitive Tasks:"})," Save frequently used prompts as Gems.",e.jsx("br",{}),e.jsx("strong",{children:"5. Go Multimodal:"})," Don't just use text; leverage images, PDFs, and spreadsheets together."]})})]});default:return null}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(x,{title:i?"Gemini 실전 활용 가이드":"Practical Gemini Usage Guide",path:"/gemini-learn"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:i?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:r.map(n=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${l===n.id?"active":""}`,onClick:()=>c(n.id),children:[e.jsx("i",{className:`fa-solid ${n.icon} nav-icon`}),i?n.ko:n.en]})},n.id))})]}),e.jsxs("div",{className:"guide-content",children:[m(),e.jsxs("div",{className:"guide-nav-buttons",children:[o&&e.jsxs("button",{className:"guide-nav-btn prev",onClick:()=>c(o.id),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"}),i?o.ko:o.en]}),d&&e.jsxs("button",{className:"guide-nav-btn next",onClick:()=>c(d.id),children:[i?d.ko:d.en,e.jsx("i",{className:"fa-solid fa-arrow-right"})]})]})]})]})]})}export{w as default};
