import React from 'react';
import { createBrowserRouter } from 'react-router'; 

import Root from '../Root/Root';
import Errorpage from '../Error/Errorpage';
import Home from '../Home/Home';
import CardDetails from '../Details/CardDetails';
import Login from '../Auth/Login';
import Auth from '../Auth/Auth';
import Register from '../Auth/Register';
import Profile from '../Profile/Profile';
import ResetPass from '../ResetPass/ResetPass';
import PrivateRoute from '../../AuthProvider/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, 
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
        loader: () => fetch('/data.json')
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path: '/errorpage',
    element: <Errorpage /> 
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      },
      {
        path: '/auth/reset',
        element: <ResetPass />
      }
    ]
  }
]);
