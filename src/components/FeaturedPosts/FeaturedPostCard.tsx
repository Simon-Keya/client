import React from 'react';
import styles from './FeaturedPostCard.module.scss';  // Import SCSS file

interface FeaturedPostProps {
  post: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
  onPostClick: () => void;
}

const FeaturedPostCard: React.FC<FeaturedPostProps> = ({ post, onPostClick }) => {
  return (
    <div className={styles.featuredPostCard} onClick={onPostClick}>
      <img src={post.imageUrl} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default FeaturedPostCard;
