import React from 'react';
import styles from './Header.module.scss';  // Import SCSS file

const BlogPostsCatalogHeader: React.FC = () => {
  return (
    <header className={styles.blogPostsCatalogHeader}>
      <h2>Latest Blog Posts</h2>
    </header>
  );
};

export default BlogPostsCatalogHeader;
