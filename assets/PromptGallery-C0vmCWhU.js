import{j as e}from"./markdown-Cxpyo6vT.js";import{b as a}from"./vendor-Cbm2kc8j.js";import{u as b}from"./index-40_ia9E6.js";import{S as P}from"./SEOHead-DYQLs8MZ.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const m=[{key:"all",ko:"전체",en:"All"},{key:"code",ko:"코드",en:"Code"},{key:"writing",ko:"글쓰기",en:"Writing"},{key:"analysis",ko:"분석",en:"Analysis"},{key:"creative",ko:"창작",en:"Creative"},{key:"business",ko:"비즈니스",en:"Business"}],r=[{category:"code",title:{ko:"Python 코드 리뷰어",en:"Python Code Reviewer"},desc:{ko:"Python 코드의 버그, 성능, 스타일을 분석하는 전문 리뷰어",en:"Expert reviewer for Python code bugs, performance, and style"},prompt:{ko:`당신은 시니어 Python 개발자입니다. 제가 보내는 코드를 다음 기준으로 리뷰해 주세요:

1. **버그**: 잠재적 버그나 에러 케이스
2. **성능**: 시간/공간 복잡도 개선점
3. **가독성**: 변수명, 함수 구조, 주석
4. **Python 관례**: PEP 8, Pythonic한 표현

각 항목별로 구체적인 코드 수정 예시를 포함해 주세요.`,en:`You are a senior Python developer. Review my code based on:

1. **Bugs**: Potential bugs or edge cases
2. **Performance**: Time/space complexity improvements
3. **Readability**: Variable names, function structure, comments
4. **Python conventions**: PEP 8, Pythonic expressions

Include specific code fix examples for each item.`}},{category:"code",title:{ko:"API 설계 도우미",en:"API Design Helper"},desc:{ko:"RESTful API 엔드포인트 설계를 도와주는 프롬프트",en:"Helps design RESTful API endpoints"},prompt:{ko:`다음 요구사항에 맞는 RESTful API를 설계해 주세요:

- 리소스: [리소스명]
- 주요 기능: CRUD + [추가 기능]
- 인증: JWT 토큰

각 엔드포인트에 대해: HTTP 메서드, URL 패턴, 요청/응답 JSON 예시, 에러 코드를 포함해 주세요.`,en:`Design a RESTful API for the following requirements:

- Resource: [resource name]
- Key features: CRUD + [additional features]
- Auth: JWT token

For each endpoint include: HTTP method, URL pattern, request/response JSON examples, and error codes.`}},{category:"writing",title:{ko:"기술 블로그 작성",en:"Tech Blog Writer"},desc:{ko:"구조화된 기술 블로그 포스트를 작성하는 프롬프트",en:"Write structured technical blog posts"},prompt:{ko:`다음 주제에 대한 기술 블로그 포스트를 작성해 주세요:

주제: [주제]
대상 독자: [초급/중급/고급]

구성:
1. 흥미로운 도입부
2. 핵심 개념 설명 (비유 활용)
3. 코드 예제 (주석 포함)
4. 실전 활용 팁
5. 마무리 및 다음 학습 안내

톤: 전문적이지만 친근하게, 1인칭 사용`,en:`Write a technical blog post about:

Topic: [topic]
Target audience: [beginner/intermediate/advanced]

Structure:
1. Engaging introduction
2. Core concepts (with analogies)
3. Code examples (with comments)
4. Practical tips
5. Conclusion with next steps

Tone: Professional but friendly, first person`}},{category:"writing",title:{ko:"보고서 요약",en:"Report Summarizer"},desc:{ko:"긴 문서를 경영진용 요약 보고서로 변환",en:"Transform long documents into executive summaries"},prompt:{ko:`다음 문서를 경영진 요약(Executive Summary) 형식으로 변환해 주세요:

형식:
- 한 줄 요약 (1문장)
- 핵심 발견사항 (3~5개 불릿포인트)
- 주요 수치/데이터
- 권장 액션 아이템 (우선순위 포함)
- 리스크 요인

[문서 내용]`,en:`Convert the following document into an Executive Summary format:

Format:
- One-line summary (1 sentence)
- Key findings (3-5 bullet points)
- Key metrics/data
- Recommended action items (with priority)
- Risk factors

