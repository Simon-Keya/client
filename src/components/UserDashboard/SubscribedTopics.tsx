import React from 'react';

const SubscribedTopics = () => {
  
  const subscribedTopics = ['Technology', 'Travel', 'Food'];

  return (
    <div>
      <h2>Subscribed Topics</h2>
      <ul>
        {subscribedTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscribedTopics;
