import React from 'react';

interface HeaderProps {
  post: any;
}

const Header: React.FC<HeaderProps> = ({ post }) => {
  return (
    <div className="header">
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
    </div>
  );
};

export default Header;