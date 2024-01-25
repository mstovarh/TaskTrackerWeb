import './AddC.css';
import React from 'react';

function AddC(){
    return(
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn-c" 
            onClick={(event) => {
                console.log("Le diste click");
                }
            }>Add</button>
        </div>
    );
}

export { AddC };