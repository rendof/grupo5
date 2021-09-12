import React,{Component} from 'react' 
import "./Tarjeta.css" 
class Tarjeta extends Component {
    constructor(){ //uno guarda los estados
      super()
      this.state={
        viewMore: false, //cuando recien abris la pagina, va a estar en falso
        text: "Ver Mas", //opcion de ver mas
      }
      
    }
    VerMas(){ //Si al clickearlo, this.state.viewmore es true te aparece ver mas. Si es falso, ver menos. 
      if(this.state.viewMore){
        this.setState({
          viewMore:false,
          text:"Ver Mas",
        })
      }else{      
      this.setState({
        viewMore:true,
        text:"Ver Menos", 
      })}
    }

    render(){ //modulo que permite que las cosas se exporte, trabaja en JSX, pero por fuera en JS
      let {title, overview, poster_path, popularity, id} = this.props.info
      return ( //se trabaja en JSX
      
        <div className='TarjetaIndividual'>
          <p onClick={()=>this.props.borrar(id)}> Borrar </p>
            <img className= "image" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
           <h1>{title}</h1>
           <ul className= {`${this.state.viewMore ? "show" : "hide"}`}>  {/*if ternario, si es falso, se oculta y si es true te da show*/}
           <p>{overview}</p>
           <p>popularity: {popularity}</p></ul>
      <p className = "ViewMore" onClick = {() => this.VerMas()}>{this.state.text}</p> {/*esta funcion cambia el estado. Ver mas es un modulo.*/}
      
        </div> 
        

      );
    }
   //esto es un destructuring
    
  }

  export default Tarjeta; 