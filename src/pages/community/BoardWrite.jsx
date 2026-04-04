import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { createPost } from '../../utils/posts';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = ['notice', 'resource', 'question', 'free'];

export default function BoardWrite() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user } = useAuth();
  const [category, setCategory] = useState('free');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || submitting) return;
    setSubmitting(true);
    try {
      const post = await createPost({
        category,
        title: title.trim(),
        content: content.trim(),
        authorId: user.id,
        authorName: user.user_metadata?.name || user.email.split('@')[0],
      });
      navigate(`/community/board/${post.id}`);
    } catch {
      alert(t('common.error'));
      setSubmitting(false);
    }
  };

  return (
    <div className="community-page">
      <SEOHead title={t('community.writePost')} path="/community/board/write" />
      <div className="container">
        <div className="page-header">
          <h1>{t('community.writePost')}</h1>
        </div>

        <form onSubmit={handleSubmit} className="card" style={{ padding: 24 }}>
          <div className="form-group" style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
              {t('community.board')}
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`chip ${category === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {t(`community.${cat}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 16 }}>
            <input
              type="text"
              placeholder={t('community.writeTitle')}
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              style={{ width: '100%', fontSize: '1.1rem' }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: 24 }}>
            <textarea
              placeholder={t('community.writeContent')}
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              rows={15}
              style={{ width: '100%', resize: 'vertical', fontFamily: 'inherit' }}
            />
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/community/board')}
            >
              {t('community.cancel')}
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {t('community.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
