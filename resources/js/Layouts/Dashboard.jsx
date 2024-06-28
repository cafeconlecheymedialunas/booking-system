import React from 'react';

import BusinessIndex from '../Pages/Business/Index';
import Sidebar from '@/Layouts/Sidebar';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = ({ children, auth }) => {
  return (
   
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
          <ToastContainer/>
        </div>
      </div>
   


  );
}

export default Dashboard;
