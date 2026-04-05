import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';

const SECTIONS = [
  { id: 'overview', icon: 'fa-circle-info', ko: '개요', en: 'Overview' },
  { id: 'getting-started', icon: 'fa-play', ko: '시작하기', en: 'Getting Started' },
  { id: 'python-sdk', icon: 'fa-brands fa-python', ko: 'Python SDK', en: 'Python SDK' },
  { id: 'nodejs-sdk', icon: 'fa-brands fa-node-js', ko: 'Node.js SDK', en: 'Node.js SDK' },
  { id: 'rest-api', icon: 'fa-server', ko: 'REST API', en: 'REST API' },
  { id: 'streaming', icon: 'fa-water', ko: '스트리밍', en: 'Streaming' },
  { id: 'function-calling', icon: 'fa-plug', ko: '함수 호출', en: 'Function Calling' },
  { id: 'safety', icon: 'fa-shield-halved', ko: '안전 설정', en: 'Safety Settings' },
];

export default function GeminiAPIGuide() {
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
            <h1>{isKo ? 'Gemini API 개요' : 'Gemini API Overview'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini API는 Google의 최신 AI 모델을 애플리케이션에 통합할 수 있는 강력한 인터페이스입니다. Google AI Studio 또는 Vertex AI를 통해 접근할 수 있습니다.'
                : 'The Gemini API is a powerful interface for integrating Google\'s latest AI models into applications. It can be accessed through Google AI Studio or Vertex AI.'}
            </p>

            <h2>{isKo ? '주요 기능' : 'Key Features'}</h2>
            <div className="guide-card-grid">
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}>
                  <i className="fa-solid fa-comment-dots" />
                </div>
                <h3>{isKo ? '텍스트 생성' : 'Text Generation'}</h3>
                <p>{isKo ? '자연어 이해, 요약, 번역, 창작 등 다양한 텍스트 작업을 수행합니다.' : 'Perform various text tasks including NLU, summarization, translation, and creative writing.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #EA4335, #FBBC04)' }}>
                  <i className="fa-solid fa-images" />
                </div>
                <h3>{isKo ? '멀티모달 입력' : 'Multimodal Input'}</h3>
                <p>{isKo ? '텍스트, 이미지, 오디오, 비디오를 동시에 입력하여 처리할 수 있습니다.' : 'Process text, images, audio, and video inputs simultaneously.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #34A853, #4285F4)' }}>
                  <i className="fa-solid fa-code" />
                </div>
                <h3>{isKo ? '구조화된 출력' : 'Structured Output'}</h3>
                <p>{isKo ? 'JSON 스키마를 지정하여 정형화된 응답을 받을 수 있습니다.' : 'Receive structured responses by specifying JSON schemas.'}</p>
              </div>
            </div>

            <h2>{isKo ? 'API 접근 방법' : 'API Access Methods'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '방법' : 'Method'}</th>
                    <th>{isKo ? '대상' : 'Target'}</th>
                    <th>{isKo ? '특징' : 'Features'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Google AI Studio</td><td>{isKo ? '개인 개발자, 프로토타이핑' : 'Individual developers, prototyping'}</td><td>{isKo ? '무료 티어, 빠른 시작' : 'Free tier, quick start'}</td></tr>
                  <tr><td>Vertex AI</td><td>{isKo ? '기업, 프로덕션 환경' : 'Enterprise, production'}</td><td>{isKo ? 'SLA, 보안, 스케일링' : 'SLA, security, scaling'}</td></tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? 'SDK 비교' : 'SDK Comparison'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>SDK</th>
                    <th>{isKo ? '언어' : 'Language'}</th>
                    <th>{isKo ? '설치' : 'Install'}</th>
                    <th>{isKo ? '특징' : 'Features'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>google-genai</td><td>Python</td><td><code>pip install google-genai</code></td><td>{isKo ? '공식 Python SDK, 비동기 지원' : 'Official Python SDK, async support'}</td></tr>
                  <tr><td>@google/genai</td><td>Node.js</td><td><code>npm install @google/genai</code></td><td>{isKo ? '공식 Node.js SDK, TypeScript 지원' : 'Official Node.js SDK, TypeScript support'}</td></tr>
                  <tr><td>REST API</td><td>{isKo ? '모든 언어' : 'Any Language'}</td><td>-</td><td>{isKo ? 'HTTP 호출, curl 호환' : 'HTTP calls, curl compatible'}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'getting-started':
        return (
          <div className="guide-section">
            <h1>{isKo ? '시작하기' : 'Getting Started'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini API를 사용하기 위한 기본 설정 방법을 안내합니다.'
                : 'This guide walks you through the basic setup for using the Gemini API.'}
            </p>

            <h2>{isKo ? '1단계: API 키 발급' : 'Step 1: Get API Key'}</h2>
            <p>
              {isKo
                ? 'Google AI Studio(aistudio.google.com)에서 무료 API 키를 발급받을 수 있습니다.'
                : 'You can get a free API key from Google AI Studio (aistudio.google.com).'}
            </p>
            <ol className="guide-list">
              <li>{isKo ? 'Google AI Studio에 접속합니다.' : 'Go to Google AI Studio.'}</li>
              <li>{isKo ? 'Google 계정으로 로그인합니다.' : 'Sign in with your Google account.'}</li>
              <li>{isKo ? '"Get API Key" 버튼을 클릭합니다.' : 'Click the "Get API Key" button.'}</li>
              <li>{isKo ? '"Create API Key"를 선택합니다.' : 'Select "Create API Key".'}</li>
            </ol>

            <TipBox type="warning" title={isKo ? 'API 키 보안' : 'API Key Security'}>
              {isKo
                ? 'API 키를 코드에 직접 하드코딩하지 마세요. 환경 변수나 시크릿 매니저를 사용하세요. 키가 노출되면 즉시 재발급 받으세요.'
                : 'Never hardcode your API key in source code. Use environment variables or a secret manager. If a key is exposed, regenerate it immediately.'}
            </TipBox>

            <h2>{isKo ? '2단계: SDK 설치' : 'Step 2: Install SDK'}</h2>
            <h3>Python</h3>
            <CodeBlock language="bash" code={`pip install google-genai`} />

            <h3>Node.js</h3>
            <CodeBlock language="bash" code={`npm install @google/genai`} />

            <h2>{isKo ? '3단계: 첫 번째 요청' : 'Step 3: First Request'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Hello! Tell me about yourself."
)
print(response.text)`} />

            <TipBox type="tip" title={isKo ? '환경 변수 사용' : 'Using Environment Variables'}>
              {isKo
                ? 'GEMINI_API_KEY 또는 GOOGLE_API_KEY 환경 변수를 설정하면, Client() 생성 시 api_key를 생략할 수 있습니다.'
                : 'If you set the GEMINI_API_KEY or GOOGLE_API_KEY environment variable, you can omit api_key when creating Client().'}
            </TipBox>

            <CodeBlock language="bash" code={`# Set environment variable
export GOOGLE_API_KEY="your-api-key-here"

# Then in Python, no need to pass api_key
# client = genai.Client()  # automatically uses env var`} />
          </div>
        );

      case 'python-sdk':
        return (
          <div className="guide-section">
            <h1>Python SDK</h1>
            <p className="guide-intro">
              {isKo
                ? 'google-genai Python 패키지를 사용하여 Gemini API와 상호작용하는 방법을 알아봅니다.'
                : 'Learn how to interact with the Gemini API using the google-genai Python package.'}
            </p>

            <h2>{isKo ? '기본 텍스트 생성' : 'Basic Text Generation'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai

client = genai.Client(api_key="YOUR_API_KEY")

# Simple text generation
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Write a haiku about programming"
)
print(response.text)`} />

            <h2>{isKo ? '멀티턴 대화' : 'Multi-turn Conversation'}</h2>
            <CodeBlock language="python" code={`# Create a chat session
chat = client.chats.create(model="gemini-2.0-flash")

# Send messages in a conversation
response1 = chat.send_message("I'm learning Python. Where should I start?")
print(response1.text)

response2 = chat.send_message("Can you give me a simple example?")
print(response2.text)

# Access chat history
for message in chat.get_history():
    print(f"{message.role}: {message.parts[0].text[:100]}")`} />

            <h2>{isKo ? '시스템 프롬프트' : 'System Instructions'}</h2>
            <CodeBlock language="python" code={`response = client.models.generate_content(
    model="gemini-2.0-flash",
    config={
        "system_instruction": "You are a helpful coding tutor. "
        "Always provide examples and explain concepts simply."
    },
    contents="Explain what a decorator is in Python"
)
print(response.text)`} />

            <h2>{isKo ? '이미지 입력' : 'Image Input'}</h2>
            <CodeBlock language="python" code={`from google.genai import types

# From a file
file = client.files.upload(file="photo.jpg")
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[file, "Describe this image in detail"]
)
print(response.text)

# From URL (using PIL)
from PIL import Image
import requests
from io import BytesIO

img_url = "https://example.com/image.jpg"
image = Image.open(BytesIO(requests.get(img_url).content))

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[image, "What do you see?"]
)
print(response.text)`} />

            <h2>{isKo ? '구조화된 출력 (JSON)' : 'Structured Output (JSON)'}</h2>
            <CodeBlock language="python" code={`from google.genai import types

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="List 3 popular Python web frameworks",
    config={
        "response_mime_type": "application/json",
        "response_schema": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {"type": "string"},
                    "description": {"type": "string"},
                    "popularity": {"type": "string"}
                },
                "required": ["name", "description"]
            }
        }
    }
)

