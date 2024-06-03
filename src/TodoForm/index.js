import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import "./TodoForm.css";

function TodoForm() {
    const {addTodo, setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }    

    return(
        <div className="container">
            <form onSubmit={onSubmit}>
                <h3>Nuevas Tareas</h3>
                <textarea placeholder="Agrega una tarea" value={newTodoValue} onChange={onChange}/>
                <div>
                    <button type="submit" className="btns-e-r">
                        <span class="text">Agregar</span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                    </button>
                    <button type="reset" className="btns-e-r" onClick={onCancel}>
                        <span class="text">Cancelar</span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                    </button>
                </div>
            </form> 
        </div>
    );
}

export { TodoForm };