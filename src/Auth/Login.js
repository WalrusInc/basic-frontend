// src/Login.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate, useNavigate } from 'react-router-dom';
import { login } from '../store/slices/userDetailsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password,
            }, {
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify({ email, password }),
            }
            
        );
     console.log(response);

        if (response) {
            // Replace with actual login logic
            const user = { email: response.data.user.email, name: response.data.user.name }; // Example user object
            const token = response.data.token; // Assume API returns a token
            toast.success('Login successful!');
            dispatch(login({ user, token }));
            navigate('/home');
          } else {
            console.error('Login failed');
          }
    } catch (error) {
        console.error('Login Error:', error);
    }
  };

  useEffect(() => {
        async function fetchCsrfToken() {
            const response = await axios.get('http://127.0.0.1:8000/api/csrf-token');
            console.log(response);
            setCsrfToken(response.data.csrf_token);
        }
        fetchCsrfToken();
    }, []);

    if (isLoggedIn) {
        navigate('/home');
        return null;
      }

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="max-w-md w-full space-y-8 bg-slate-600 p-5 rounded-lg">
      <ToastContainer />
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm bg-slate-700">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

        

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
           
          </div>
          <div class="text-[18px] text-center mt-4">
          <p className="text-white">Don't have an account? <a class="capitalize text-blue-800 hover:underline cursor-pointer" href="/register">register</a></p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
