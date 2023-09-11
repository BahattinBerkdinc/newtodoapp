import React, { useState } from 'react'
import "./todolist.scss"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {IoMdDoneAll} from "react-icons/io"
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../store/personalTodosSlice'
const TodoList = ({todolist}) => {

  const [doneTodo,setDoneTodo] = useState(false)

  const dispatch = useDispatch()

  const deleteChosenTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const doneTodosHandle = () => {
      setDoneTodo(!doneTodo)
  }

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = new Date(dateStr).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  console.log(todolist.id);
  
  


  // console.log(todolist.todosssss);
  return (
    <div className='todo-list'>
        <span className={`todo-item ${doneTodo ? "done-todo" : ""}`}>{todolist.text}
        <div>{formatDate(todolist.id)}</div>
         </span>
        <RiDeleteBin5Fill  onClick={()=> deleteChosenTodo(todolist.id)}/>
        <IoMdDoneAll onClick={doneTodosHandle}/>
    </div>
  )
}

export default TodoList
