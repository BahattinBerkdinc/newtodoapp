import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
}


export const personalTodosSlice = createSlice({
    name: "personalTodos",
    initialState,
    reducers: {
        
        addPersonalTodo: (state, action) => {
            const newTodo = {
                id: Date.now(), 
                text: action.payload, 
            };
            state.todos.push(newTodo);

            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        
        deletePersonalTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
          },
    }
})

export const { addPersonalTodo,deletePersonalTodo } = personalTodosSlice.actions;
export default personalTodosSlice.reducer