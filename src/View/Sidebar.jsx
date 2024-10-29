// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Admin Sidebar</h2>
      <ul>
        <li className="mb-2">
          <Link to="/admin/users" className="hover:underline">Users</Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/bank-details" className="hover:underline">Bank Details</Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/banking-last" className="hover:underline">Banking Last Details</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
