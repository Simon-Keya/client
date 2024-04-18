import React from 'react';

interface Props {
  user: {
    id: number;
    name: string;
    email: string;
    avatar: string;
  };
  onEditClick: (userId: number) => void;
}

const UserProfile: React.FC<Props> = (props) => {
  const { user, onEditClick } = props;
  const { id, name, email, avatar } = user;

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold leading-tight text-center text-gray-800 mb-12">
          {name}'s Profile
        </h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6">
          <div className="flex-shrink-0">
            <img
              className="h-48 w-48 object-cover md:h-64 md:w-64 rounded-full"
              src={avatar}
              alt={`${name}'s avatar`}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold leading-tight text-center text-gray-800">
                {name}
              </h2>
              <p className="text-gray-600 text-base">{email}</p>
            </div>
            <div className="mt-4">
              <button
                className="w-full block px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
                onClick={() => onEditClick(id)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;