import React from "react";
import Header from "./componentes/Header/Header";
import Tarjetas from "./componentes/Tarjetas/Tarjetas";

function App() {
  let autos= "bora" // para llamar esto en tarjetas uso props
  return (
    <div className='main'>
      <Header/>
       <Tarjetas auto={autos} />   {/*PROPS*/}
      
      
    </div>
  );
}

export default App;
