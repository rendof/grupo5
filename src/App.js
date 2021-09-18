import React from "react";
import Tarjetas from "./componentes/Tarjetas/Tarjetas";
import Footer from "./componentes/Footer/Footer"/* Aca importo los componentes*/

function App() {
 
  return (
    <div className='main'>
       <Tarjetas/>   {/* Aca estoy llamando a los componentes*/}
       <Footer/>
      
      
    </div>
  );
}

export default App; /* aca estamso exportando directo a la pagina al html principal*/ 
