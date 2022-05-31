import React from "react";
import './CreateTodoButtom.css'

function CreateTodoButtom(props){
    const onClickButton = ()=>{

        props.setOpenModal(!props.openModal)
    }
    return(
        <button className="CreateTodoButton" onClick={onClickButton}>+</button>
    )
}

export {CreateTodoButtom}