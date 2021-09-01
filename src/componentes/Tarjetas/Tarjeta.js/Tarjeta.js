import React from 'react'
function Tarjeta(props) {
    let {title, overview, poster_path, popularity} = props.info //esto es un destructuring
    return (
      <div>
          <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
         <h1>{title}</h1>
         <p>{overview}</p>
         <p>popularity: {popularity}</p>
    
      </div> 
    );
  }

  export default Tarjeta; 