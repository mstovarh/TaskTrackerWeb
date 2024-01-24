import React from 'react';
import './ItNam.css';

function ItNam(props) {
  return (
    <li className='msjit'>
      <span onClick={props.onComp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className={`bi bi-check-circle-fill Icon Icon-check ${props.completed ? 'Icon-check--active' : ''}`}
          viewBox="0 0 18 18">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </span>
      <fieldset className={`msjit-fieldset ${props.completed ? 'msjit-fieldset--completed' : ''}`}>{props.text}</fieldset>
      <span onClick={props.onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x Icon Icon-delete"
          viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </span>
    </li>
  );
}

export { ItNam };
