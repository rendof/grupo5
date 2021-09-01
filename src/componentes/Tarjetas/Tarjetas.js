import React,{Component} from 'react' //componente con estado 
import Tarjeta from './Tarjeta.js/Tarjeta'


//en un componente con estado podes desarollar funciones (modulos)

class Tarjetas extends Component{   // con estado usas una lclass en vez de una function
    constructor(props){  //estos son modulos
        super(props) // es algo propio de react que no sabemos bien
        this.state={
            populares:[]
            
          
        }
    }

    componentDidMount(){ //se activa solo cuando corres el codigo por primera vez, (npm start)
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=a2dde4b6bf0d0c668a820209ab9fd035&language=en-US&page=1')
        .then(resultado=> resultado.json())
        .then(popular=>{
            //console.log(populares)
            this.setState({
                populares:popular.results
            })
            //console.log(this.state.populares)
        })
        
    }

    componentDidUpdate(){ //se activa cuando actualizas el codigo 

    }



    
    // el render es lo importante para que se vea todo 
    render(){ //estos son modulos

        

        // react fragments <> </> contiene info sin alterarla (podes contener dos div o ams)
        return(
              <div>
                  {this.state.populares.map(popular=>( // el map es comom un for que usamos para recorrer cada array de pelis con info
                      <Tarjeta
                      key={popular.id}
                      info={popular}
                       />
                  ))}

              </div>
        )
    }
}

export default Tarjetas
