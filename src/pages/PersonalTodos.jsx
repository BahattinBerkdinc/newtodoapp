import React from 'react'
import PageCategories from '../components/page-categories/PageCategories'
import AddTodos from '../components/add-todos/AddTodos'
import TodoList from '../components/todo-list/TodoList'
import { useSelector } from 'react-redux'
import "./personaltodospage.scss"
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
const PersonalTodos = () => {

    const todolistPersonal = useSelector((state) => state.personalTodos);
    const todolistBussiness = useSelector((state) => state.bussinessTodos);

    // console.log(todolist);

    const pathname = useLocation().pathname
    console.log(pathname);

    return (
        <Container className='glass p-5'>
            <Row className='todos-page'>
                <Col className="top">
                    <div className='page-category'>
                        <PageCategories />
                    </div>
                    <AddTodos />
                </Col>
                <Col  className="todos-bottom d-flex flex-column gap-3">
                    {
                        todolistPersonal.todos.map((todolist) => (
                            <TodoList key={todolist.id} todolist={todolist} />
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default PersonalTodos
