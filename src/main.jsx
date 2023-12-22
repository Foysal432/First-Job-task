import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Login from './Page/Login/Login.jsx';
import Home from './Page/Home.jsx';
import Register from './Page/Register/Register.jsx';
import Provider from './Confiq/Provider.jsx';
import DashBoard from './Page/DashBoard/DashBoard.jsx';
import AddTask from './Page/DashBoard/AddTask.jsx';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Route/PrivateRoute.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Review from './Page/Review/Review.jsx';
import Contact from './Page/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'register',
      element:<Register></Register>
    },
    {
      path:'board',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    },
    {
      path:'review',
      element:<Review></Review>
    },
   {
    path:'contact',
    element:<Contact></Contact>
   }
  ]
  },
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider>
  <RouterProvider router={router} />
  </Provider>
     </QueryClientProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
