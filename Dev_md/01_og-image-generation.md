# OG 이미지 생성 (카카오/SNS 미리보기)

## 개요
카카오톡, 슬랙, 디스코드 등에서 URL 공유 시 미리보기 이미지가 표시되도록 Open Graph 이미지를 생성.

## 구현

### 생성 스크립트
- **파일**: `scripts/generate-og-image.mjs`
- **도구**: sharp (Node.js 이미지 처리 라이브러리)
- **방식**: SVG → PNG 변환

### 생성된 이미지
- **경로**: `public/og/default.png`
- **크기**: 1200 x 630px (OG 표준)

### 디자인 요소
- Google 딥 블루 그라데이션 배경
- Google 4색 그라데이션 액센트 바 (Blue, Red, Yellow, Green)
- "G" 로고 아이콘 (Google 4색 그라데이션)
- 6개 학습 경로 태그 (각각 고유 색상)

### 검증
- 카카오 디버거: https://developers.kakao.com/tool/debugger/sharing
