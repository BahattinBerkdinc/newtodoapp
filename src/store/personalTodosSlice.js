import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : [],
}


export const personalTodosSlice = createSlice({
    name: "personalTodos",
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
          },
          deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
          },
    }
})

export const { setTodos,addTodo,deleteTodo } = personalTodosSlice.actions;
export default personalTodosSlice.reducer