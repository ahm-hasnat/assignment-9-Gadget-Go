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

export const router = createBrowserRouter([
  {
    path: '/',
   Component:Root,
   errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        path: '/',
        Component:Home ,
      },
      {
        path:'/details/:id',
        Component: CardDetails,
        loader:()=>fetch('/data.json')
        
      },
      {
        path : '/profile',
        Component: Profile,
      }
    ]
},
{
 path : '/errorpage',
 Component:Errorpage,
},
{
    path:'/auth',
    Component: Auth,
    children:[
        {
    path:'/auth/login',
    Component : Login,
},
{
    path:'/auth/register',
   Component : Register,
},{
  path:'/auth/reset',
  Component: ResetPass,
}
    ]
}

]);