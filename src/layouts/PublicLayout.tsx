import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthGuard from '../components/AuthGuard';
import AdminGuard from '../components/AdminGuard';
import { LicenseProvider } from '../components/LicenseGuard';
import LockOverlay from '../components/LockOverlay';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const GeminiModelsGuide = lazy(() => import('../pages/gemini-models/GeminiModelsGuide'));
const GeminiLearnGuide = lazy(() => import('../pages/gemini-learn/GeminiLearnGuide'));
const GeminiAPIGuide = lazy(() => import('../pages/gemini-api/GeminiAPIGuide'));
const GoogleAIStudioGuide = lazy(() => import('../pages/google-ai-studio/GoogleAIStudioGuide'));
const VertexAIGuide = lazy(() => import('../pages/vertex-ai/VertexAIGuide'));
const PromptEngineering = lazy(() => import('../pages/prompt-engineering/PromptEngineering'));
const MultimodalGuide = lazy(() => import('../pages/multimodal/MultimodalGuide'));
const NotebookLMGuide = lazy(() => import('../pages/notebooklm/NotebookLMGuide'));
const ModelComparison = lazy(() => import('../pages/model-comparison/ModelComparison'));
const Glossary = lazy(() => import('../pages/glossary/Glossary'));
const Roadmap = lazy(() => import('../pages/roadmap/Roadmap'));
const Resources = lazy(() => import('../pages/resources/Resources'));
const PromptPractice = lazy(() => import('../pages/prompt-practice/PromptPractice'));
const PromptGallery = lazy(() => import('../pages/prompt-gallery/PromptGallery'));
const AINews = lazy(() => import('../pages/ai-news/AINews'));
const Board = lazy(() => import('../pages/community/Board'));
const BoardDetail = lazy(() => import('../pages/community/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/community/BoardWrite'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout() {
  return (
    <LicenseProvider>
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/gemini-learn" element={<GeminiLearnGuide />} />
            <Route path="/gemini-models" element={<GeminiModelsGuide />} />
            <Route path="/gemini-api" element={<GeminiAPIGuide />} />
            <Route path="/google-ai-studio" element={<GoogleAIStudioGuide />} />
            <Route path="/vertex-ai" element={<VertexAIGuide />} />
            <Route path="/prompt-engineering" element={<PromptEngineering />} />
            <Route path="/multimodal" element={<MultimodalGuide />} />
            <Route path="/notebooklm" element={<NotebookLMGuide />} />
            <Route path="/model-comparison" element={<ModelComparison />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/prompt-practice" element={<PromptPractice />} />
            <Route path="/prompt-gallery" element={<PromptGallery />} />
            <Route path="/ai-news" element={<AINews />} />
            <Route path="/community/board" element={<Board />} />
            <Route path="/community/board/:id" element={<BoardDetail />} />
            <Route path="/community/board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/admin/*" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <LockOverlay />
    </div>
    </LicenseProvider>
  );
}
