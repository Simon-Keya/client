// BlogPostDetail/Header.tsx
import React from 'react';
import styles from './Header.module.scss';  // Import SCSS file

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
}

const BlogPostDetailHeader: React.FC<BlogPost> = ({ id, title, author, date }) => {
  return (
    <header className={styles.blogPostDetailHeader}>
      <h1>{title}</h1>
      <p>
        By {author} on {date}
      </p>
    </header>
  );
};

export default BlogPostDetailHeader;