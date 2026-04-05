import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { getPostById, createComment, deleteComment, deletePost } from '../../utils/posts';
import SEOHead from '../../components/SEOHead';

export default function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [commentBody, setCommentBody] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const fetchPost = () => {
    setLoading(true);
    getPostById(id)
      .then(data => setPost(data))
      .catch(() => navigate('/community/board'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  const handleDeletePost = async () => {
    if (!window.confirm(t('community.confirmDelete'))) return;
    try {
      await deletePost(post.id);
      navigate('/community/board');
    } catch {
      alert(t('common.error'));
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentBody.trim() || submitting) return;
    setSubmitting(true);
    try {
      await createComment({
        postId: post.id,
        body: commentBody.trim(),
        authorId: user.id,
        authorName: user.user_metadata?.name || user.email.split('@')[0],
      });
      setCommentBody('');
      fetchPost();
    } catch {
      alert(t('common.error'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm(t('community.confirmDelete'))) return;
    try {
      await deleteComment(commentId);
      fetchPost();
    } catch {
      alert(t('common.error'));
    }
  };

  const formatDate = (d) => {
    const date = new Date(d);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  if (loading) {
    return <div className="loading-page"><div className="loading-spinner" /></div>;
  }

  if (!post) return null;

  const isOwner = user && user.id === post.author_id;

  return (
    <div className="community-page">
      <SEOHead title={post.title} path={`/community/board/${id}`} />
      <div className="container">
        <div className="page-header">
          <Link to="/community/board" className="btn btn-secondary btn-sm" style={{ marginBottom: 16 }}>
            <i className="fa-solid fa-arrow-left" /> {t('common.back')}
          </Link>
        </div>

        <article className="post-detail card">
          <div className="post-detail-header">
            <span className={`post-category ${post.category}`}>{t(`community.${post.category}`)}</span>
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span><i className="fa-solid fa-user" /> {post.author_name}</span>
              <span><i className="fa-solid fa-calendar" /> {formatDate(post.created_at)}</span>
              <span><i className="fa-solid fa-eye" /> {post.view_count || 0}</span>
            </div>
          </div>

          <div className="post-detail-body" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8, padding: '24px 0' }}>
            {post.content}
          </div>

          {isOwner && (
            <div className="post-detail-actions" style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
              <button className="btn btn-danger btn-sm" onClick={handleDeletePost}>
                <i className="fa-solid fa-trash" /> {t('community.delete')}
              </button>
            </div>
          )}
        </article>

        <section className="comments-section card" style={{ marginTop: 24 }}>
          <h3 style={{ marginBottom: 16 }}>
            <i className="fa-solid fa-comment" /> {t('community.comments')} ({post.comments?.length || 0})
          </h3>

          {post.comments && post.comments.length > 0 ? (
            <div className="comment-list">
              {post.comments.map(comment => (
                <div key={comment.id} className="comment-item" style={{ padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', gap: 12, fontSize: '0.85rem', color: 'var(--text-light)' }}>
                      <span><strong>{comment.author_name}</strong></span>
                      <span>{formatDate(comment.created_at)}</span>
                    </div>
                    {user && user.id === comment.author_id && (
                      <button
                        className="btn btn-danger btn-sm"
                        style={{ fontSize: '0.75rem', padding: '2px 8px' }}
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        {t('community.delete')}
                      </button>
                    )}
                  </div>
                  <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{comment.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-light)', textAlign: 'center', padding: 20 }}>
              {t('community.noResults')}
            </p>
          )}

          {isAuthenticated && (
            <form onSubmit={handleAddComment} style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <input
                type="text"
                placeholder={t('community.addComment')}
                value={commentBody}
                onChange={e => setCommentBody(e.target.value)}
                style={{ flex: 1 }}
              />
              <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>
                {t('community.submit')}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
