import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "../TodoContext";
import './Modal.css';

function Modal({ children }) {
    const { setOpenModal } = React.useContext(TodoContext);
    return  ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
            <button className="btn-close" onClick={
                () => {
                    setOpenModal(false);
                    console.log('openModal', setOpenModal);
                }
            }>
                <span class="X"></span>
                <span class="Y"></span>
                <div class="close">Close</div>
            </button>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };