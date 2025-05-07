import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Componets/Provider/Auth';

const PrivateRuter = ({children}) => {
    const {loading,user }=useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div>loading</div>
    }
    if(user){
       return children;
    }
    return <Navigate  to="/login" state={{from:location}} ></Navigate>
};

export default PrivateRuter;