[Document content]`}},{category:"analysis",title:{ko:"경쟁사 분석",en:"Competitor Analysis"},desc:{ko:"체계적인 경쟁사 분석 프레임워크",en:"Systematic competitor analysis framework"},prompt:{ko:`다음 정보를 바탕으로 경쟁사 분석을 수행해 주세요:

우리 제품: [제품명]
경쟁사: [경쟁사 목록]

분석 항목:
1. SWOT 분석 (각 경쟁사)
2. 기능 비교 매트릭스
3. 가격 전략 비교
4. 시장 포지셔닝 맵
5. 우리의 차별화 전략 제안

표와 차트 형식으로 정리해 주세요.`,en:`Perform competitor analysis based on:

Our product: [product name]
Competitors: [competitor list]

Analysis:
1. SWOT analysis (each competitor)
2. Feature comparison matrix
3. Pricing strategy comparison
4. Market positioning map
5. Our differentiation strategy

Organize in tables and charts.`}},{category:"analysis",title:{ko:"데이터 인사이트 추출",en:"Data Insight Extraction"},desc:{ko:"데이터셋에서 의미 있는 인사이트를 도출하는 프롬프트",en:"Extract meaningful insights from datasets"},prompt:{ko:`다음 데이터를 분석하고 인사이트를 도출해 주세요:

분석 단계:
1. 데이터 개요 및 기본 통계
2. 주요 트렌드 및 패턴
3. 이상치 탐지 및 원인 분석
4. 상관관계 분석
5. 예측 및 전망
6. 비즈니스 액션 제안

시각화 제안도 포함해 주세요.

[데이터]`,en:`Analyze the following data and derive insights:

Analysis steps:
1. Data overview and basic statistics
2. Key trends and patterns
3. Outlier detection and cause analysis
4. Correlation analysis
5. Predictions and forecasts
6. Business action suggestions

Include visualization recommendations.

[Data]`}},{category:"creative",title:{ko:"스토리 생성기",en:"Story Generator"},desc:{ko:"설정에 따라 창의적인 단편 스토리를 생성",en:"Generate creative short stories based on settings"},prompt:{ko:`다음 설정으로 흥미로운 단편 스토리를 작성해 주세요:

장르: [SF/판타지/미스터리/로맨스]
배경: [시대, 장소]
주인공: [캐릭터 설명]
핵심 갈등: [갈등 요소]

요구사항:
- 강렬한 첫 문장으로 시작
- 감각적 묘사 포함
- 반전이 있는 결말
- 약 1000자 분량`,en:`Write an engaging short story with these settings:

Genre: [Sci-fi/Fantasy/Mystery/Romance]
Setting: [era, place]
Protagonist: [character description]
Core conflict: [conflict element]

Requirements:
- Start with a powerful first sentence
- Include sensory descriptions
- Twist ending
- About 500 words`}},{category:"creative",title:{ko:"마케팅 카피",en:"Marketing Copy"},desc:{ko:"제품/서비스 마케팅 카피를 다양한 톤으로 생성",en:"Generate marketing copy in various tones"},prompt:{ko:`다음 제품의 마케팅 카피를 작성해 주세요:

제품: [제품명]
특징: [핵심 특징 3개]
타겟: [타겟 고객]

작성할 카피:
1. 헤드라인 (5개 변형)
2. 서브 헤드라인
3. 제품 설명 (50자/100자/200자)
4. CTA 문구 (3개)
5. SNS 포스트 (인스타그램/트위터)`,en:`Write marketing copy for:

Product: [product name]
Features: [3 key features]
Target: [target audience]

Copy needed:
1. Headlines (5 variations)
2. Sub-headline
3. Product description (50/100/200 chars)
4. CTA phrases (3)
5. Social posts (Instagram/Twitter)`}},{category:"business",title:{ko:"비즈니스 이메일",en:"Business Email"},desc:{ko:"상황별 전문적인 비즈니스 이메일 작성",en:"Write professional business emails by situation"},prompt:{ko:`다음 상황에 맞는 비즈니스 이메일을 작성해 주세요:

