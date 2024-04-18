import React from 'react';

interface Props {
  post: {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
  };
  onClick: () => void;
}

const FeaturedPostCard: React.FC<Props> = (props) => {
  const { post, onClick } = props;
  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-25" />
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">{post.title}</h2>
        <p className="mt-2 text-white">{post.date}</p>
        <p className="mt-2 text-white">{post.description}</p>
      </div>
    </div>
  );
};

export default FeaturedPostCard;