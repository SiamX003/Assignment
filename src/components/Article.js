import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reaction from './Reaction';

const Article = ({ article }) => {
  const [activeReaction, setActiveReaction] = useState(null);

  const handleReaction = (reactionType) => {
    setActiveReaction(reactionType === activeReaction ? null : reactionType);
  };

  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div className="article-footer">
        <Link to={`/author/${article.author.id}`} className="author-link">
          By {article.author.name}
        </Link>
        <div className="reactions">
          <Reaction 
            type="like" 
            count={article.reactions.likes}
            active={activeReaction === 'like'}
            onClick={() => handleReaction('like')}
          />
          <Reaction 
            type="comment" 
            count={article.reactions.comments}
            active={activeReaction === 'comment'}
            onClick={() => handleReaction('comment')}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;