import json
frameworks = json.loads(response.text)
for fw in frameworks:
    print(f"{fw['name']}: {fw['description']}")`} />

            <TipBox type="tip" title={isKo ? '구조화된 출력 팁' : 'Structured Output Tip'}>
              {isKo
                ? 'response_mime_type을 "application/json"으로 설정하면 모델이 항상 유효한 JSON을 반환합니다. response_schema와 함께 사용하면 원하는 구조를 정확하게 얻을 수 있습니다.'
                : 'Setting response_mime_type to "application/json" ensures the model always returns valid JSON. Use it with response_schema to get the exact structure you need.'}
            </TipBox>

            <h2>{isKo ? '에러 처리' : 'Error Handling'}</h2>
            <CodeBlock language="python" code={`from google.genai import errors

try:
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents="Hello"
    )
    print(response.text)
except errors.ClientError as e:
    print(f"Client error: {e}")
except errors.ServerError as e:
    print(f"Server error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")`} />
          </div>
        );

      case 'nodejs-sdk':
        return (
          <div className="guide-section">
            <h1>Node.js SDK</h1>
            <p className="guide-intro">
              {isKo
                ? '@google/genai 패키지를 사용하여 Node.js에서 Gemini API를 사용하는 방법을 알아봅니다.'
                : 'Learn how to use the Gemini API in Node.js with the @google/genai package.'}
            </p>

            <h2>{isKo ? '설치 및 설정' : 'Installation & Setup'}</h2>
            <CodeBlock language="bash" code={`npm install @google/genai`} />

            <h2>{isKo ? '기본 텍스트 생성' : 'Basic Text Generation'}</h2>
            <CodeBlock language="javascript" code={`import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how the internet works"
  });
  console.log(response.text);
}

