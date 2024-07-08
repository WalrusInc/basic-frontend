import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Login from './Auth/Login';
import HomePage from './Components/Home';
import RegisterForm from './Auth/Register';
import routes from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  return useRoutes(routes(isLoggedIn, user));
};

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          // Verify token validity with a backend API endpoint
          // If valid, set authenticated state to true
          setAuthenticated(true);
      }
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}


export default App;
