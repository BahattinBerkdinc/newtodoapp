import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos : localStorage.getItem("bussinesstodos") ? JSON.parse(localStorage.getItem("bussinesstodos")) : [],
}

export const bussinessTodosSlice = createSlice({
    name: "bussinessTodos",
    initialState,
    reducers: {
        addBussinessTodo: (state, action) => {
            const newTodo = {
                id: Date.now(), 
                text: action.payload, 
            };
            state.todos.push(newTodo);

            localStorage.setItem("bussinesstodos", JSON.stringify(state.todos));
        },
        deleteBussinessTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("bussinesstodos", JSON.stringify(state.todos));
          },
          clearBussinessTodos : (state) => {
            state.todos = [];

        }
    }
})

export const { addBussinessTodo,deleteBussinessTodo,clearBussinessTodos } = bussinessTodosSlice.actions;
export default bussinessTodosSlice.reducer