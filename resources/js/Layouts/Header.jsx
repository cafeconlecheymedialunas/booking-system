import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">My Dashboard</div>
      <div className="flex items-center">
        <button className="mr-4 text-gray-600">Notifications</button>
        <button className="text-gray-600">Profile</button>
      </div>
    </header>
  );
}

export default Header;