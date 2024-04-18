import React from 'react';

interface Props {
  categories: string[];
  onClick: (category: string) => void;
}

const CategoryList: React.FC<Props> = (props) => {
  const { categories, onClick } = props;
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold leading-tight text-center text-gray-800 mb-12">
          Categories
        </h2>
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 m-2 text-gray-700 bg-gray-200 rounded-md shadow-md hover:bg-gray-300"
              onClick={() => onClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;