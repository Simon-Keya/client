import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  content: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="blog-post-card">
      <h3>{post.title}</h3>
      <p>Author: {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostCard;
