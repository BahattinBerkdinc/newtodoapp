import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userName : ""
}

export const addUserInfoSlice = createSlice({
    name: 'addUserInfo',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload
            // Kullanıcı adını localStorage'e kaydet
            localStorage.setItem('userName', action.payload);
        }
    }
})

export const { setUserName } = addUserInfoSlice.actions;
export default addUserInfoSlice.reducer;