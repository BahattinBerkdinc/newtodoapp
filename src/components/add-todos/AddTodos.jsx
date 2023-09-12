import React, { useState } from 'react'
import "./addtodos.scss"
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addPersonalTodo } from '../../store/personalTodosSlice'
import { addBussinessTodo } from '../../store/bussinessTodosSlice'
import { useLocation } from 'react-router-dom'
import alertSwal from "../../helpers/messages"
const AddTodos = () => {

  const [enteredTodo,setEnteredTodo] = useState("")

  const pathname = useLocation().pathname

  const dispatch = useDispatch()


  const handleTodo = (e) => {
    setEnteredTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(enteredTodo === "") {
      alertSwal("error","Opps. Wait!","Please enter a todo");
      return
    }

    if (pathname === "/bussiness-todos") {
      dispatch(addBussinessTodo(enteredTodo));
    } else {
      dispatch(addPersonalTodo(enteredTodo));
    }

    setEnteredTodo("");
  }
  

  console.log(enteredTodo);
  

  return (
    <div className="add-todo-box">
    <span>Add Todos</span>
    <div className="todo-input">
    <Form onSubmit={handleSubmit}>
        <Form.Control 
        type="text" 
        placeholder="Enter Todo" 
        onChange={handleTodo}
        value={enteredTodo}
        />
    <Button type='submit'>Add</Button>
    </Form>
    </div>
  </div>
  )
}

export default AddTodos
