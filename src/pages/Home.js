import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

// Dummy data
const articles = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Article Title ${i + 1}`,
  excerpt: `This is a sample excerpt for article ${i + 1}. It shows a brief preview of the content.`,
  content: `Full content of article ${i + 1} would go here...`,
  date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
  author: {
    id: i % 3 + 1, // 3 different authors
    name: ['John Doe', 'Jane Smith', 'Alex Johnson'][i % 3],
    image: `https://randomuser.me/api/portraits/${['men', 'women', 'men'][i % 3]}/${i % 30 + 1}.jpg`
  },
  reactions: {
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
    shares: Math.floor(Math.random() * 30)
  }
}));

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;
  const [activeReactions, setActiveReactions] = useState({});

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handleReaction = (articleId, reactionType) => {
    setActiveReactions(prev => ({
      ...prev,
      [articleId]: prev[articleId] === reactionType ? null : reactionType
    }));
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1>Article Hub</h1>
        <p>Discover and share knowledge</p>
      </header>

      <main className="articles-container">
        {currentArticles.map(article => (
          <article key={article.id} className="article-card">
            <div className="article-header">
              <Link to={`/author/${article.author.id}`} className="author-info">
                <img 
                  src={article.author.image} 
                  alt={article.author.name} 
                  className="author-avatar"
                />
                <span className="author-name">{article.author.name}</span>
              </Link>
              <span className="article-date">{article.date}</span>
            </div>

            <h2 className="article-title">
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </h2>

            <p className="article-excerpt">{article.excerpt}</p>

            <div className="article-footer">
              <div className="reactions">
                <button
                  className={`reaction-btn ${activeReactions[article.id] === 'like' ? 'active' : ''}`}
                  onClick={() => handleReaction(article.id, 'like')}
                >
                  👍 {article.reactions.likes}
                </button>
                <button
                  className={`reaction-btn ${activeReactions[article.id] === 'comment' ? 'active' : ''}`}
                  onClick={() => handleReaction(article.id, 'comment')}
                >
                  💬 {article.reactions.comments}
                </button>
                <button
                  className={`reaction-btn ${activeReactions[article.id] === 'share' ? 'active' : ''}`}
                  onClick={() => handleReaction(article.id, 'share')}
                >
                  ↗️ {article.reactions.shares}
                </button>
              </div>
            </div>
          </article>
        ))}
      </main>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;