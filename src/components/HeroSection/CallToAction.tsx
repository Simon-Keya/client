import React from 'react';
import styles from '.../styles/HeroSection/CallToAction.module.scss';  // Import SCSS file

const CallToAction: React.FC = () => {
  return (
    <div className={styles.callToAction}>
      <h2>Start Reading Today!</h2>
      <button>Subscribe Now</button>
    </div>
  );
};

export default CallToAction;
