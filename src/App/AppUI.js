import React from "react";
import { ItNam } from "../ItNam/index.js";
import { Lista } from "../Lista/index.js";
import { Parrafo } from "../Parrafo/index.js";
import { AddC } from "../AddC/index.js";
import { ToDoSearch } from "../ToDoSearch/index.js";
import { WelcomeMsj } from "../WelcomeMsj/index.js";
import { TodosLoading } from "../TodosLoading/index.js";
import { TodosError } from "../TodosError/index.js";
import { TodosEmpty } from "../TodosEmpty/index.js";
import { TodoContext } from "../TodoContext/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { Modal } from "../Modal/index.js";
import "./App.css";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    compTodo,
    deleteTodo,
    totalTodos,
    openModal,
    deleteAllTodos,
  } = React.useContext(TodoContext);

  return (
    <>
      <div className="row d-flex flex-column mb-2 cont-1">
        <div className="col-sm justify-content-center align-items-center">
          <WelcomeMsj />
        </div>
        <div className="col-sm justify-content-center align-items-center">
          <ToDoSearch />
        </div>
      </div>
      <div className="row d-flex mb-2 cont-2">
        <div className="col-lg d-flex flex-column justify-content-center align-items-center">
          <Lista>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && !error && totalTodos === 0 && <TodosEmpty />}
            {searchedTodos.map((todo) => (
              <ItNam
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComp={() => compTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </Lista>
          <span onClick={deleteAllTodos}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill Icon-trash"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </span>
        </div>
        <div className="col-lg d-flex justify-content-center align-items-center">
          <fieldset className="field mt-5 mt-lg-0 mt-xl-0">
            <Parrafo />
            <AddC />
          </fieldset>
        </div>
      </div>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
