import React from 'react';

const UserProfile = () => {
  
  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://example.com/avatar.jpg',
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <img src={userProfile.avatar} alt="User Avatar" />
      </div>
      <div>
        <h3>{userProfile.name}</h3>
        <p>Email: {userProfile.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
