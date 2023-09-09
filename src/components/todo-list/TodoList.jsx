import React from 'react'
import "./todolist.scss"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {IoMdDoneAll} from "react-icons/io"
const TodoList = ({todolist}) => {

  // console.log(todolist.todosssss);
  return (
    <div className='todo-list'>
        <span>{todolist} </span>
        <RiDeleteBin5Fill/>
        <IoMdDoneAll/>
    </div>
  )
}

export default TodoList
