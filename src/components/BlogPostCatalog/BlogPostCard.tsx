import React from 'react';
interface Props {
  post: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
  };
  onReadMoreClick: (postId: number) => void;
}

const BlogPostCard: React.FC<Props> = (props) => {
  const { post, onReadMoreClick } = props;
  const { id, title, description, imageUrl, createdAt } = post;
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div
      className="bg-white shadow-md rounded-md overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6 cursor-pointer"
      onClick={() => onReadMoreClick(id)}
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="mb-2">
          <p className="text-gray-500 text-sm">{formattedDate}</p>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;