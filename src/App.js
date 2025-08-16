import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AuthorProfile from './components/AuthorProfile';
import ArticleDetail from './components/Article';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import './styles/main.css';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home route with article listings */}
          <Route path="/" element={<Home />} />
          
          {/* Author profile route */}
          <Route path="/author/:authorId" element={<AuthorProfile />} />
          
          {/* Article detail route */}
          <Route path="/article/:articleId" element={<ArticleDetail />} />
          
          {/* 404 catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;