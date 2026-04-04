import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'public', 'og');

mkdirSync(outputDir, { recursive: true });

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0D1B3E"/>
      <stop offset="30%" style="stop-color:#1A237E"/>
      <stop offset="60%" style="stop-color:#283593"/>
      <stop offset="100%" style="stop-color:#1565C0"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4285F4"/>
      <stop offset="25%" style="stop-color:#EA4335"/>
      <stop offset="50%" style="stop-color:#FBBC04"/>
      <stop offset="75%" style="stop-color:#34A853"/>
      <stop offset="100%" style="stop-color:#4285F4"/>
    </linearGradient>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8AB4F8"/>
      <stop offset="100%" style="stop-color:#AECBFA"/>
    </linearGradient>
    <linearGradient id="glow" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" style="stop-color:#4285F4;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#4285F4;stop-opacity:0"/>
    </linearGradient>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4285F4"/>
      <stop offset="33%" style="stop-color:#EA4335"/>
      <stop offset="66%" style="stop-color:#FBBC04"/>
      <stop offset="100%" style="stop-color:#34A853"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Grid pattern overlay -->
  <g opacity="0.03">
    ${Array.from({ length: 30 }, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="${height}" stroke="white" stroke-width="1"/>`).join('\n    ')}
    ${Array.from({ length: 16 }, (_, i) => `<line x1="0" y1="${i * 40}" x2="${width}" y2="${i * 40}" stroke="white" stroke-width="1"/>`).join('\n    ')}
  </g>

  <!-- Decorative circles (Google colors) -->
  <circle cx="1020" cy="130" r="200" fill="none" stroke="#4285F4" stroke-width="1" opacity="0.08"/>
  <circle cx="1020" cy="130" r="145" fill="none" stroke="#EA4335" stroke-width="1" opacity="0.06"/>
  <circle cx="1020" cy="130" r="90" fill="none" stroke="#FBBC04" stroke-width="0.8" opacity="0.05"/>
  <circle cx="1020" cy="130" r="45" fill="none" stroke="#34A853" stroke-width="0.5" opacity="0.04"/>

  <!-- Top-left corner accent (Google 4-color bar) -->
  <rect x="0" y="0" width="6" height="120" fill="url(#accent)" opacity="0.9"/>

  <!-- Glow effect behind title -->
  <ellipse cx="380" cy="260" rx="380" ry="130" fill="url(#glow)"/>

  <!-- Logo icon area -->
  <g transform="translate(70, 130)">
    <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#logoGrad)" filter="url(#shadow)"/>
    <text x="32" y="44" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="white" text-anchor="middle">G</text>
  </g>

  <!-- Brand label -->
  <text x="150" y="174" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="#8AB4F8" letter-spacing="4">GEMINI MASTER</text>

  <!-- Main title -->
  <text x="70" y="285" font-family="Arial, sans-serif" font-size="68" font-weight="900" fill="white" letter-spacing="-1">Gemini AI</text>
  <text x="70" y="360" font-family="Arial, sans-serif" font-size="52" font-weight="700" fill="#e2e8f0" letter-spacing="-0.5">학습 플랫폼</text>

  <!-- Subtitle -->
  <text x="70" y="420" font-family="Arial, sans-serif" font-size="22" fill="#94a3b8">Google Gemini AI의 모든 기능을 한 곳에서 학습하세요</text>

  <!-- Feature tags -->
  <g transform="translate(70, 465)">
    <rect x="0" y="0" width="120" height="36" rx="18" fill="#4285F4" fill-opacity="0.15" stroke="#4285F4" stroke-width="1" stroke-opacity="0.3"/>
    <text x="60" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#8AB4F8" text-anchor="middle">Gemini API</text>

    <rect x="135" y="0" width="130" height="36" rx="18" fill="#FBBC04" fill-opacity="0.15" stroke="#FBBC04" stroke-width="1" stroke-opacity="0.3"/>
    <text x="200" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#FDD663" text-anchor="middle">AI Studio</text>

    <rect x="280" y="0" width="110" height="36" rx="18" fill="#34A853" fill-opacity="0.15" stroke="#34A853" stroke-width="1" stroke-opacity="0.3"/>
    <text x="335" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#81C995" text-anchor="middle">Vertex AI</text>

    <rect x="405" y="0" width="120" height="36" rx="18" fill="#E040FB" fill-opacity="0.15" stroke="#E040FB" stroke-width="1" stroke-opacity="0.3"/>
    <text x="465" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#EA80FC" text-anchor="middle">Prompts</text>

    <rect x="540" y="0" width="120" height="36" rx="18" fill="#FF6D00" fill-opacity="0.15" stroke="#FF6D00" stroke-width="1" stroke-opacity="0.3"/>
    <text x="600" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#FFAB40" text-anchor="middle">Multimodal</text>

    <rect x="675" y="0" width="130" height="36" rx="18" fill="#7B1FA2" fill-opacity="0.15" stroke="#7B1FA2" stroke-width="1" stroke-opacity="0.3"/>
    <text x="740" y="23" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="#CE93D8" text-anchor="middle">NotebookLM</text>
  </g>

  <!-- Bottom bar -->
  <rect x="0" y="590" width="${width}" height="40" fill="#030712" opacity="0.6"/>
  <rect x="0" y="588" width="${width}" height="2" fill="url(#accent)" opacity="0.5"/>

  <!-- URL in bottom bar -->
  <text x="70" y="616" font-family="Arial, sans-serif" font-size="16" fill="#64748b">gemini.dreamitbiz.com</text>

  <!-- Powered by text -->
  <text x="1130" y="616" font-family="Arial, sans-serif" font-size="14" fill="#475569" text-anchor="end">Powered by Google Gemini</text>
</svg>`;

async function generate() {
  try {
    await sharp(Buffer.from(svg))
      .png({ quality: 95, compressionLevel: 9 })
      .toFile(join(outputDir, 'default.png'));

    const stats = (await import('fs')).statSync(join(outputDir, 'default.png'));
    console.log(`OG image generated: public/og/default.png (${(stats.size / 1024).toFixed(1)}KB)`);
    console.log(`Dimensions: ${width}x${height}`);
  } catch (err) {
    console.error('Error generating OG image:', err);
    process.exit(1);
  }
}

generate();
