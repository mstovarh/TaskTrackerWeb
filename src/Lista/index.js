import './Lista.css'
import React from 'react';

function Lista({children}){
    return(
        <ul className="d-flex flex-row flex-wrap justify-content-evenly align-items-center gap-2">
            {children}
        </ul>
    );
}

export { Lista };