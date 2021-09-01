import React,{Component} from 'react' //componente con estado 

//en un componente con estado podes desarollar funciones (modulos)

class Tarjetas extends Component{   // con estado usas una lclass en vez de una function
    constructor(props){  //estos son modulos
        super(props) // es algo propio de react que no sabemos bien
        this.state={
            automovil:this.props.auto 
          
        }
    }
    
    cambio(){
        this.setState({
            automovil: "golf"
        })
        
    }
    // el render es lo importante para que se vea todo 
    render(){ //estos son modulos
        
        return(
            <div>
                 <h1>{this.props.auto}</h1> {/*concatenacion en JSX */}
                 <h2>{this.state.automovil}</h2>
                 <button onClick={()=>this.cambio()}> cambiar a golf</button>
                 
            </div>
        )
    }
}

export default Tarjetas
