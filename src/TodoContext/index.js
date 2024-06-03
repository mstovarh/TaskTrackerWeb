import React, { useState } from "react";
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext = React.createContext();

/* const arrNames = [
  {text: 'Cafe con leche', completed: false},
  {text: 'Aji picante', completed: true},
  {text: 'Elote salteado', completed: false}, 
  {text: 'Tacos BBQ', completed: true}, 
]; 

localStorage.setItem('TODOS_V1', JSON.stringify(arrNames));
localStorage.removeItem('TODOS_V1');*/

function TodoProvider({ children }) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

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

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
        text,
        completed: false
        });
        saveTodos(newTodos);
    };

    const compTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const deleteAllTodos = () => {
        const newTodos = [];
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{loading, error, totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, compTodo, deleteTodo, openModal, setOpenModal, addTodo, deleteAllTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }