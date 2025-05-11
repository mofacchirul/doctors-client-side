import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Componets/Provider/Auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileField, setProfileData } from '../../Redux/userProfileSlice';
import { Helmet } from 'react-helmet';

const UserProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.userProfile);

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProfileField({ field: name, value }));
  };

  const handleSave = () => {
    localStorage.setItem("userProfileData", JSON.stringify(profile));
    setEditMode(false);
  };

  const HandleLogOut = () => {
    logOut();
    Navigate('/');
  };

  useEffect(() => {
    const savedData = localStorage.getItem("userProfileData");
    if (savedData) {
      dispatch(setProfileData(JSON.parse(savedData)));
    }
  }, [dispatch]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
   <Helmet>
         
                   <title>Doctor | User Profile</title>
               
               </Helmet>
   
      <div className="flex flex-col items-center space-x-4">
        <div className="w-32 h-32 rounded-full bg-blue-300 flex items-center justify-center text-3xl text-purple-600">
          <img src={user?.photoURL} className='w-32 h-32 rounded-full p-2 ' alt="" />
        </div>
        <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
      </div>

      <div>
        <h3 className="text-lg font-semibold underline  mb-2">My Information</h3>
        <p><span className="font-medium">Email:</span> {user?.email}</p>

        <p className='py-1'>
          <span className="font-medium">Phone:</span>
          {editMode ? (
            <input type="text" name="phone" value={profile.phone}
              onChange={handleChange}
              className="border p-1 px-2 ml-2 rounded-2xl " />
          ) : (
            <a href={`tel:${profile.phone || '0000000000'}`} className="text-blue-600 ml-2">
              {profile.phone || '0000000000'}
            </a>
          )}
        </p>

        <p>
          <span className="font-medium">Address:</span>
          {editMode ? (
            <input type="text" name="address" value={profile.address}
              onChange={handleChange}
              className="border p-1 px-2 ml-2 rounded-2xl " />
          ) : (
            <span className="ml-2">{profile.address || 'Not Provided'}</span>
          )}
        </p>
        <p>
        <span className="font-medium">Date:</span> {new Date().toLocaleDateString()}

        </p>
      </div>

      <div className="mt-4 ">
        <h3 className="text-lg font-semibold underline mb-2">Basic Information</h3>
        <p className='py-2'>
          <span className="font-medium">Gender:</span>
          {editMode ? (
            <select name="gender" value={profile.gender}
              onChange={handleChange}
              className="border p-1 px-2 ml-2 rounded-2xl ">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <span className="ml-2">{profile.gender || 'Not Selected'}</span>
          )}
        </p>

        <p>
          <span className="font-medium">Birthday:</span>
          {editMode ? (
            <input type="date" name="birthday" value={profile.birthday}
              onChange={handleChange}
              className="border p-1 px-2 ml-2 rounded-2xl " />
          ) : (
            <span className="ml-2">{profile.birthday || 'Not Selected'}</span>
          )}
        </p>
      </div>

      <div className="mt-6 flex justify-between items-center text-center">
        <div>
          {editMode ? (
            <button onClick={handleSave} className="bg-green-500 btn btn-block w-48 text-white rounded-2xl">Save</button>
          ) : (
            <button onClick={() => setEditMode(true)} className="bg-blue-500 w-48 btn btn-block text-white px-4 py-2 rounded-2xl">Edit</button>
          )}
        </div>
        <div>
          <button onClick={HandleLogOut} className="btn bg-red-700 text-white w-48 rounded-2xl">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
