import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const [newTodoValue,setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onChange= (event) =>{
        setNewTodoValue(event.target.value)
        
    }


    const onCancel= () =>{
        setOpenModal(false)
        // TODO: Cancel action
    }

    const onSubmint= (event) =>{
       event.preventDefault()
       addTodo(newTodoValue)
       setOpenModal(false)
    }

    return(
        <form id="TodoForm" onSubmit={onSubmint}>
            <label>Agregar nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escriba TODO aca"
            ></textarea> 
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Salir
                </button>
                <button
                    type="submit"
                
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export {TodoForm}