main();`} />

            <h2>{isKo ? '멀티턴 대화' : 'Multi-turn Conversation'}</h2>
            <CodeBlock language="javascript" code={`const chat = ai.chats.create({
  model: "gemini-2.0-flash",
  config: {
    systemInstruction: "You are a friendly JavaScript tutor."
  }
});

const response1 = await chat.sendMessage({
  message: "What are Promises in JavaScript?"
});
console.log(response1.text);

const response2 = await chat.sendMessage({
  message: "Show me an async/await example"
});
console.log(response2.text);`} />

            <h2>{isKo ? '스트리밍 응답' : 'Streaming Response'}</h2>
            <CodeBlock language="javascript" code={`const response = await ai.models.generateContentStream({
  model: "gemini-2.0-flash",
  contents: "Write a short story about a robot"
});

for await (const chunk of response) {
  process.stdout.write(chunk.text);
}`} />

            <h2>{isKo ? '이미지 분석' : 'Image Analysis'}</h2>
            <CodeBlock language="javascript" code={`import fs from "fs";

// Read image file and convert to base64
const imageBuffer = fs.readFileSync("photo.jpg");
const base64Image = imageBuffer.toString("base64");

const response = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64Image
      }
    },
    { text: "Describe this image in detail" }
  ]
});
console.log(response.text);`} />

            <TipBox type="tip" title={isKo ? 'TypeScript 지원' : 'TypeScript Support'}>
              {isKo
                ? '@google/genai 패키지는 TypeScript를 완벽하게 지원합니다. 타입 추론과 자동 완성 기능을 활용하여 개발 생산성을 높이세요.'
                : 'The @google/genai package has full TypeScript support. Leverage type inference and auto-completion to boost development productivity.'}
            </TipBox>
          </div>
        );

      case 'rest-api':
        return (
          <div className="guide-section">
            <h1>REST API</h1>
            <p className="guide-intro">
              {isKo
                ? 'SDK 없이 HTTP 요청으로 직접 Gemini API를 호출하는 방법을 알아봅니다.'
                : 'Learn how to call the Gemini API directly via HTTP requests without an SDK.'}
            </p>

            <h2>{isKo ? '기본 요청' : 'Basic Request'}</h2>
            <CodeBlock language="bash" code={`curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "contents": [{
      "parts": [{"text": "Explain quantum computing"}]
    }]
  }'`} />

            <h2>{isKo ? '시스템 프롬프트 포함' : 'With System Instructions'}</h2>
            <CodeBlock language="bash" code={`curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "system_instruction": {
      "parts": [{"text": "You are a helpful science tutor."}]
    },
    "contents": [{
      "parts": [{"text": "What is photosynthesis?"}]
    }],
    "generationConfig": {
      "temperature": 0.7,
      "maxOutputTokens": 1024
    }
  }'`} />

            <h2>{isKo ? 'JavaScript fetch 사용' : 'Using JavaScript fetch'}</h2>
            <CodeBlock language="javascript" code={`const API_KEY = "YOUR_API_KEY";
const MODEL = "gemini-2.0-flash";

async function generateContent(prompt) {
  const url = \`https://generativelanguage.googleapis.com/v1beta/models/\${MODEL}:generateContent?key=\${API_KEY}\`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

// Usage
const answer = await generateContent("What is machine learning?");
console.log(answer);`} />

            <h2>{isKo ? '모델 목록 조회' : 'List Models'}</h2>
            <CodeBlock language="bash" code={`curl "https://generativelanguage.googleapis.com/v1beta/models?key=YOUR_API_KEY"`} />

            <TipBox type="important" title={isKo ? 'REST API vs SDK' : 'REST API vs SDK'}>
              {isKo
                ? 'REST API는 모든 언어에서 사용할 수 있지만, Python이나 Node.js를 사용하는 경우 공식 SDK를 사용하는 것이 더 편리합니다. SDK는 재시도 로직, 타입 안전성, 스트리밍 지원 등 추가 기능을 제공합니다.'
                : 'The REST API works with any language, but if you\'re using Python or Node.js, the official SDK is more convenient. SDKs provide retry logic, type safety, streaming support, and more.'}
            </TipBox>
          </div>
        );

      case 'streaming':
        return (
          <div className="guide-section">
            <h1>{isKo ? '스트리밍' : 'Streaming'}</h1>
            <p className="guide-intro">
              {isKo
                ? '스트리밍을 사용하면 전체 응답을 기다리지 않고 생성되는 대로 텍스트를 받을 수 있습니다. 사용자 경험을 크게 향상시킵니다.'
                : 'Streaming allows you to receive text as it\'s generated without waiting for the complete response. It greatly improves user experience.'}
            </p>

            <h2>{isKo ? 'Python 스트리밍' : 'Python Streaming'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai

client = genai.Client(api_key="YOUR_API_KEY")

# Streaming text generation
response = client.models.generate_content_stream(
    model="gemini-2.0-flash",
    contents="Write a detailed essay about climate change"
)

for chunk in response:
    print(chunk.text, end="", flush=True)

print()  # newline at end`} />

            <h2>{isKo ? 'Node.js 스트리밍' : 'Node.js Streaming'}</h2>
            <CodeBlock language="javascript" code={`import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

const response = await ai.models.generateContentStream({
  model: "gemini-2.0-flash",
  contents: "Write a detailed essay about climate change"
});

for await (const chunk of response) {
  process.stdout.write(chunk.text);
}`} />

            <h2>{isKo ? 'REST API 스트리밍 (SSE)' : 'REST API Streaming (SSE)'}</h2>
            <CodeBlock language="bash" code={`curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "contents": [{
      "parts": [{"text": "Write a poem about the ocean"}]
    }]
  }'`} />

            <TipBox type="tip" title={isKo ? '스트리밍 활용 팁' : 'Streaming Usage Tips'}>
              {isKo
                ? '챗봇이나 실시간 UI에서는 항상 스트리밍을 사용하세요. 사용자가 첫 글자를 빠르게 볼 수 있어 체감 속도가 훨씬 빨라집니다. Time to First Token(TTFT)이 중요한 지표입니다.'
                : 'Always use streaming for chatbots and real-time UIs. Users see the first characters quickly, making perceived speed much faster. Time to First Token (TTFT) is the key metric.'}
            </TipBox>

            <h2>{isKo ? '스트리밍 채팅' : 'Streaming Chat'}</h2>
            <CodeBlock language="python" code={`# Streaming in chat mode
chat = client.chats.create(model="gemini-2.0-flash")

response = chat.send_message_stream("Tell me a story about a brave explorer")

full_response = ""
for chunk in response:
    print(chunk.text, end="", flush=True)
    full_response += chunk.text

# The chat history is automatically maintained
response2 = chat.send_message_stream("Continue the story")
for chunk in response2:
    print(chunk.text, end="", flush=True)`} />
          </div>
        );

      case 'function-calling':
        return (
          <div className="guide-section">
            <h1>{isKo ? '함수 호출 (Function Calling)' : 'Function Calling'}</h1>
            <p className="guide-intro">
              {isKo
                ? '함수 호출을 사용하면 Gemini 모델이 외부 API, 데이터베이스, 도구와 상호작용할 수 있습니다. 모델이 어떤 함수를 호출할지 결정하고, 필요한 매개변수를 생성합니다.'
                : 'Function calling enables Gemini models to interact with external APIs, databases, and tools. The model decides which function to call and generates the required parameters.'}
            </p>

            <h2>{isKo ? '함수 정의' : 'Defining Functions'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai
from google.genai import types

client = genai.Client(api_key="YOUR_API_KEY")

# Define tools (functions the model can call)
get_weather = types.FunctionDeclaration(
    name="get_weather",
    description="Get the current weather for a given location",
    parameters={
        "type": "object",
        "properties": {
            "location": {
                "type": "string",
                "description": "City name, e.g., 'Seoul' or 'New York'"
            },
            "unit": {
                "type": "string",
                "enum": ["celsius", "fahrenheit"],
                "description": "Temperature unit"
            }
        },
        "required": ["location"]
    }
)

tools = types.Tool(function_declarations=[get_weather])`} />

            <h2>{isKo ? '함수 호출 실행' : 'Executing Function Calls'}</h2>
            <CodeBlock language="python" code={`# Send request with tools
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="What's the weather like in Seoul?",
    config=types.GenerateContentConfig(tools=[tools])
)

# Check if model wants to call a function
part = response.candidates[0].content.parts[0]
if part.function_call:
    fn = part.function_call
    print(f"Function: {fn.name}")
    print(f"Args: {fn.args}")

    # Execute the actual function (your implementation)
    weather_data = {"temperature": 22, "condition": "Sunny", "humidity": 45}

    # Send function result back to model
    response2 = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[
            types.Content(parts=[types.Part(text="What's the weather in Seoul?")], role="user"),
            response.candidates[0].content,
            types.Content(parts=[types.Part(
                function_response=types.FunctionResponse(
                    name=fn.name,
                    response=weather_data
                )
            )], role="function")
        ],
        config=types.GenerateContentConfig(tools=[tools])
    )
    print(response2.text)`} />

            <TipBox type="important" title={isKo ? '함수 호출 동작 방식' : 'How Function Calling Works'}>
              {isKo
                ? '모델은 실제로 함수를 실행하지 않습니다. 모델은 어떤 함수를 어떤 매개변수로 호출해야 하는지 결정만 하고, 실제 실행은 개발자의 코드에서 수행합니다. 결과를 모델에 다시 전달하면 자연어 응답을 생성합니다.'
                : 'The model does not actually execute functions. It only decides which function to call with what parameters. Actual execution happens in your code. After passing the result back, the model generates a natural language response.'}
            </TipBox>

            <h2>{isKo ? '병렬 함수 호출' : 'Parallel Function Calling'}</h2>
            <CodeBlock language="python" code={`# The model can request multiple function calls at once
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Compare the weather in Seoul and Tokyo",
    config=types.GenerateContentConfig(tools=[tools])
)

