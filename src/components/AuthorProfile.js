import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/main.css';

// Dummy author data
const authors = {
  1: {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Frontend developer with 5+ years of experience building responsive web applications.",
    articlesCount: 8,
    followers: 1243
  },
  2: {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "UX designer passionate about creating intuitive user experiences.",
    articlesCount: 12,
    followers: 2567
  },
  3: {
    id: 3,
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Backend specialist focusing on scalable architecture and performance optimization.",
    articlesCount: 5,
    followers: 876
  }
};

const AuthorProfile = () => {
  const { authorId } = useParams();
  const author = authors[authorId];

  if (!author) {
    return (
      <div className="not-found">
        <h2>Author not found</h2>
        <Link to="/" className="home-link">Return to homepage</Link>
      </div>
    );
  }

  return (
    <div className="author-profile">
      <div className="author-header">
        <img src={author.image} alt={author.name} className="author-image" />
        <div className="author-info">
          <h1>{author.name}</h1>
          <div className="stats">
            <span>{author.articlesCount} articles</span>
            <span>{author.followers.toLocaleString()} followers</span>
          </div>
        </div>
      </div>

      <div className="author-bio">
        <h2>About</h2>
        <p>{author.bio}</p>
      </div>

      <div className="author-articles">
        <h2>Latest Articles</h2>
        <div className="articles-list">
          {Array.from({ length: Math.min(3, author.articlesCount) }).map((_, i) => (
            <div key={i} className="article-preview">
              <h3>Article Title {i + 1}</h3>
              <p>Sample excerpt from article {i + 1} by {author.name}</p>
              <Link to={`/article/${i + 1}`} className="read-more">Read more →</Link>
            </div>
          ))}
        </div>
      </div>

      <Link to="/" className="back-btn">← Back to all articles</Link>
    </div>
  );
};

export default AuthorProfile;