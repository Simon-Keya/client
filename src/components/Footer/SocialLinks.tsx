import React from 'react';

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="social-links">
      {links.map((link) => (
        <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.icon} alt={link.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
