import{j as e}from"./markdown-Cxpyo6vT.js";import{b as r}from"./vendor-Cbm2kc8j.js";import{u}from"./index-DVH7uxvJ.js";import{S as h}from"./SEOHead-DYQLs8MZ.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const g=[{label:{ko:"코드 리뷰",en:"Code Review"},prompt:{ko:"다음 코드를 리뷰해 주세요. 버그, 성능 개선점, 코드 스타일 개선을 제안해 주세요.\n\n```\n// 여기에 코드를 붙여넣으세요\n```",en:"Please review the following code. Suggest bug fixes, performance improvements, and code style improvements.\n\n```\n// Paste your code here\n```"}},{label:{ko:"문서 요약",en:"Document Summary"},prompt:{ko:`다음 문서를 3가지 핵심 포인트로 요약해 주세요. 각 포인트는 2~3문장으로 작성하세요.

[문서 내용을 여기에 입력하세요]`,en:`Summarize the following document into 3 key points. Write 2-3 sentences for each point.

[Enter document content here]`}},{label:{ko:"번역",en:"Translation"},prompt:{ko:`다음 텍스트를 영어로 번역해 주세요. 자연스러운 표현을 사용하고, 전문 용어는 원문을 괄호에 병기해 주세요.

[번역할 텍스트]`,en:`Translate the following text to Korean. Use natural expressions and include original technical terms in parentheses.

[Text to translate]`}},{label:{ko:"이메일 작성",en:"Email Writing"},prompt:{ko:`다음 내용을 바탕으로 전문적인 비즈니스 이메일을 작성해 주세요.

- 받는 사람: [이름/직책]
- 목적: [이메일 목적]
- 주요 내용: [전달할 내용]
- 톤: 정중하지만 친근하게`,en:`Write a professional business email based on the following:

- To: [Name/Title]
- Purpose: [Email purpose]
- Key content: [Content to deliver]
- Tone: Polite but friendly`}},{label:{ko:"데이터 분석",en:"Data Analysis"},prompt:{ko:`다음 데이터를 분석하고 인사이트를 도출해 주세요.

1. 주요 트렌드를 파악하세요
2. 이상치가 있다면 설명하세요
3. 개선을 위한 액션 아이템을 제안하세요

[데이터를 여기에 입력하세요]`,en:`Analyze the following data and derive insights.

1. Identify key trends
2. Explain any outliers
3. Suggest action items for improvement

[Enter data here]`}},{label:{ko:"System Instruction",en:"System Instruction"},prompt:{ko:`당신은 [역할]입니다. 다음 규칙을 따라 응답하세요:

1. 항상 한국어로 응답하세요
2. 전문 용어는 쉽게 풀어서 설명하세요
3. 답변은 구조화된 형식(제목, 목록)으로 작성하세요
4. 확실하지 않은 정보는 명시하세요`,en:`You are a [role]. Follow these rules when responding:

1. Always respond in English
2. Explain technical terms in simple language
3. Structure answers with headings and lists
4. Clearly state when information is uncertain`}}];function k(){const{language:l,t:x}=u(),n=l==="ko",[s,a]=r.useState(""),[o,i]=r.useState(""),p=t=>{a(n?t.prompt.ko:t.prompt.en),i("")},c=()=>{s.trim()&&i(n?`[ Gemini API 연동 시 이 영역에 AI 응답이 표시됩니다 ]

프롬프트가 준비되었습니다. Google AI Studio(https://aistudio.google.com)에서 이 프롬프트를 테스트해 보세요.`:`[ AI response will appear here when Gemini API is connected ]

Your prompt is ready. Test it on Google AI Studio (https://aistudio.google.com).`)},m=()=>{navigator.clipboard.writeText(s).catch(()=>{})};return e.jsxs("div",{className:"prompt-practice-page",children:[e.jsx(h,{title:n?"프롬프트 실습":"Prompt Practice",path:"/prompt-practice"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:n?"프롬프트 실습":"Prompt Practice"}),e.jsx("p",{className:"page-subtitle",children:n?"템플릿을 활용하거나 직접 프롬프트를 작성하여 Gemini AI 프롬프팅을 연습하세요.":"Use templates or write your own prompts to practice Gemini AI prompting."})]}),e.jsxs("div",{style:{marginBottom:24},children:[e.jsxs("h3",{style:{marginBottom:12},children:[e.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"})," ",n?"템플릿 선택":"Select Template"]}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:g.map((t,d)=>e.jsx("button",{className:"chip",onClick:()=>p(t),children:n?t.label.ko:t.label.en},d))})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,minHeight:400},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsxs("h3",{style:{margin:0},children:[e.jsx("i",{className:"fa-solid fa-keyboard"})," ",n?"프롬프트 입력":"Prompt Input"]}),e.jsxs("div",{style:{display:"flex",gap:6},children:[e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:m,children:[e.jsx("i",{className:"fa-solid fa-copy"})," ",n?"복사":"Copy"]}),e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{a(""),i("")},children:[e.jsx("i",{className:"fa-solid fa-eraser"})," ",n?"초기화":"Clear"]})]})]}),e.jsx("textarea",{value:s,onChange:t=>a(t.target.value),placeholder:n?"프롬프트를 입력하세요...":"Enter your prompt...",style:{flex:1,resize:"none",fontFamily:"inherit",padding:16,borderRadius:8,border:"1px solid var(--border)",background:"var(--bg-secondary)",minHeight:300}}),e.jsxs("button",{className:"btn btn-primary",style:{marginTop:12},onClick:c,disabled:!s.trim(),children:[e.jsx("i",{className:"fa-solid fa-paper-plane"})," ",n?"실행하기":"Run"]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("h3",{style:{marginBottom:8},children:[e.jsx("i",{className:"fa-solid fa-robot"})," ",n?"결과":"Output"]}),e.jsx("div",{className:"card",style:{flex:1,padding:16,whiteSpace:"pre-wrap",lineHeight:1.7,overflowY:"auto",minHeight:300,color:o?"var(--text)":"var(--text-light)"},children:o||(n?"프롬프트를 실행하면 결과가 여기에 표시됩니다.":"Results will appear here after running a prompt.")})]})]})]})]})}export{k as default};
