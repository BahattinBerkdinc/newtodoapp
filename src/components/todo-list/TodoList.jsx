import React, { useEffect, useState } from 'react'
import "./todolist.scss"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {IoMdDoneAll} from "react-icons/io"
import {AiFillMinusCircle} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { deleteBussinessTodo } from '../../store/bussinessTodosSlice'
import { deletePersonalTodo } from '../../store/personalTodosSlice'
import { useLocation } from 'react-router-dom'
const TodoList = ({todolist}) => {

  const [doneTodo,setDoneTodo] = useState(false)
  const dispatch = useDispatch()
  const pathname = useLocation().pathname

  const deleteChosenTodo = (id) => {
    if(pathname === "/bussiness-todos") {
      dispatch(deleteBussinessTodo(id));
    }else{
      dispatch(deletePersonalTodo(id));
    }
  }

  const doneTodosHandle = () => {
    const newDoneTodo = !doneTodo;
    setDoneTodo(newDoneTodo);
    
    localStorage.setItem(`doneTodo_${todolist.id}`, JSON.stringify(newDoneTodo));
  };

   
   useEffect(() => {
    const localStorageDoneTodo = localStorage.getItem(`doneTodo_${todolist.id}`);
    if (localStorageDoneTodo !== null) {
      setDoneTodo(JSON.parse(localStorageDoneTodo));
    }
  }, [todolist.id]);

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = new Date(dateStr).toLocaleDateString(undefined, options);
    return formattedDate;
  };


  const hour = new Date().getHours();
  const minute = new Date().getMinutes()
  console.log(hour + ":" + minute);
  
  


  // console.log(todolist.todosssss);
  return (
    <div className='todo-list'>
        <span className="todo-item">{todolist.text}
        <div>{formatDate(todolist.id)} - {hour} : {minute}</div>
        {
          doneTodo && <div className='done-todo'>task done</div>
        }
         </span>
        <RiDeleteBin5Fill  onClick={()=> deleteChosenTodo(todolist.id)}/>
        {
          !doneTodo && <IoMdDoneAll onClick={doneTodosHandle}/>
        }
        {
          doneTodo && <AiFillMinusCircle onClick={doneTodosHandle}/>
        }
    </div>
  )
}

export default TodoList
