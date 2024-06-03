import React from 'react';
import './TodosError.css';

function TodosError({ error }) {
    return (
        <div className="TodosError">
            <p>Hay un error: {error.message}</p>
        </div>
    );
}

export { TodosError };