import './Parrafo.css';

function Parrafo({total, completed}) {
    return(
      <p className='msjp'>Hola. Has completado {completed} de {total}</p>
    );
}
  
export { Parrafo };