import React from 'react';

const Appointment = () => {
    return (
        <div className=' py-8 lg:py-12 px-4    max-w-5xl mx-auto'>
           <div className='bg-blue-400  rounded-2xl  p-3 flex justify-center items-center  '>
           <div className='w-full'>
                <h1 className='text-white font-bold text-xl md:text-4xl lg:text-5xl'>
                Book Appointment With 100+ Trusted Doctors
                </h1>
                <button className='btn  mt-4 rounded-2xl'>
                Create Account
                </button>
            </div>
            <div className='w-full'>
                <img className='h-[300px] mx-auto' src="https://i.ibb.co.com/N2FkCZj0/appointment-img.png" alt="" />
            </div>
           </div>
            
        </div>
    );
};

export default Appointment;