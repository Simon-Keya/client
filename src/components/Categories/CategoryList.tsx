import React, { useState } from 'react';

interface Category {
  id: number;
  name: string;
}

interface CategoryListProps {
  categories: Category[];
  onCategorySelect: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onCategorySelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategorySelect(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
