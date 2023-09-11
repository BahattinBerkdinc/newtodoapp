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
            const newTodo = {
                id: Date.now(), // Otomatik bir ID oluşturuluyor
                text: action.payload, // Girilen todo metni
            };
            state.todos.push(newTodo);
        },
        
          deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
          },
    }
})

export const { setTodos,addTodo,deleteTodo } = personalTodosSlice.actions;
export default personalTodosSlice.reducer