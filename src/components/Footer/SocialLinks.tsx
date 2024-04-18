import React from 'react';

interface Props {
  links: {
    url: string;
    icon: string;
    name: string;
  }[];
}

const SocialLinks: React.FC<Props> = (props) => {
  const { links } = props;
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold leading-tight text-gray-800 mb-12">
          Follow Us
        </h2>
        <div className="flex justify-center">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-16 h-16 mx-2 text-gray-600 rounded-full shadow-md hover:bg-gray-200"
            >
              <img src={link.icon} alt={link.name} className="w-8 h-8 mb-1" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;