import React, { useEffect, useState } from 'react'
import './TodoApp.css'
import PropTypes from 'prop-types' 

export const TodoApp = ({lista}) => {
    const [todos, setTodos] = useState( JSON.parse(localStorage.getItem("todos")) ?? [] )
    const [todo, setTodo] = useState("")

    useEffect(()=>{
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    const onSubmitTodo = (event) => {
        event.preventDefault()
        
        const newTodo = 
        {
            id:new Date().getTime(),
            text: todo,
        }
        
        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    function borrarTodo(id)
    {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

  return (
    <>
        <br /><br />
        <h1 className='h1-album'>{lista}</h1>
        <div className='todo-app'>
            <form className='todo-form' onSubmit={onSubmitTodo}>
                <input  placeholder='Escribe una actividad...' className='todo-input' type="text" onChange={(event) => setTodo(event.target.value)} value={todo} />
                <button className='agregar-todo' type='submit'>Agregar</button>
            </form>
            {todos.map((todo) =>
                <div  className="todo" key={todo.id}>
                    <div className='todo-text'>{todo.text}</div>
                    <button className='borrar-todo' onClick={()=>borrarTodo(todo.id)}>Borrar</button>
                </div>
            )}
        </div>
    </>
  )
}

TodoApp.propTypes = {
    lista: PropTypes.string.isRequired
}
