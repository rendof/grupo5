import React from 'react'
import './Header.css'
function Header() {
    return (
      <div className='HeaderGral'>
        
        <h1 className='titulo'>ChillingTime </h1>
        <section className='SubHeader'>
            <button>Ordenar ASC/ DESC</button>
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </section>
    
      </div> 
    );
  }

  export default Header; 