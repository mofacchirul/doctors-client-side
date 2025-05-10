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
import Allusers from './DashBords/Page/Alluser/Alluser';
import DoctorForm from './DashBords/Page/DoctorForm/DoctorForm';
import PrivateRuter from './Private/UserPrivate/UserPrivate';
import BlogForm from './DashBords/Page/BlogCard/BlogCard';
import Payment from './DashBords/Page/Payment/Payment';
import Paymenthistory from './Pages/Paymenthistory/Paymenthistory';
import AdminHOme from './DashBords/Page/AdminHOme/AdminHOme';


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
        element:<PrivateRuter><All_Doctors_detels></All_Doctors_detels></PrivateRuter>,
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
      {path:'/payment',element:<Payment></Payment>},
      {path:'/paymenthistory',element:<Paymenthistory></Paymenthistory>}

    ]
  },

  {path:'/dashbord',
    element:<Dashbord></Dashbord>,
    children:[
      {path:'alluser', element:<Allusers></Allusers>},
      {path:'doctorfrom',element:<DoctorForm></DoctorForm>},
      {path:'blogcard',element:<BlogForm></BlogForm>},
      {path:'adminhome',element:<AdminHOme></AdminHOme>}
     
    ]
  }
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
