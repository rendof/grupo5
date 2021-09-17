import React from 'react'
import './Header.css'
import Buscador from "../Buscador/Buscador"

function Header(props) { //Componente sin estado
    return (
      <div className='HeaderGral'>
        
        <h1 className='titulo'><a href="/">ChillingTime</a> </h1>
        <section className='SubHeader'>
            
            <i className="orientacion" onClick = {()=>props.Vertical()} ><i className="fas fa-align-justify" ></i></i> 
            <i className="orientacion"onClick = {()=>props.Horizontal()}><i className="fas fa-th"></i></i>
            <Buscador Buscar = { (texto)=> props.Buscar(texto) }/>
        </section>
    
      </div> 
    );
  }

  export default Header; 