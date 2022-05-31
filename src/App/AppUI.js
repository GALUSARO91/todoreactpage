import React from 'react'
import './App.css';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { Modal} from '../Modal'
import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
import { TodoError } from '../TodoError';

function AppUI(){
  const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
        <TodoCounter/>  
        <TodoSearch/> 
              <TodoList>
                {error && <TodoError/>}
                {loading && <TodoLoading/>}
                {(!loading && !searchedTodos.length)&& <TodoEmpty/>}
                {searchedTodos.map(todo =>(
                  <TodoItem 
                    key={todo.text }
                    text={todo.text} 
                    completed={todo.Completed}
                    onComplete = {()=>completeTodo(todo.text)}
                    onDelete = {()=>deleteTodo(todo.text)}
                    />
                ))}
              </TodoList>

          {!!openModal&&(
            <Modal>
             <TodoForm/>
           </Modal>
          )}

        <CreateTodoButtom 
          openModal = {openModal}
          setOpenModal = {setOpenModal}
        />       
        </React.Fragment>
      );
    
}

export {AppUI}