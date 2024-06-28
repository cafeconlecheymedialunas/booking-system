import React from 'react';

const Dash = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="font-semibold">Card 1</h2>
          <p className="mt-2 text-sm text-gray-600">Content for card 1</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="font-semibold">Card 2</h2>
          <p className="mt-2 text-sm text-gray-600">Content for card 2</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          <h2 className="font-semibold">Card 3</h2>
          <p className="mt-2 text-sm text-gray-600">Content for card 3</p>
        </div>
      </div>
    </div>
  );
}

export default Dash;
