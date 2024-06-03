import React from 'react';
import './ToDoSearch.css';
import { TodoContext } from '../TodoContext/index.js';

function ToDoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    return (
        <div className="box-search">
            <input
                placeholder='Search...'
                className='input-ts'
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
        </div>
    );
}

export { ToDoSearch };
