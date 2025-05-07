import React, { useContext, useState } from 'react';
import { MdVerified } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Securecaxios from '../../../Axios/SecureAxios/SecureAxios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Componets/Provider/Auth';

const All_Doctors_detels = () => {
  const doctor = useLoaderData();
  const {user}=useContext(AuthContext)
const axios = Securecaxios()
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
 const navigate= useNavigate()
  
{/* {selectedTime ? `Book appointment on ${selectedDate}, ${selectedTime}` : 'Select a slot to book'} */}
  const days = [
    { day: 'WED', date: 7 },
    { day: 'THU', date: 8 },
    { day: 'FRI', date: 9 },
    { day: 'SAT', date: 10 },
    { day: 'SUN', date: 11 },
    { day: 'MON', date: 12 },
    { day: 'TUE', date: 13 },
  ];

  const times = [
    '10:00', '10:30',
    '11:00', '11:30',
    '12:00', '12:30',
    '13:00', '13:30',
    '14:00', '14:30',
    '15:00', '15:30',
    '16:00', '16:30',
    '17:00', '17:30',
    '18:00', '18:30',
    '19:00', '19:30',
    '20:00'
  ];
  
  const aparment= {
    name:doctor.name,
    email:user.email,
    appointment:doctor.appointment_fee,
    img:doctor.img,
    specialty:doctor.specialty,
    selectedDate,
    selectedTime,

  }
    const HandleSubmit = async () => {
        if (!selectedDate || !selectedTime) {
          toast.error("Please select a date and time slot before booking.");
          return;
        }

    await axios.post('/appointment', aparment);

    toast.success("Appointment booked successfully!");
    navigate('/myappointment')
}
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="lg:flex items-center rounded-xl">
        <img
          src={doctor?.img}
          alt={doctor?.name}
          className="mx-auto"
        />
        <div className="md:col-span-2 ">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
            {doctor?.name}  <span className="text-blue-500"><MdVerified /></span>
          </h2>
          <p className="text-gray-600 mb-2">{doctor?.degree} </p>
          <p className='border rounded-2xl inline px-2 mr-2'>
           {doctor?.specialty} 
          </p>
          <p className='border rounded-2xl inline px-2'> {doctor?.experience}</p>
          <p className="text-sm text-gray-700"><span className='text-lg font-bold'>About</span> <br /> {doctor?.about}</p>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            Appointment fee: <span className="text-blue-600">${doctor?.appointment_fee}</span>
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Booking slots</h3>

        {/* Date Buttons */}
        <div className="flex gap-3 flex-wrap mb-4">
          {days.map((d) => (
            <button
              key={d.day}
              onClick={() => setSelectedDate(d.day)}
              className={`px-4 py-2 rounded-full border ${
                selectedDate === d.day
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300'
              }`}
            >
              {d.day} <br /> {d.date}
            </button>
          ))}
        </div>

        {/* Time Slots */}
        <div className="flex gap-3 flex-wrap mb-6">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 rounded-full border ${
                selectedTime === time
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300'
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        <button
        onClick={HandleSubmit}
          disabled={!selectedTime}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold "
        >
            Book appointment

        </button>
      </div>
    </div>
  );
};

export default All_Doctors_detels;
