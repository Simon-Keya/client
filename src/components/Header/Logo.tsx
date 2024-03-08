import React from 'react';
import styles from '.../styles/Header/Logo.module.scss';  // Import SCSS file

const Logo: React.FC = () => {
  return (
    <h1 className={styles.logo}>My Blog</h1>
  );
};

export default Logo;
