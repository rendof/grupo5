import React, {Component} from "react"  //componente cone estado


class Buscador extends Component{ //Componente con estado, estado de busqueda

    constructor(){
        super()
        this.state={
            busqueda: "" //aca declaro busqueda vacio 
           
        }
    }

     enviarSubmit(e){ //Si no escribis nada, no se ejecuta
        e.preventDefault()
    }

    modificacion(e){ //recive el valor e  y declara el estado busqueda
        this.setState({
            busqueda: e.target.value // busqueda va a tener el valor de lo que escribe el usuario
        }, ()=> this.props.Buscar(this.state.busqueda)) //busqueda toma un nuevo valor, una letra. Target es por el funcionamiento del input, tiene una subcatgoria llamada target, adentro value, q es el vlaor de lo q se escribe
    } // funcion sincronica 
    // despues de la coma en la linea 21 hay un callback para que se ejecute una funcion props pasandole la informacion de lo que el usuario escribio 
 

    

    render(){
        
        return(
            <form>  {/* lo importante es el evento On change */}

                <label>Buscar Peliculas</label>
                <input type="text" name= "name" onChange={(e)=>this.modificacion(e)} value={this.state.busqueda}  /> {/* es un evento que cuando detecta un cambio hace algo, ese algo es this.modifiaciones, la funcion toma una variable*/}
                
            </form> 
            
             
        )
    }
}


export default Buscador