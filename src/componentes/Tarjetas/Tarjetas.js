import React,{Component} from 'react' //componente con estado 
import Tarjeta from './Tarjeta.js/Tarjeta'
import './Tarjetas.css'
import Header from "../Header/Header"


//en un componente con estado podes desarollar funciones (modulos)

class Tarjetas extends Component{   // con estado usas una lclass en vez de una function
    constructor(props){  //estos son modulos
        super(props) // es algo propio de react que no sabemos bien
        this.state={
            populares:[],
            pagina: 1,
            actuales: [],
            
          
        }
    }

    componentDidMount(){ //se activa solo cuando corres el codigo por primera vez, (npm start)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a2dde4b6bf0d0c668a820209ab9fd035&language=en-US&page=${this.state.pagina}`)
        .then(resultado=> resultado.json())
        .then(popular=>{
            //console.log(populares)
            this.setState({
                populares:popular.results,
                pagina: this.state.pagina +1
        
            }, ()=> this.setState({
                actuales: this.state.populares })) //vuelve a hacer que esta funcion tarde un poco por medio de un call back asi no tiene errores en los datos
            
        })
        
    }

    componentDidUpdate(){ //se activa cuando actualizas el codigo 

    }
    agregar(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a2dde4b6bf0d0c668a820209ab9fd035&language=en-US&page=${this.state.pagina}`)
        .then(resultado=> resultado.json())
        .then(popular=>{
           // console.log(popular)
            this.setState({
                populares: this.state.populares.concat(popular.results), //concat es una union entre un array con contenido nuevo y lo tira al final. La nueva info es un nuevo array.
                pagina: this.state.pagina +1
        
            },()=> this.setState({
                actuales: this.state.populares }))
            //console.log(this.state.populares)
        })
    }

    borrar(id){
        let crearse = this.state.populares.filter(filtrar => filtrar.id!==id )
        this.setState({
            populares: crearse
        })

    }

    Buscar(texto){
        let peliculasFiltradas = this.state.actuales.filter((pelicula) => pelicula.title.toLowerCase().includes(texto.toLowerCase()))
         this.setState({
            populares: peliculasFiltradas 
        })
    }
    
    // el render es lo importante para que se vea todo 
    render(){ //estos son modulos

        

        // react fragments <> </> contiene info sin alterarla (podes contener dos div o ams)
        return( 
                <>
                <Header Buscar={(texto)=> this.Buscar(texto) }/>
                <button className='agregarbtn' onClick = {() => this.agregar()}>Agregar Mas</button>
                <div className='TarjetasGeneral'>
                  {this.state.populares.map(popular=>( // el map es comom un for que usamos para recorrer cada array de pelis con info
                      <Tarjeta
                      key={popular.id}
                      info={popular}
                      borrar={(id)=>this.borrar(id)}
                       />
                  ))}

              </div>
              </>
        )
    }
}

export default Tarjetas
