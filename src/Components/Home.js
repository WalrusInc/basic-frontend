// HomePage.js

import React from 'react';
import LogoutButton from '../Auth/LogoutButton';

const HomePage = ({ name, email, userType }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">User Information </h2>
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <p className="text-gray-900 leading-relaxed">{name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <p className="text-gray-900 leading-relaxed">{email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">User Type:</label>
          <p className="text-gray-900 leading-relaxed">{userType}</p>
        </div>
        <div className="float-right"> <LogoutButton /></div>
      </div>
    </div>
  );
};

export default HomePage;
