import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/userDetailsSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    
  };

  return (
    <button
      onClick={handleLogout}
      className=" text-red-500 font-bold rounded focus:outline-none focus:shadow-outline"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
