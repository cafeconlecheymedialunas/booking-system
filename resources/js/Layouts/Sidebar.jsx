import React from 'react';
import { Link } from '@inertiajs/react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 font-bold text-lg border-b">Dashboard</div>
      <ul className="mt-2">
        <li>
          <Link href="/business" className="block p-4 hover:bg-gray-200">Business</Link>
        </li>
        <li>
          <Link href="/reports" className="block p-4 hover:bg-gray-200">Reports</Link>
        </li>
        <li>
          <Link href="/settings" className="block p-4 hover:bg-gray-200">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
