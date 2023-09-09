// store.js
import { configureStore } from "@reduxjs/toolkit";
import addUserInfoReducer from "./addUserInfoSlice";
import personalTodosSlice from "./personalTodosSlice";
import bussinessTodosSlice from "./bussinessTodosSlice";

// Check if the username and profileImage are available in localStorage
const storedUserName = localStorage.getItem("userName") || "";
const storedProfileImage = localStorage.getItem("profileImage") || "";

export const store = configureStore({
  reducer: {
    addUserInfo: addUserInfoReducer,
    personalTodos : personalTodosSlice,
    bussinessTodos : bussinessTodosSlice
  },
  preloadedState: {
    addUserInfo: {
      userName: storedUserName,
      profileImage: storedProfileImage,
    },
  },
});

