import React from 'react';
import UserTanStack from './UserTanstack';

const MyAppointment = () => {
    const [appointment] = UserTanStack();
    console.log(appointment);
    
    // const handleCancel = (id) => {
    //     // এখানে তুমি cancel করার জন্য API কল দিতে পারো
    //     console.log("Cancel appointment with id:", id);
    //     // fetch(`/api/cancel/${id}`, { method: "DELETE" }) ...
    // };
    // // refetch,
    // if (loading) {
    //     return <p className="text-center mt-10">Loading...</p>;
    // }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">My appointments</h2>
           {
appointment.map(item=>
    <div>
       <div className=''>
        <div>
            <img src={item.img} alt="" />
        </div>
        <div className='space-y-3'>
           <h1 className='font-bold text-xl'><span>{item.name}</span> </h1>
           <p className='border rounded-2xl inline px-2 py-1  font-semibold'>{item.specialty}</p>
           <p className='font-semibold mt-2'>{item.email}</p>
           <p> <span className='font-bold'>Date & Time :</span> {item.selectedDate} || {item.selectedTime} </p>


        </div>
       </div>
    </div>
)
           }
        </div>
    );
};



export default MyAppointment;
