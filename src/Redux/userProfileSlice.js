import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phone: '',
  address: '',
  gender: '',
  birthday: ''
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateProfileField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    }
  }
});

export const { setProfileData, updateProfileField } = userProfileSlice.actions;
export default userProfileSlice.reducer;
