import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from '../Layout/Homelayout';
import Authlayout from '../Layout/Authlayout';
import Login from '../Layout/Login';
import Register from '../Layout/Register';
import Coltcategory from '../Layout/Coltcategory';
import ColthDeatils from '../Layout/ColthDeatils';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout> ,
      children:[
        {
          path:"",
          element: <Navigate to = {"/brand/1"}></Navigate>
        },
        {
          path:"colth/:colthid",
          element: <ColthDeatils></ColthDeatils>,
          loader:() => fetch('/public/colth.json')
        },
        {
          path:"/brand/:id",
          element: <Coltcategory></Coltcategory>,
          loader:({params})=>
          fetch(`./public/colth.json${params.id}`)
        },
      ]
    },
    {
        path: "/news",
        element: <div>news layout!</div>,
      },
      {
        path: "/auth",
        element:<Authlayout></Authlayout>,
        children:[
          {
            path:'/auth/login',
            element: <Login></Login>,
          },

          {
            path:'/auth/register',
            element: <Register></Register>,
          },


        ]
      },
      {
        path: "*",
        element: <div>error</div>,
      },
  ]);

export default router;