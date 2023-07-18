import React from 'react';

const BlogPostManagement = () => {
  
  const blogPosts = [
    { id: 1, title: 'Post 1', author: 'Author 1' },
    { id: 2, title: 'Post 2', author: 'Author 2' },
    { id: 3, title: 'Post 3', author: 'Author 3' },
  ];

  return (
    <div>
      <h2>Blog Post Management</h2>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>Author: {post.author}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogPostManagement;
