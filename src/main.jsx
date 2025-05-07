// index.js

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

// ✅ Rename your custom Auth provider
import AuthProvider from './Componets/Provider/Provider';

import { Provider } from 'react-redux'; // redux provider
import { store } from './Redux/store';

import {
 QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import BestDoctor from './Pages/HomePage/BestDoctor/BestDoctor';
import Contact from './Pages/Contak/Contack';
import BlogPage from './Pages/Blog/Blog';
import All_Doctors_detels from './Pages/AllDoctors/All_Doctors_detels/All_Doctors_detels';
import UserProfile from './Pages/UserProfile/UserProfil';
import MyAppointment from './Pages/MyAppointment/MyAppointment';
import Dashbord from './DashBords/Dashbord';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      { path:'/', element:<Home></Home> },
      { path:'/alldoctors', element:<AllDoctor></AllDoctor> },
      {
        path:'/all_doctors_detels/:id',
        element:<All_Doctors_detels></All_Doctors_detels>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/alldoctor/${params.id}`)
      },
      { path:'/about', element:<BestDoctor></BestDoctor> },
      { path:'/blog', element:<BlogPage></BlogPage> },
      { path:'/contack', element:<Contact></Contact> },
      { path:"/createaccount", element:<Createaccount></Createaccount> },
      { path:"/login", element:<Login></Login> },
      { path:'/userprofile', element:<UserProfile></UserProfile> },
      {path:'/myappointment',element:<MyAppointment></MyAppointment>},
      {path:'/dashbord',element:<Dashbord></Dashbord>}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  </Provider>
);
