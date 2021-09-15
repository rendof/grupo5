import React, {Component} from "react"


class Buscador extends Component{ //Componente con estado, estado de busqueda

    constructor(props){
        super(props)
        this.state={
            busqueda: ""
           
        }
    }

     enviarSubmit(e){ //Si no escribis nada, no se ejecuta
        e.preventDefault()
    }

    modificacion(e){
        this.setState({
            busqueda: e.target.value
        }, ()=> this.props.Buscar(this.state.busqueda)) //busqueda toma un nuevo valor, una letra. Target es por el funcionamiento del input, tiene una subcatgoria llamada target, adentro value, q es el vlaor de lo q se escribe
    } // funcion sincronica 
 

    

    render(){
        
        return(
            <form> 

                <label>Buscar Peliculas</label>
                <input type="text" name= "name" onChange={(e)=>this.modificacion(e)} value={this.state.busqueda}  /> {/* es un evento que cuando detecta un cambio hace algo, ese algo es this.modifiaciones, la funcion toma una variable*/}
                
            </form> 
            
             
        )
    }
}


export default Buscador