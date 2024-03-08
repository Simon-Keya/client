import React from 'react';
import styles from './SocialLinks.module.scss';  // Import SCSS file

interface SocialLink {
  icon: string;
  url: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <ul className={styles.socialLinks}>
      {links.map((link) => (
        <li key={link.url}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <i className={`fa fa-${link.icon}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
