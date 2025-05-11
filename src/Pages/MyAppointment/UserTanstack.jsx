import React, { useContext } from 'react';
import { AuthContext } from '../../Componets/Provider/Auth';
import Securecaxios from '../../Axios/SecureAxios/SecureAxios';
import { useQuery } from '@tanstack/react-query';

const UserTanStack = () => {
    const {user}=useContext(AuthContext);
    const axios= Securecaxios()
 const {data:appointment=[],refetch,isLoading:loading}=useQuery({
    queryKey:['appointment',user?.email],
    queryFn: async () => {
        try {
          const res = await axios.get(`/appointment?email=${user?.email}`);

          return res.data;
        } catch (error) {
          console.error("Error fetching appointment:", error);
          return [];
        }
      }
 })
 return [appointment,refetch,loading]
};

export default UserTanStack;