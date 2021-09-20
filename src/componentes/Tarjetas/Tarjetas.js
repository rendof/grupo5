import React,{Component} from 'react' 
import Tarjeta from './Tarjeta.js/Tarjeta'
import './Tarjetas.css'
import Header from "../Header/Header"






class Tarjetas extends Component{   
    constructor(){  
        super() 
        
        this.state={
            populares:[],
            pagina: 1,
            actuales: [],
            lista: "Horizontal",
          
        }
        
    }

    componentDidMount(){ 
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a2dde4b6bf0d0c668a820209ab9fd035&language=en-US&page=${this.state.pagina}`) 
        .then(resultado=> resultado.json())
        .then(popular=>{
            
            this.setState({  
                populares:popular.results,
                pagina: this.state.pagina +1
        
            }, ()=> this.setState({
                actuales: this.state.populares })) 
            
        })
        
    }

    componentDidUpdate(){ 
    }
    agregar(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a2dde4b6bf0d0c668a820209ab9fd035&language=en-US&page=${this.state.pagina}`)
        .then(resultado=> resultado.json())
        .then(popular=>{
           
            this.setState({
                populares: this.state.populares.concat(popular.results), 
                pagina: this.state.pagina +1
        
            },()=> this.setState({
                actuales: this.state.populares }))
            
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
    Vertical(){
        this.setState({
           lista: "Vertical"  
       })
    }
    Horizontal(){
        this.setState({
            lista: "Horizontal"
        })
    }
    
    
    render(){ 

        

       
        return( 
                <>
                <Header Buscar={(texto)=> this.Buscar(texto) } 
                Vertical= {()=> this.Vertical() }
                Horizontal= {()=> this.Horizontal() }
                />  
                <button className='agregarbtn' onClick = {() => this.agregar()}>Agregar Mas</button>
                <div className= {`${this.state.lista== "Horizontal" ?"TarjetasGeneral" :"alolargo" }`}>
                  {this.state.populares.map(popular=>( 
                      <Tarjeta
                      key={popular.id}
                      info={popular}
                      borrar={(id)=>this.borrar(id)} 
                      orientacion= {this.state.lista}
                       />
                  ))}

              </div>
              </>
        )
    }
}  

export default Tarjetas
