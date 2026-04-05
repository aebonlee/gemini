import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';

const SECTIONS = [
  { id: 'overview', icon: 'fa-circle-info', ko: '개요', en: 'Overview' },
  { id: 'image', icon: 'fa-image', ko: '이미지 이해', en: 'Image Understanding' },
  { id: 'video', icon: 'fa-video', ko: '비디오 분석', en: 'Video Analysis' },
  { id: 'audio', icon: 'fa-headphones', ko: '오디오 처리', en: 'Audio Processing' },
  { id: 'pdf', icon: 'fa-file-pdf', ko: 'PDF 분석', en: 'PDF Analysis' },
  { id: 'image-gen', icon: 'fa-wand-magic-sparkles', ko: '이미지 생성', en: 'Image Generation' },
];

export default function MultimodalGuide() {
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
            <h1>{isKo ? '멀티모달 기능 개요' : 'Multimodal Capabilities Overview'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini는 처음부터 멀티모달로 설계된 AI 모델입니다. 텍스트, 이미지, 오디오, 비디오, PDF를 네이티브로 이해하고 처리할 수 있으며, 이미지와 오디오를 직접 생성할 수도 있습니다.'
                : 'Gemini is an AI model designed from the ground up to be multimodal. It can natively understand and process text, images, audio, video, and PDFs, and can also generate images and audio directly.'}
            </p>

            <div className="guide-card-grid">
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}>
                  <i className="fa-solid fa-image" />
                </div>
                <h3>{isKo ? '이미지 이해' : 'Image Understanding'}</h3>
                <p>{isKo ? '사진, 차트, 다이어그램, 스크린샷 등을 분석하고 설명합니다.' : 'Analyze and describe photos, charts, diagrams, screenshots, and more.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #EA4335, #FBBC04)' }}>
                  <i className="fa-solid fa-video" />
                </div>
                <h3>{isKo ? '비디오 분석' : 'Video Analysis'}</h3>
                <p>{isKo ? '동영상의 내용을 이해하고, 특정 장면이나 행동을 식별합니다.' : 'Understand video content and identify specific scenes or actions.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #34A853, #4285F4)' }}>
                  <i className="fa-solid fa-headphones" />
                </div>
                <h3>{isKo ? '오디오 처리' : 'Audio Processing'}</h3>
                <p>{isKo ? '음성 인식, 음악 분석, 소리 식별 등을 수행합니다.' : 'Perform speech recognition, music analysis, sound identification, and more.'}</p>
              </div>
              <div className="guide-card">
                <div className="guide-card-icon" style={{ background: 'linear-gradient(135deg, #9334E6, #EA4335)' }}>
                  <i className="fa-solid fa-wand-magic-sparkles" />
                </div>
                <h3>{isKo ? '이미지 생성' : 'Image Generation'}</h3>
                <p>{isKo ? '텍스트 설명으로부터 이미지를 생성합니다. (Gemini 2.0 Flash)' : 'Generate images from text descriptions. (Gemini 2.0 Flash)'}</p>
              </div>
            </div>

            <h2>{isKo ? '지원 형식' : 'Supported Formats'}</h2>
            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>{isKo ? '유형' : 'Type'}</th>
                    <th>{isKo ? '지원 형식' : 'Supported Formats'}</th>
                    <th>{isKo ? '최대 크기' : 'Max Size'}</th>
                    <th>{isKo ? '지원 모델' : 'Models'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>{isKo ? '이미지' : 'Image'}</td><td>PNG, JPEG, WEBP, GIF, HEIC, HEIF</td><td>20MB</td><td>{isKo ? '모든 모델' : 'All Models'}</td></tr>
                  <tr><td>{isKo ? '비디오' : 'Video'}</td><td>MP4, MPEG, MOV, AVI, MKV, WEBM, FLV</td><td>2GB (File API)</td><td>Flash, Pro</td></tr>
                  <tr><td>{isKo ? '오디오' : 'Audio'}</td><td>MP3, WAV, AIFF, AAC, OGG, FLAC</td><td>2GB (File API)</td><td>Flash, Pro</td></tr>
                  <tr><td>PDF</td><td>PDF</td><td>2GB (File API)</td><td>{isKo ? '모든 모델' : 'All Models'}</td></tr>
                  <tr><td>{isKo ? '텍스트' : 'Text'}</td><td>{isKo ? '일반 텍스트' : 'Plain text'}</td><td>{isKo ? '모델별 상이' : 'Varies'}</td><td>{isKo ? '모든 모델' : 'All Models'}</td></tr>
                </tbody>
              </table>
            </div>

            <TipBox type="tip" title={isKo ? '파일 크기 관리' : 'File Size Management'}>
              {isKo
                ? '20MB 이하의 파일은 인라인 데이터(base64)로 전송할 수 있지만, 더 큰 파일은 File API를 사용하여 업로드해야 합니다. File API로 업로드된 파일은 48시간 후 자동 삭제됩니다.'
                : 'Files under 20MB can be sent as inline data (base64), but larger files must be uploaded using the File API. Files uploaded via File API are automatically deleted after 48 hours.'}
            </TipBox>
          </div>
        );

      case 'image':
        return (
          <div className="guide-section">
            <h1>{isKo ? '이미지 이해' : 'Image Understanding'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini는 이미지를 분석하여 내용을 설명하고, 텍스트를 추출하고, 질문에 답변할 수 있습니다.'
                : 'Gemini can analyze images to describe content, extract text, and answer questions.'}
            </p>

            <h2>{isKo ? '로컬 파일 분석' : 'Analyzing Local Files'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai
from google.genai import types

client = genai.Client(api_key="YOUR_API_KEY")

# Upload image file
file = client.files.upload(file="product_screenshot.png")

# Analyze image
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        "Describe this image in detail. Include any text visible in the image."
    ]
)
print(response.text)`} />

            <h2>{isKo ? '다중 이미지 비교' : 'Comparing Multiple Images'}</h2>
            <CodeBlock language="python" code={`# Upload multiple images
