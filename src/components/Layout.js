import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <header className="main-header">
        <div className="container">
          <Link to="/" className="logo">
            ArticleHub
          </Link>
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="main-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} ArticleHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;