# Process multiple function calls
for part in response.candidates[0].content.parts:
    if part.function_call:
        print(f"Call: {part.function_call.name}({part.function_call.args})")`} />
          </div>
        );

      case 'safety':
        return (
          <div className="guide-section">
            <h1>{isKo ? '안전 설정' : 'Safety Settings'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini API는 유해한 콘텐츠를 필터링하기 위한 안전 설정을 제공합니다. 카테고리별로 차단 수준을 조정할 수 있습니다.'
                : 'The Gemini API provides safety settings for filtering harmful content. You can adjust blocking levels for each category.'}
            </p>

            <h2>{isKo ? '안전 카테고리' : 'Safety Categories'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '카테고리' : 'Category'}</th>
                    <th>{isKo ? '설명' : 'Description'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>HARM_CATEGORY_HARASSMENT</td><td>{isKo ? '괴롭힘 관련 콘텐츠' : 'Harassment-related content'}</td></tr>
                  <tr><td>HARM_CATEGORY_HATE_SPEECH</td><td>{isKo ? '혐오 발언' : 'Hate speech'}</td></tr>
                  <tr><td>HARM_CATEGORY_SEXUALLY_EXPLICIT</td><td>{isKo ? '성적으로 노골적인 콘텐츠' : 'Sexually explicit content'}</td></tr>
                  <tr><td>HARM_CATEGORY_DANGEROUS_CONTENT</td><td>{isKo ? '위험한 콘텐츠' : 'Dangerous content'}</td></tr>
                  <tr><td>HARM_CATEGORY_CIVIC_INTEGRITY</td><td>{isKo ? '시민 무결성 관련' : 'Civic integrity related'}</td></tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? '안전 설정 적용' : 'Applying Safety Settings'}</h2>
            <CodeBlock language="python" code={`from google.genai import types

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Your prompt here",
    config=types.GenerateContentConfig(
        safety_settings=[
            types.SafetySetting(
                category="HARM_CATEGORY_HARASSMENT",
                threshold="BLOCK_MEDIUM_AND_ABOVE"
            ),
            types.SafetySetting(
                category="HARM_CATEGORY_HATE_SPEECH",
                threshold="BLOCK_LOW_AND_ABOVE"
            ),
            types.SafetySetting(
                category="HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold="BLOCK_MEDIUM_AND_ABOVE"
            ),
            types.SafetySetting(
                category="HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold="BLOCK_MEDIUM_AND_ABOVE"
            ),
        ]
    )
)`} />

            <h2>{isKo ? '차단 수준' : 'Blocking Thresholds'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '수준' : 'Threshold'}</th>
                    <th>{isKo ? '설명' : 'Description'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>BLOCK_NONE</td><td>{isKo ? '차단 없음 (주의 필요)' : 'No blocking (use with caution)'}</td></tr>
                  <tr><td>BLOCK_LOW_AND_ABOVE</td><td>{isKo ? '낮은 확률 이상 차단 (가장 엄격)' : 'Block low probability and above (strictest)'}</td></tr>
                  <tr><td>BLOCK_MEDIUM_AND_ABOVE</td><td>{isKo ? '중간 확률 이상 차단 (기본값)' : 'Block medium probability and above (default)'}</td></tr>
                  <tr><td>BLOCK_HIGH_AND_ABOVE</td><td>{isKo ? '높은 확률만 차단 (관대)' : 'Block high probability only (lenient)'}</td></tr>
                </tbody>
              </table>
            </div>

            <h2>{isKo ? '안전 피드백 확인' : 'Checking Safety Feedback'}</h2>
            <CodeBlock language="python" code={`response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Your prompt here"
)

# Check if response was blocked
if response.candidates[0].finish_reason == "SAFETY":
    print("Response was blocked by safety filters")
    for rating in response.candidates[0].safety_ratings:
        print(f"  {rating.category}: {rating.probability}")
else:
    print(response.text)`} />

            <TipBox type="warning" title={isKo ? '안전 설정 참고사항' : 'Safety Settings Notes'}>
              {isKo
                ? 'BLOCK_NONE 설정은 프로덕션 환경에서 신중하게 사용해야 합니다. 사용자 대면 애플리케이션에서는 적절한 안전 필터를 항상 적용하세요.'
                : 'BLOCK_NONE should be used carefully in production environments. Always apply appropriate safety filters for user-facing applications.'}
            </TipBox>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? 'Gemini API 가이드' : 'Gemini API Guide'} path="/gemini-api" />
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
                  <i className={`${s.icon.startsWith('fa-brands') ? s.icon : `fa-solid ${s.icon}`} nav-icon`} />
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
