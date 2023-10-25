// App.js
import React from 'react';
import './App.css';
import { Lista } from './Lista';
import { Parrafo } from './Parrafo';
import { ItNam } from './ItNam';
import { WelcomeMsj } from './WelcomeMsj';
import { AddC } from './AddC'
import { ToDoSearch } from './ToDoSearch';

const arrNames = [
  {text: 'Cafe con leche', completed: false},
  {text: 'Aji picante', completed: true},
  {text: 'Elote salteado', completed: false}, 
  {text: 'Tacos BBQ', completed: true}, 
];

function App() {
  const [todos, setTodos] = React.useState(arrNames);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };

      const TodoTextLC = noTildes(todo.text.toLowerCase());
      const searchTextLC = noTildes(searchValue.toLowerCase());

      return TodoTextLC.includes(searchTextLC);
    }
  );

  const compTodo = (text) => {
    /* console.log('compTodo called with text:', text); */
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true; 
    setTodos(newTodos);
  }; 

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  /* const toggleCompleted = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  }; */

  return (
    <>
      <div>
        <div className="row d-flex flex-column mb-2 cont-1">
          <div className="col-sm justify-content-center align-items-center">
            <WelcomeMsj />
          </div>
          <div className="col-sm justify-content-center align-items-center">
            <ToDoSearch searchValue={searchValue}
            setSearchValue={setSearchValue}/>
          </div>
        </div>
        <div className="row d-flex mb-2 cont-2">
          <div className="col-lg d-flex flex-column justify-content-center align-items-center">
            <Lista >
              {searchedTodos.map(todo => (
                <ItNam 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComp={() => compTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </Lista>
          </div>
          <div className="col-lg d-flex justify-content-center align-items-center">
            <fieldset className="field mt-5 mt-lg-0 mt-xl-0">
              <Parrafo completed={completedTodos} total={totalTodos}/>
              <AddC/> 
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
