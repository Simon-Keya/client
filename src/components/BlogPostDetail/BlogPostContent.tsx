import React from 'react';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => {
  return (
    <div className="blog-post-content">
      <p>{content}</p>
    </div>
  );
};

export default BlogPostContent;
