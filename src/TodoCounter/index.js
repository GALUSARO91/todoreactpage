import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter(){
    const {competedTodos,totalTodos} = React.useContext(TodoContext)
    return(
        <h2> Has completado {competedTodos} de {totalTodos} Tareas</h2>
    )
}

export {TodoCounter};