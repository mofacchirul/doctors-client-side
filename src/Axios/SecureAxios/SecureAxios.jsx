import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Componets/Provider/Auth';

const axiossecure= axios.create({
    baseURL:'http://localhost:5000',
    withCredentials: true,
})
const Securecaxios = () => {
  const navigate=useNavigate()
  const {logOut}=useContext(AuthContext)

 useEffect(()=>{
axiossecure.interceptors.request.use(function (config) {
   const token =localStorage.getItem('access-token');
   console.log(token);
   console.log(localStorage.getItem('access-token'));

  config.headers.authorization = `Bearer ${token}`

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

axiossecure.interceptors.response.use(function (response) {
  
    return response;
  },    async (error) => {
    const status= error.response.status;
console.log(status);

                if(status === 401 || status === 403) {
          await logOut();
          navigate('/login');
        }
   
    return Promise.reject(error);
  });
 },[navigate,logOut])







    return axiossecure
};

export default Securecaxios