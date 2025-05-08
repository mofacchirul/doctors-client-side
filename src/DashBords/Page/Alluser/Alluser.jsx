import React from 'react';
import { IoIosContacts } from "react-icons/io";
import Securecaxios from '../../../Axios/SecureAxios/SecureAxios';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
const Allusers = () => {
    const axios = Securecaxios();   
    const { data: users,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('/user'); // ✅ Added 'await' to resolve the promise
            return res.data;
        }
    });

    
    const HandleDelet=async(id)=>{
        console.log(id);
       axios.delete(`/user/${id}`)
               toast.success("Appointment cancelled successfully!");
               await refetch(); 
               console.log("Cancel appointment with id:", id);
    }


    const HandleAdmin = (id) => {
       
       console.log(id);
        
        // axios.patch(`/user/${id}`) // Remove `:`
        //     .then(res => {
             
        //         if (res.data.modifiedCount > 0) {
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "User is now an Admin",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //             refetch(); // Refresh user data after update
        //         }
        //     })
        //     .catch(error => {
        //         console.error("Error updating user:", error);
        //         Swal.fire("Error", "Failed to make user admin", "error");
        //     });
    };
    





    return (
        <div className="max-w-6xl mx-auto">
            <h1 className=' text-2xl  lg:text-4xl'>All Users</h1>
            <div className="overflow-x-auto rounded-box border py-6 border-base-content/5 bg-base-100">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className=" ">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping Users */}
                        {
                        
                        users?.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>
                                <button onClick={()=>HandleAdmin(user._id)} className='text-3xl text-blue-400'>  
                   <IoIosContacts />
                
                </button>

                                </td>
                                <td>
                                    <button onClick={()=>HandleDelet(user._id)} className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-100">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;