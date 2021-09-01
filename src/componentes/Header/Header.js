import React from 'react'
function Header() {
    return (
      <div>
        
        <h1>Título/ Nombre de la app</h1>
        <section>
            <p>Ordenar ASC/ DESC</p>
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