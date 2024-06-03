import './AddC.css';
import React from 'react';
import { TodoContext } from '../TodoContext/index.js';

function AddC(){
    const {setOpenModal} = React.useContext(TodoContext);
    return(
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn-c" 
            onClick={
                () => {
                    setOpenModal(true);
                    console.log('openModal', setOpenModal);
                }
            }>Add</button>
        </div>
    );
}

export { AddC };