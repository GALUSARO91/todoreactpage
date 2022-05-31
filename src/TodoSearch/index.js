import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch(){

    const {searchValue,setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange =(event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return(
        <div className='Searchbox'> 
        <input onChange={onSearchValueChange}
         type="text" 
         placeholder="Buscar tarea aqui"
         value={searchValue}
         />
        </div>

    )
}

export {TodoSearch}