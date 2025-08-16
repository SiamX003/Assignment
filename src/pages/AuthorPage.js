import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/main.css';

// Dummy author data
const authors = {
  1: {
    id: 1,
    name: "John Doe",
    image: "author1.jpg",
    bio: "Frontend developer with 5 years of experience...",
    articles: 12
  }
  // Add more authors...
};

const AuthorPage = () => {
  const { authorId } = useParams();
  const author = authors[authorId];

  if (!author) return <div>Author not found</div>;

  return (
    <div className="author-profile">
      <div className="author-header">
        <img src={author.image} alt={author.name} className="author-image" />
        <h1>{author.name}</h1>
      </div>
      <div className="author-details">
        <p>{author.bio}</p>
        <div className="author-stats">
          <span>Articles: {author.articles}</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;