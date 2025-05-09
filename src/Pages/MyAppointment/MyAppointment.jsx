import React from 'react';
import UserTanStack from './UserTanstack';
import Securecaxios from '../../Axios/SecureAxios/SecureAxios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const [appointment,refetch,] = UserTanStack();
    console.log(appointment);
    const axios= Securecaxios()
    
    const handleCancel = async(id) => {
        // এখানে তুমি cancel করার জন্য API কল দিতে পারো
        axios.delete(`/appointment/${id}`)
        toast.success("Appointment cancelled successfully!");
        await refetch(); 
        console.log("Cancel appointment with id:", id);
        // fetch(`/api/cancel/${id}`, { method: "DELETE" }) ...
    };
 
   

    return (
        <div className="p-6 space-y-2 max-w-6xl mb-4 mx-auto">
            <h2 className="text-4xl lg:5xl font-semibold mb-4 text-center">My appointments</h2>
           {
appointment.map(item=>
    <div key={item._id} className='border p-2 rounded-2xl'>
      <div className='flex  items-center justify-between'>
      <div className='flex items-center'>
        <div>
            <img src={item.img} className='w-44 ' alt="" />
        </div>
        <div className='space-y-3'>
           <h1 className='font-bold text-xl'><span>{item.name}</span> </h1>
           <p className='border rounded-2xl inline px-2 py-1  font-semibold'>{item.specialty}</p>
           <p className='font-semibold mt-2'>{item.email}</p>
           <p> <span className='font-bold'>Date & Time :</span> {item.selectedDate} || {item.selectedTime} </p>


        </div>
       </div >
       <div className="flex flex-col gap-2">
                        <p className='flex justify-center items-center border py-1 rounded bg-green-600 text-white'>$ {item.price}</p>
                       <Link to={'/payment'}>
                       <button className="btn bg-blue-500  btn-block text-white rounded hover:bg-blue-600">
                            Pay Online
                        </button>
                       </Link>
                        <button
                            onClick={() => handleCancel(item._id)}
                            className="btn border border-red-500 text-red-500 rounded hover:bg-red-100"
                        >
                            Cancel Appointment
                        </button>
                    </div>
      </div>
    </div>
)
           }
           
        </div>
    );
};



export default MyAppointment;