file1 = client.files.upload(file="design_v1.png")
file2 = client.files.upload(file="design_v2.png")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file1,
        file2,
        """Compare these two UI designs:
1. Layout differences
2. Color scheme changes
3. Typography changes
4. Which design is better for usability and why?"""
    ]
)
print(response.text)`} />

            <h2>{isKo ? 'OCR (텍스트 추출)' : 'OCR (Text Extraction)'}</h2>
            <CodeBlock language="python" code={`# Extract text from images (OCR)
file = client.files.upload(file="business_card.jpg")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        """Extract all text from this business card and return as JSON:
{
  "name": "",
  "title": "",
  "company": "",
  "phone": "",
  "email": "",
  "address": ""
}"""
    ],
    config={"response_mime_type": "application/json"}
)
print(response.text)`} />

            <h2>{isKo ? '차트 및 다이어그램 분석' : 'Chart & Diagram Analysis'}</h2>
            <CodeBlock language="python" code={`file = client.files.upload(file="sales_chart.png")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        """Analyze this sales chart:
1. What are the key trends?
2. Which product has the highest growth?
3. Provide the approximate data values
4. What predictions can you make for next quarter?"""
    ]
)
print(response.text)`} />

            <TipBox type="tip" title={isKo ? '이미지 분석 팁' : 'Image Analysis Tips'}>
              {isKo
                ? '1) 고해상도 이미지일수록 더 정확한 결과를 얻을 수 있습니다. 2) 분석할 영역이 명확한 경우 구체적으로 지시하세요. 3) 여러 이미지를 한 번에 전달하여 비교 분석이 가능합니다. 4) 최대 3,600개 이미지를 하나의 프롬프트에 포함할 수 있습니다.'
                : '1) Higher resolution images yield more accurate results. 2) Be specific when the analysis area is clear. 3) Send multiple images at once for comparative analysis. 4) Up to 3,600 images can be included in a single prompt.'}
            </TipBox>
          </div>
        );

      case 'video':
        return (
          <div className="guide-section">
            <h1>{isKo ? '비디오 분석' : 'Video Analysis'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini는 비디오를 프레임 단위로 분석하여 내용을 이해하고, 특정 장면을 식별하며, 타임스탬프 기반의 요약을 제공할 수 있습니다.'
                : 'Gemini can analyze video frame by frame to understand content, identify specific scenes, and provide timestamp-based summaries.'}
            </p>

            <h2>{isKo ? '비디오 업로드 및 분석' : 'Video Upload and Analysis'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai
import time

client = genai.Client(api_key="YOUR_API_KEY")

# Upload video using File API
print("Uploading video...")
file = client.files.upload(file="tutorial_video.mp4")

# Wait for processing to complete
while file.state.name == "PROCESSING":
    print("Processing...")
    time.sleep(5)
    file = client.files.get(name=file.name)

if file.state.name == "FAILED":
    raise ValueError("Video processing failed")

print("Video ready for analysis")

# Analyze the video
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        """Analyze this video and provide:
1. A summary of the main content
2. Key topics covered with timestamps
3. Any important visual elements or demonstrations
4. A list of action items or takeaways"""
    ]
)
print(response.text)`} />

            <h2>{isKo ? '타임스탬프 기반 분석' : 'Timestamp-based Analysis'}</h2>
            <CodeBlock language="python" code={`response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        """Create a detailed table of contents for this video.
For each section, provide:
- Timestamp (MM:SS format)
- Section title
- Brief description (1-2 sentences)

Format as a markdown table."""
    ]
)
print(response.text)`} />

            <h2>{isKo ? '특정 장면 검색' : 'Scene Search'}</h2>
            <CodeBlock language="python" code={`response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        "At what timestamp does the presenter show the code demo? "
        "Describe what code is being shown."
    ]
)
print(response.text)`} />

            <TipBox type="important" title={isKo ? '비디오 처리 제한' : 'Video Processing Limits'}>
              {isKo
                ? '비디오는 초당 1프레임으로 샘플링됩니다. 최대 1시간 분량의 비디오를 처리할 수 있습니다. 오디오 트랙도 함께 분석됩니다. 대용량 비디오는 File API 업로드 후 처리 시간이 필요합니다.'
                : 'Video is sampled at 1 frame per second. Maximum 1-hour videos can be processed. Audio tracks are also analyzed. Large videos require processing time after File API upload.'}
            </TipBox>

            <h2>{isKo ? 'YouTube 비디오 분석' : 'YouTube Video Analysis'}</h2>
            <CodeBlock language="python" code={`# Analyze YouTube videos directly (via URL)
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        types.Part.from_uri(
            file_uri="https://www.youtube.com/watch?v=VIDEO_ID",
            mime_type="video/mp4"
        ),
        "Summarize the key points of this video"
    ]
)
print(response.text)`} />
          </div>
        );

      case 'audio':
        return (
          <div className="guide-section">
            <h1>{isKo ? '오디오 처리' : 'Audio Processing'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini는 오디오 파일을 직접 이해할 수 있습니다. 음성 인식, 음악 분석, 다국어 번역 등 다양한 오디오 작업을 수행합니다.'
                : 'Gemini can directly understand audio files. It performs various audio tasks including speech recognition, music analysis, and multilingual translation.'}
            </p>

            <h2>{isKo ? '음성 인식 (STT)' : 'Speech-to-Text'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai

client = genai.Client(api_key="YOUR_API_KEY")

# Upload audio file
file = client.files.upload(file="meeting_recording.mp3")

# Transcribe audio
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        """Transcribe this audio recording.
Include:
- Speaker identification (Speaker 1, Speaker 2, etc.)
- Timestamps for each speaker change
- Proper punctuation and formatting"""
    ]
)
print(response.text)`} />

            <h2>{isKo ? '회의록 생성' : 'Meeting Minutes Generation'}</h2>
            <CodeBlock language="python" code={`response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        """Create professional meeting minutes from this recording:

## Meeting Minutes

### Attendees
[List identified speakers]

### Key Discussion Points
[Bullet points of main topics discussed]

### Decisions Made
[List any decisions]

### Action Items
[List action items with responsible persons]

### Next Steps
[Any follow-up items mentioned]"""
    ]
)
print(response.text)`} />

            <h2>{isKo ? '다국어 오디오 번역' : 'Multilingual Audio Translation'}</h2>
            <CodeBlock language="python" code={`file = client.files.upload(file="korean_podcast.mp3")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        "Transcribe this Korean audio and translate it to English. "
        "Format: show both the original Korean text and English translation."
    ]
)
print(response.text)`} />

            <h2>{isKo ? '오디오 분석' : 'Audio Analysis'}</h2>
            <CodeBlock language="python" code={`file = client.files.upload(file="sample_audio.wav")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        """Analyze this audio:
1. What type of audio is this? (speech, music, ambient sound, etc.)
2. Describe the content in detail
3. What is the overall tone/mood?
4. Are there any notable characteristics?"""
    ]
)
print(response.text)`} />

            <TipBox type="tip" title={isKo ? '오디오 처리 팁' : 'Audio Processing Tips'}>
              {isKo
                ? '1) 깨끗한 오디오일수록 정확도가 높습니다. 2) 배경 소음이 있는 경우에도 화자 분리가 가능합니다. 3) 다국어 오디오도 자동으로 인식합니다. 4) 최대 9.5시간 분량의 오디오를 처리할 수 있습니다.'
                : '1) Cleaner audio yields higher accuracy. 2) Speaker separation works even with background noise. 3) Multilingual audio is automatically recognized. 4) Up to 9.5 hours of audio can be processed.'}
            </TipBox>
          </div>
        );

      case 'pdf':
        return (
          <div className="guide-section">
            <h1>{isKo ? 'PDF 분석' : 'PDF Analysis'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini는 PDF 문서를 직접 분석할 수 있습니다. 텍스트 추출, 요약, 데이터 추출, Q&A 등 다양한 문서 처리 작업을 수행합니다.'
                : 'Gemini can directly analyze PDF documents. It performs various document processing tasks including text extraction, summarization, data extraction, and Q&A.'}
            </p>

            <h2>{isKo ? 'PDF 업로드 및 요약' : 'PDF Upload and Summarization'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai

client = genai.Client(api_key="YOUR_API_KEY")

# Upload PDF
file = client.files.upload(file="research_paper.pdf")

# Summarize the document
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        """Provide a comprehensive summary of this document:

1. **Title and Authors**
2. **Abstract/Key Points** (3-5 bullet points)
3. **Methodology** (brief description)
4. **Key Findings** (3-5 bullet points)
5. **Conclusions**
6. **Limitations** (if mentioned)"""
    ]
)
print(response.text)`} />

            <h2>{isKo ? '문서 Q&A' : 'Document Q&A'}</h2>
            <CodeBlock language="python" code={`# Ask specific questions about the document
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        "Based on this document, answer the following questions:\n"
        "1. What is the main research question?\n"
        "2. What data sources were used?\n"
        "3. What are the practical implications of the findings?\n"
        "4. How does this compare to previous research in the field?"
    ]
)
print(response.text)`} />

            <h2>{isKo ? '테이블 데이터 추출' : 'Table Data Extraction'}</h2>
            <CodeBlock language="python" code={`response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        file,
        "Extract all tables from this PDF and convert them to JSON format. "
        "Each table should be a separate JSON array of objects."
    ],
    config={"response_mime_type": "application/json"}
)

import json
tables = json.loads(response.text)
for i, table in enumerate(tables):
    print(f"Table {i+1}: {len(table)} rows")`} />

            <h2>{isKo ? '다중 PDF 비교' : 'Comparing Multiple PDFs'}</h2>
            <CodeBlock language="python" code={`file1 = client.files.upload(file="contract_v1.pdf")
file2 = client.files.upload(file="contract_v2.pdf")

response = client.models.generate_content(
    model="gemini-2.5-pro",  # Use Pro for complex comparison
    contents=[
        file1,
        file2,
        """Compare these two contract versions:
1. List all changed clauses
2. Highlight additions and removals
3. Summarize the impact of each change
4. Flag any potentially problematic changes"""
    ]
)
print(response.text)`} />

            <TipBox type="important" title={isKo ? 'PDF 처리 제한' : 'PDF Processing Limits'}>
              {isKo
                ? 'PDF는 이미지로 변환되어 처리됩니다. 최대 3,600 페이지까지 처리 가능합니다. 스캔된 PDF도 분석할 수 있지만, 텍스트 기반 PDF가 더 정확합니다. 보안 암호화된 PDF는 처리할 수 없습니다.'
                : 'PDFs are converted to images for processing. Up to 3,600 pages can be processed. Scanned PDFs can be analyzed, but text-based PDFs are more accurate. Security-encrypted PDFs cannot be processed.'}
            </TipBox>
          </div>
        );

      case 'image-gen':
        return (
          <div className="guide-section">
            <h1>{isKo ? '이미지 생성' : 'Image Generation'}</h1>
            <p className="guide-intro">
              {isKo
                ? 'Gemini 2.0 Flash는 텍스트 프롬프트로부터 이미지를 생성할 수 있는 네이티브 이미지 생성 기능을 제공합니다. Imagen 3 모델도 별도로 사용할 수 있습니다.'
                : 'Gemini 2.0 Flash provides native image generation capabilities from text prompts. The Imagen 3 model can also be used separately.'}
            </p>

            <h2>{isKo ? 'Gemini 네이티브 이미지 생성' : 'Gemini Native Image Generation'}</h2>
            <CodeBlock language="python" code={`import google.genai as genai
from google.genai import types
from PIL import Image
from io import BytesIO

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Generate an image of a cozy cafe with warm lighting, "
             "wooden furniture, and a bookshelf in the background. "
             "Style: watercolor painting.",
    config=types.GenerateContentConfig(
        response_modalities=["TEXT", "IMAGE"]
    )
)

# Process the response
for part in response.candidates[0].content.parts:
    if part.inline_data:
        # Save image
        image = Image.open(BytesIO(part.inline_data.data))
        image.save("generated_cafe.png")
        print("Image saved!")
    elif part.text:
        print(part.text)`} />

            <h2>{isKo ? 'Imagen 3 사용' : 'Using Imagen 3'}</h2>
            <CodeBlock language="python" code={`# Use Imagen 3 for high-quality image generation
from google.genai import types

response = client.models.generate_images(
    model="imagen-3.0-generate-002",
    prompt="A professional photo of a modern office with glass walls, "
           "green plants, and natural sunlight",
    config=types.GenerateImagesConfig(
        number_of_images=4,
        aspect_ratio="16:9",
        safety_filter_level="BLOCK_MEDIUM_AND_ABOVE"
    )
)

for i, image in enumerate(response.generated_images):
    img = Image.open(BytesIO(image.image.image_bytes))
    img.save(f"office_{i}.png")
    print(f"Saved office_{i}.png")`} />

            <h2>{isKo ? '이미지 편집' : 'Image Editing'}</h2>
            <CodeBlock language="python" code={`# Edit existing image with text instructions
original = client.files.upload(file="photo.jpg")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        original,
        "Edit this image: change the background to a sunset beach scene "
        "while keeping the main subject intact."
    ],
    config=types.GenerateContentConfig(
        response_modalities=["TEXT", "IMAGE"]
    )
)

for part in response.candidates[0].content.parts:
    if part.inline_data:
        image = Image.open(BytesIO(part.inline_data.data))
        image.save("edited_photo.png")`} />

            <h2>{isKo ? '효과적인 이미지 프롬프트 작성' : 'Writing Effective Image Prompts'}</h2>
            <TipBox type="tip" title={isKo ? '이미지 프롬프트 팁' : 'Image Prompt Tips'}>
              {isKo
                ? '좋은 이미지 프롬프트에는 다음 요소를 포함하세요: 1) 주제 (무엇을 그릴지), 2) 스타일 (사진, 일러스트, 수채화 등), 3) 조명 (자연광, 스튜디오, 황금시간 등), 4) 구도 (클로즈업, 와이드샷 등), 5) 분위기 (따뜻한, 차가운, 드라마틱 등)'
                : 'Include these elements in good image prompts: 1) Subject (what to draw), 2) Style (photo, illustration, watercolor, etc.), 3) Lighting (natural, studio, golden hour, etc.), 4) Composition (close-up, wide shot, etc.), 5) Mood (warm, cool, dramatic, etc.)'}
            </TipBox>

            <CodeBlock language="text" code={`Good prompt example:
"A photorealistic image of a Japanese garden in autumn.
Red and orange maple leaves scattered on a moss-covered stone path.
A small wooden bridge over a calm koi pond.
Soft afternoon sunlight filtering through the trees.
Shot with a wide-angle lens, high detail, 4K quality."

Bad prompt example:
"A garden."`} />

            <h2>{isKo ? '이미지 생성 제한사항' : 'Image Generation Limitations'}</h2>
            <ul className="guide-list">
              <li>{isKo ? '실존 인물과 유사한 이미지 생성이 제한됩니다.' : 'Generating images resembling real people is restricted.'}</li>
              <li>{isKo ? '폭력적이거나 유해한 콘텐츠는 안전 필터에 의해 차단됩니다.' : 'Violent or harmful content is blocked by safety filters.'}</li>
              <li>{isKo ? '생성된 이미지에는 SynthID 워터마크가 포함됩니다.' : 'Generated images include SynthID watermarks.'}</li>
              <li>{isKo ? '텍스트 렌더링은 아직 완벽하지 않을 수 있습니다.' : 'Text rendering may not be perfect yet.'}</li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? '멀티모달 가이드' : 'Multimodal Guide'} path="/multimodal" />
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
