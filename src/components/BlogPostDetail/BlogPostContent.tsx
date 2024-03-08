import React from 'react';
import styles from './BlogPostContent.module.scss';  // Import SCSS file

const BlogPostContent: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className={styles.blogPostContent} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default BlogPostContent;