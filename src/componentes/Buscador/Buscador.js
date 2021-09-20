import React, {Component} from "react"  


class Buscador extends Component{ 

    constructor(){
        super()
        this.state={
            busqueda: "" 
           
        }
    }

     enviarSubmit(e){ 
        e.preventDefault()
    }

    modificacion(e){ 
        this.setState({
            busqueda: e.target.value 
        }, ()=> this.props.Buscar(this.state.busqueda)) 
    } 
    

    

    render(){
        
        return(
            <form>  

                <label>Buscar Peliculas</label>
                <input type="text" name= "name" onChange={(e)=>this.modificacion(e)} value={this.state.busqueda}  /> 
                
            </form> 
            
             
        )
    }
}


export default Buscador