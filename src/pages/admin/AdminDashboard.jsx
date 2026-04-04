import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { getPostStats, getPosts } from '../../utils/posts';
import SEOHead from '../../components/SEOHead';

export default function AdminDashboard() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({ posts: 0, comments: 0, views: 0 });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getPostStats(),
      getPosts({ limit: 10 }),
    ])
      .then(([statsData, postsData]) => {
        setStats(statsData);
        setRecentPosts(postsData);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (d) => {
    const date = new Date(d);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  if (loading) {
    return <div className="loading-page"><div className="loading-spinner" /></div>;
  }

  return (
    <div className="admin-page">
      <SEOHead title={t('nav.admin')} path="/admin" />
      <div className="container">
        <div className="page-header">
          <h1><i className="fa-solid fa-shield-halved" /> {t('nav.admin')}</h1>
        </div>

        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
          <div className="card stat-card" style={{ padding: 24, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>{stats.posts}</div>
            <div style={{ color: 'var(--text-light)', marginTop: 4 }}>
              <i className="fa-solid fa-file-lines" /> Total Posts
            </div>
          </div>
          <div className="card stat-card" style={{ padding: 24, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>{stats.comments}</div>
            <div style={{ color: 'var(--text-light)', marginTop: 4 }}>
              <i className="fa-solid fa-comments" /> Total Comments
            </div>
          </div>
          <div className="card stat-card" style={{ padding: 24, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>{stats.views}</div>
            <div style={{ color: 'var(--text-light)', marginTop: 4 }}>
              <i className="fa-solid fa-eye" /> Total Views
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginBottom: 16 }}>Recent Posts</h2>
          {recentPosts.length === 0 ? (
            <p style={{ color: 'var(--text-light)', textAlign: 'center', padding: 20 }}>
              No posts yet.
            </p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>ID</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>Category</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>Title</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>Author</th>
                    <th style={{ textAlign: 'right', padding: '8px 12px' }}>Views</th>
                    <th style={{ textAlign: 'right', padding: '8px 12px' }}>Comments</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPosts.map(post => (
                    <tr key={post.id} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '8px 12px' }}>{post.id}</td>
                      <td style={{ padding: '8px 12px' }}>
                        <span className={`post-category ${post.category}`}>{post.category}</span>
                      </td>
                      <td style={{ padding: '8px 12px' }}>
                        <Link to={`/community/board/${post.id}`} style={{ color: 'var(--text)' }}>
                          {post.title}
                        </Link>
                      </td>
                      <td style={{ padding: '8px 12px' }}>{post.author_name}</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right' }}>{post.view_count || 0}</td>
                      <td style={{ padding: '8px 12px', textAlign: 'right' }}>{post.comment_count}</td>
                      <td style={{ padding: '8px 12px' }}>{formatDate(post.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
