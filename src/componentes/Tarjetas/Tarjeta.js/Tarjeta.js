import React,{Component} from 'react' 
import "./Tarjeta.css" 
class Tarjeta extends Component {
    constructor(){ 
      super()
      this.state={
        viewMore: false, 
        text: "➕", 
      }
      
    }
    VerMas(){ 
      if(this.state.viewMore){
        this.setState({
          viewMore:false,
          text:"➕",
        })
      }else{      
      this.setState({
        viewMore:true,
        text:"➖", 
      })}
    }

    render(){ 
      let {title, overview, poster_path, popularity, id} = this.props.info  
      return ( 
      
        <div className={`${this.props.orientacion== "Horizontal" ?"TarjetaIndividual" :"vertical" }`}>
            <img className= {`${this.props.orientacion== "Horizontal" ?"image" :"image2" }`} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
           <h1>{title}</h1>
           <ul className= {`${this.state.viewMore ? "show" : "hide"}`}>  
           <p>{overview}</p>
           <p></p>
           <p>Popularity: {popularity}</p></ul>
      <button className = "ViewMore" onClick = {() => this.VerMas()}>{this.state.text}</button> 
      <button className = "Borrar" onClick={()=>this.props.borrar(id)}> 🗑 </button> 
        </div> 
        

      );
    }
   
    
  }

  export default Tarjeta; 