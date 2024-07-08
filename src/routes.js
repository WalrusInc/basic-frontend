import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from './Auth/Login';
import HomePage from './Components/Home';
import RegisterForm from './Auth/Register';
import { useSelector } from 'react-redux';


const routes = (isLoggedIn, data) => [
  
  {
    path: '/',
    element: isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: isLoggedIn ? <HomePage name={data ? data.user.name:""} email={data ? data.user.email:""} userType="Admin" /> : <Navigate to="/login" />,
  },
  {
    path: '/register',
    element: <RegisterForm />,
  }
];

export default routes;
