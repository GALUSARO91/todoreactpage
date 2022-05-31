// import logo from './logo.svg';

import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext'

/* const initialValue = [
  {text: "Pelar cebollas","Completed":false},
  {text: "Estudiar React","Completed":false},
  {text: "Cenar","Completed":true},
] */


function App(){
 
 return(
   <TodoProvider>
     <AppUI/>
   </TodoProvider>
   
 )
}

export default App;
