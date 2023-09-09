import { configureStore } from "@reduxjs/toolkit";
import addUserInfoSlice from "./addUserInfoSlice";

export const store = configureStore({
    reducer: {
        addUserInfo : addUserInfoSlice
    },
})