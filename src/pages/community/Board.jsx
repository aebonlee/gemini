import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { getPosts } from '../../utils/posts';
import SEOHead from '../../components/SEOHead';
import Pagination from '../../components/Pagination';

const CATEGORIES = ['all', 'notice', 'resource', 'question', 'free'];
const POSTS_PER_PAGE = 15;

export default function Board() {
  const { language, t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const isKo = language === 'ko';
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput), 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    setLoading(true);
    getPosts({ category, search })
      .then(data => setPosts(data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
    setCurrentPage(1);
  }, [category, search]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginated = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const formatDate = (d) => {
    const date = new Date(d);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <div className="community-page">
      <SEOHead title={t('community.title')} path="/community/board" />
      <div className="container">
        <div className="page-header">
          <h1>{t('community.title')}</h1>
        </div>

        <div className="community-header">
          <div className="community-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`chip ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {t(`community.${cat}`)}
              </button>
            ))}
          </div>
          {isAuthenticated && (
            <Link to="/community/board/write" className="btn btn-primary btn-sm">
              {t('community.writePost')}
            </Link>
          )}
        </div>

        <div className="community-search">
          <input
            type="text"
            placeholder={t('community.search')}
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="loading-page"><div className="loading-spinner" /></div>
        ) : (
          <>
            <div className="post-list">
              {paginated.length === 0 ? (
                <p className="text-center" style={{ padding: 40, color: 'var(--text-light)' }}>
                  {t('community.noResults')}
                </p>
              ) : paginated.map(post => (
                <Link key={post.id} to={`/community/board/${post.id}`} className="post-item">
                  <span className={`post-category ${post.category}`}>{t(`community.${post.category}`)}</span>
                  <span className="post-title">{post.title}</span>
                  <div className="post-meta">
                    <span>{post.author_name}</span>
                    <span>{formatDate(post.created_at)}</span>
                    <span><i className="fa-solid fa-eye" /> {post.view_count || 0}</span>
                    <span><i className="fa-solid fa-comment" /> {post.comment_count}</span>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </>
        )}
      </div>
    </div>
  );
}
