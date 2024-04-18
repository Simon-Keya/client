import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SocialLinks from './components/Footer/SocialLinks';
import BlogPostDetail from './components/BlogPostDetail/Header';
import UserDashboard from './components/UserDashboard/Header';
import AdminDashboard from './components/AdminDashboard/Header';

import  './styles/Footer/SocialLinks.module.scss';
import  './styles/BlogPostDetail/Header.module.scss';
import  './styles/UserDashboard/Header.module.scss';
import './styles/AdminDashboard/Header.module.scss';

const post = {
  id: 1,
  title: 'Sample Blog Post',
  author: 'Sample User',
  date: '2022-01-01',
  content: 'This is a sample blog post.',
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BlogPostDetail post={post} />} />
          <Route path="/user" element={<UserDashboard userName="Sample User" onLogoutClick={() => {}} />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
      <SocialLinks links={[]} />
    </>
  );
};

export default App;