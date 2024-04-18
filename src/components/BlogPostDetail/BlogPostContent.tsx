import React from 'react';

interface BlogPostContentProps {
  post: any;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  return (
    <div className="blog-post-content">
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostContent;