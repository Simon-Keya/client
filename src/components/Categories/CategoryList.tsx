import React from 'react';
import styles from './CategoryList.module.scss';  // Import SCSS file

interface CategoryProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryList: React.FC<CategoryProps> = ({ categories, onCategorySelect }) => {
  return (
    <ul className={styles.categoryList}>
      {categories.map((category) => (
        <li key={category} onClick={() => onCategorySelect(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
