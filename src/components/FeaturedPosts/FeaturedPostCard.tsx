import React from 'react';

interface FeaturedPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface FeaturedPostCardProps {
  post: FeaturedPost;
  onPostClick: (post: FeaturedPost) => void;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  post,
  onPostClick,
}) => {
  const handlePostClick = () => {
    onPostClick(post);
  };

  return (
    <div className="featured-post-card" onClick={handlePostClick}>
      <img src={post.imageUrl} alt={post.title} />
      <div className="post-details">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
