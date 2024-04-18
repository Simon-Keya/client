import React from 'react';

interface Props {
  userName: string;
  onLogoutClick: () => void;
}

const UserDashboardHeader: React.FC<Props> = (props) => {
  const { userName, onLogoutClick } = props;

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold leading-tight text-center text-gray-800 mb-12">
          {userName}'s Dashboard
        </h1>
        <div className="w-full max-w-2xl">
          <button
            className="w-full block px-4 py-2 text-white bg-red-500 rounded-md shadow-md hover:bg-red-600"
            onClick={onLogoutClick}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHeader;