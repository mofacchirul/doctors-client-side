import React, {  useEffect, useState } from 'react';

import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
import auth from '../Firebase/Firebase';
import { AuthContext } from './Auth';
import Publicaxios from '../../Axios/PublicAxios/PublicAxios';
const Provider = ({children}) => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
   const axios = Publicaxios()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
             const userInfo= {email:currentUser.email}
             axios.post('/jwt',userInfo)
              .then(res=>{
                if(res.data.token){
                     localStorage.setItem('access-token',res.data.token);
                       setLoading(false);
                }
              })
      
      }
      else{
              localStorage.removeItem('access-token')
        setLoading(false);
      }
   
    });
    return () => {
      unsubscribe();
    };
  }, [axios]);

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
};

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    googleSignIn
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default Provider;