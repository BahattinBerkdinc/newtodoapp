import { createSlice } from "@reduxjs/toolkit";

// Check if the username is available in localStorage
const storedUserName = localStorage.getItem('userName');

const initialState = {
  userName: storedUserName || "", // Use the value from localStorage if available
  profileImage: localStorage.getItem('profileImage') || "", // Use the value from localStorage if available
};

export const addUserInfoSlice = createSlice({
  name: "addUserInfo",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem("userName", action.payload);
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
      localStorage.setItem("profileImage", action.payload); // Save the image URL to localStorage
    },
    clearUserInfo: (state) => {
        state.userName = "";
        state.profileImage = "";
        localStorage.removeItem("userName");
        localStorage.removeItem("profileImage");
      },
  },
});



export const { setUserName, setProfileImage,clearUserInfo } = addUserInfoSlice.actions;
export default addUserInfoSlice.reducer;
