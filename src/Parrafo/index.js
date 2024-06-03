import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import './Parrafo.css';

function Parrafo() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return(
    <p className='msjp'>Has completado {completedTodos} de {totalTodos}</p>
  );
}
  
export { Parrafo };