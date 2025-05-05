import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/HomePage/Home/Home';
import AllDoctor from './Pages/AllDoctors/AllDoctors';
import Createaccount from './Componets/Auth/CreateAccount/CreateAccount';
import Login from './Componets/Auth/Login/Login';
import { ToastContainer } from 'react-toastify';
import Provider from './Componets/Provider/Provider';


import {
 QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()







const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
{
  path:'/',
  element:<Home></Home>
},
{
  path:'/alldoctors',
  element:<AllDoctor></AllDoctor>
},
{
  path:"/createaccount",
  element:<Createaccount></Createaccount>
},
{
  path:"/login",
  element:<Login></Login>
}
    ]
  },
]);

createRoot(document.getElementById('root')).render(

    <StrictMode>
  <QueryClientProvider client={queryClient}>
  <Provider>
    <RouterProvider  router={router} />

<ToastContainer />
    </Provider>
  </QueryClientProvider>

  </StrictMode>

)
