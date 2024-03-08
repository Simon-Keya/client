import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from './components/Header/Logo';
import CallToAction from './components/HeroSection/CallToAction';
import FeaturedPostCard from './components/FeaturedPosts/FeaturedPostCard';
import CategoryList from './components/Categories/CategoryList';
import SocialLinks from './components/Footer/SocialLinks';
import BlogPostsCatalog from './components/BlogPostCatalog/Header';
import BlogPostDetail from './components/BlogPostDetail/Header';
import UserDashboard from './components/UserDashboard/Header';
import AdminDashboard from './components/AdminDashboard/Header';

function App() {
  return (
    // Wrap everything within a single React Fragment (`<>...</>`)
    <>
      <Router>
        <Logo />
        <Route path="/" element={<CallToAction />} />
        <Route
          path="/featured"
          element={(
            <FeaturedPostCard
              post={{
                id: 1,
                title: 'Sample Title',
                description: 'Sample Description',
                imageUrl: 'sample-image.jpg',
              }}
              onPostClick={() => {}}
            />
          )}
        />
        <Route path="/categories" element={<CategoryList categories={[]} onCategorySelect={() => {}} />} />
        <Route path="/blog" element={<BlogPostsCatalog />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Router>
      <SocialLinks links={[]} />
    </>
  );
}

export default App;
