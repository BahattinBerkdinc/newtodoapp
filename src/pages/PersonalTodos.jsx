import React from 'react'
import PageCategories from '../components/page-categories/PageCategories'
import AddTodos from '../components/add-todos/AddTodos'
import Todos from '../components/todos/Todos'
import TodoList from '../components/todo-list/TodoList'
import { useSelector } from 'react-redux'

const PersonalTodos = () => {

    const todolist = useSelector((state)=>state.personalTodos);

    // console.log(todolist);

    return (
        <div>
            <PageCategories />
            <AddTodos />
            <Todos />
            {
                todolist.todos.map((todolist,index)=>(
                    <TodoList key={index} todolist={todolist}/>
                ))
            }
        </div>
    )
}

export default PersonalTodos
