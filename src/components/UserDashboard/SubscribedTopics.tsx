import React from 'react';

interface Props {
  topics: string[];
  onUnsubscribeClick: (topic: string) => void;
}

const SubscribedTopics: React.FC<Props> = (props) => {
  const { topics, onUnsubscribeClick } = props;

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold leading-tight text-center text-gray-800 mb-12">
          Subscribed Topics
        </h2>
        <ul className="space-y-4">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="text-gray-600">{topic}</div>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-md shadow-md hover:bg-red-600"
                onClick={() => onUnsubscribeClick(topic)}
              >
                Unsubscribe
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscribedTopics;