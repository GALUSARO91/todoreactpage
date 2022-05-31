import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider(props){
    const {
        item:todos, 
        saveItem:saveTodos,
        loading,error } = useLocalStorage('TODOS_V1',[]);
      const [searchValue,setSearchValue] = React.useState('');
    
      const [openModal,setOpenModal] = React.useState(false)

      const competedTodos = todos.filter(todo=> !!todo.Completed).length
      const totalTodos = todos.length
    
      let searchedTodos = []
    
      if(!searchValue.length >= 1){
        searchedTodos = todos
      } else {
        searchedTodos = todos.filter(todo=>{
          const todoText = todo.text.toLowerCase()
          const searchedText = searchValue.toLowerCase()
          return todoText.includes(searchedText)
        })
      }
    
      const addTodo = (text) =>{
        const newTodos = [...todos]
        newTodos.push({
          completed: false,
          text: text
        })
        saveTodos(newTodos)
      }
      const completeTodo = (text) =>{
        const todoIndex = todos.findIndex(todo=>todo.text === text)
        const newTodos = [...todos]
        todos[todoIndex].Completed = true
        saveTodos(newTodos)
      }
    
      const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo=>todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos)
      }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            addTodo,
            competedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal

        }}>
            {props.children}
        </TodoContext.Provider>
    )

}

export {TodoContext,TodoProvider}
