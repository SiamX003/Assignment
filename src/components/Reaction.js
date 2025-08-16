import React from 'react';

const Reaction = ({ type, count, active, onClick }) => {
  const icons = {
    like: '👍',
    comment: '💬'
  };

  return (
    <button 
      className={`reaction ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {icons[type]} {count}
    </button>
  );
};

export default Reaction;