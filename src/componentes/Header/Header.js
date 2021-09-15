import React from 'react'
import './Header.css'
import Buscador from "../Buscador/Buscador"

function Header(props) { //Componente sin estado
    return (
      <div className='HeaderGral'>
        
        <h1 className='titulo'>ChillingTime </h1>
        <section className='SubHeader'>
            <button>Ordenar ASC/ DESC</button>
            <i className="fas fa-th">Vertical</i>
            <i className="fas fa-align-justify">Horizontal</i>
            <Buscador Buscar = { (texto)=> props.Buscar(texto) }/>
        </section>
    
      </div> 
    );
  }

  export default Header; 