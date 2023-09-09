import React, { useState } from 'react'
import "./addtodos.scss"
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, setTodos } from '../../store/personalTodosSlice'
const AddTodos = () => {

  const [enteredTodo,setEnteredTodo] = useState("")

  const store = useSelector((state) => state.personalTodos);
  console.log(store);
  const dispatch = useDispatch()


  const handleTodo = (e) => {
    setEnteredTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodos = [...store.todos, enteredTodo];
    dispatch(setTodos(updatedTodos));
    setEnteredTodo(""); // Temizleme işlemi
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
        />
    <Button type='submit'>Add</Button>
    </Form>
    </div>
  </div>
  )
}

export default AddTodos