상황: [이메일 상황 - 제안/요청/감사/사과/후속 등]
받는 사람: [관계 - 고객/파트너/상사/팀원]
핵심 메시지: [전달할 내용]

요구사항:
- 명확한 제목
- 적절한 인사말
- 본론은 3문단 이내
- 구체적인 CTA
- 전문적이지만 따뜻한 톤`,en:`Write a business email for:

Situation: [proposal/request/thank you/apology/follow-up]
Recipient: [relationship - client/partner/manager/teammate]
Key message: [content to deliver]

Requirements:
- Clear subject line
- Appropriate greeting
- Body within 3 paragraphs
- Specific CTA
- Professional but warm tone`}},{category:"business",title:{ko:"회의록 정리",en:"Meeting Notes Organizer"},desc:{ko:"회의 내용을 체계적으로 정리하는 프롬프트",en:"Systematically organize meeting content"},prompt:{ko:`다음 회의 내용을 정리해 주세요:

형식:
## 회의 요약
- 일시:
- 참석자:
- 핵심 안건:

## 논의 내용
(주제별로 정리)

## 결정 사항
(번호 매기기)

## 액션 아이템
| 담당자 | 내용 | 기한 |

## 다음 회의 안건

[회의 내용]`,en:`Organize the following meeting content:

Format:
## Meeting Summary
- Date:
- Attendees:
- Key agenda:

## Discussion Points
(Organized by topic)

## Decisions Made
(Numbered)

## Action Items
| Owner | Task | Deadline |

## Next Meeting Agenda

[Meeting content]`}}];function j(){const{language:u}=b(),t=u==="ko",[i,g]=a.useState("all"),[y,h]=a.useState(null),[c,l]=a.useState(null),f=a.useMemo(()=>i==="all"?r:r.filter(n=>n.category===i),[i]),k=(n,d)=>{navigator.clipboard.writeText(n).then(()=>{l(d),setTimeout(()=>l(null),2e3)}).catch(()=>{})};return e.jsxs("div",{className:"prompt-gallery-page",children:[e.jsx(P,{title:t?"프롬프트 갤러리":"Prompt Gallery",path:"/prompt-gallery"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:t?"프롬프트 갤러리":"Prompt Gallery"}),e.jsx("p",{className:"page-subtitle",children:t?"Gemini AI에 최적화된 프롬프트 모음. 복사하여 바로 사용하세요.":"Curated prompts optimized for Gemini AI. Copy and use right away."})]}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24},children:m.map(n=>e.jsx("button",{className:`chip ${i===n.key?"active":""}`,onClick:()=>g(n.key),children:t?n.ko:n.en},n.key))}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:16},children:f.map((n,d)=>{var p;const o=r.indexOf(n),s=y===o;return e.jsxs("div",{className:"card",style:{padding:20,display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[e.jsx("span",{className:"chip",style:{fontSize:"0.7rem"},children:(p=m.find(x=>x.key===n.category))==null?void 0:p[t?"ko":"en"]}),e.jsx("h3",{style:{margin:0,fontSize:"1rem",flex:1},children:t?n.title.ko:n.title.en})]}),e.jsx("p",{style:{margin:"0 0 12px",fontSize:"0.85rem",color:"var(--text-light)"},children:t?n.desc.ko:n.desc.en}),s&&e.jsx("pre",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:6,fontSize:"0.8rem",lineHeight:1.6,whiteSpace:"pre-wrap",wordBreak:"break-word",marginBottom:12,maxHeight:300,overflowY:"auto",border:"1px solid var(--border)"},children:t?n.prompt.ko:n.prompt.en}),e.jsxs("div",{style:{display:"flex",gap:6,marginTop:"auto"},children:[e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>h(s?null:o),style:{flex:1},children:[e.jsx("i",{className:`fa-solid ${s?"fa-chevron-up":"fa-chevron-down"}`})," ",s?t?"접기":"Collapse":t?"프롬프트 보기":"View Prompt"]}),e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>k(t?n.prompt.ko:n.prompt.en,o),children:[e.jsx("i",{className:`fa-solid ${c===o?"fa-check":"fa-copy"}`})," ",c===o?t?"복사됨":"Copied":t?"복사":"Copy"]})]})]},o)})})]})]})}export{j as default};
