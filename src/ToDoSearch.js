import React from 'react';
import './ToDoSearch.css';

function ToDoSearch({
    searchValue,
    setSearchValue,
}) {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchValue(inputValue);
    };

    return (
        <div className="box-search">
            <input
                placeholder='Type something...'
                className='input-ts'
                value={searchValue}
                onChange={handleInputChange}
            />
        </div>
    );
}

export { ToDoSearch };
