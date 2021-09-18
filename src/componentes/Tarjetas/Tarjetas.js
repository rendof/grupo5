import React,{Component} from 'react' //componente con estado (compomnent) es el primer paso para crear un componente con estado va entre{} para que exista un destructuring
import Tarjeta from './Tarjeta.js/Tarjeta'
import './Tarjetas.css'
import Header from "../Header/Header"

// el destructuring se hace unicamente para evir tener uqe poner react.componet (eliminar el llamamiento de react)


//en un componente con estado podes desarollar funciones (modulos)

class Tarjetas extends Component{   // con estado usas una class en vez de una function
    constructor(){  //estos son modulos
        super() // es algo propio de react que no sabemos bien
        // constructos, super y this es lo que permite que funcionen los componentes
        this.state={
            populares:[],
            pagina: 1,
            actuales: [],
            lista: "Horizontal",
          
        }
        //this.state es donde declaras este estado dentro del componente
    }

    componentDidMount(){ //se activa solo cuando corres el codigo por primera vez, (npm start)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a2dde4b6bf0d0c668a820209ab9fd035&language=en-US&page=${this.state.pagina}`) //el this hace referencia al componente. el state hace referencia a los estados dentro del componente. Pagina hace refrencia al estado pagina 
        .then(resultado=> resultado.json())
        .then(popular=>{
            //console.log(populares)
            this.setState({  //con esta caracteristica podemos alterar los valores del estado
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
        let crearse = this.state.populares.filter(filtrar => filtrar.id!==id ) //filtrar todas las peliculas por su id y separar toda aquella que el id = al id que tenes de apretar el boton (en realidad lo saca del array, se puede recuperar si quisieramos)
        this.setState({
            populares: crearse //ahora rre escribime populares con la nueva info filtrada 
        })

    }

    Buscar(texto){
        let peliculasFiltradas = this.state.actuales.filter((pelicula) => pelicula.title.toLowerCase().includes(texto.toLowerCase()))
         this.setState({
            populares: peliculasFiltradas 
        })
    } //actuales tiene toda la info de las pelis pero se muestran las populares. El filter filtra pelis por el titulo, que incluya la letra que vos tipieas en el buscador. 

    Vertical(){
        this.setState({
           lista: "Vertical"  //declara el estado lista, en el origen esta en horizontal
       })
    }
    Horizontal(){
        this.setState({
            lista: "Horizontal"
        })
    }
    
    // el render es lo importante para que se vea todo 
    render(){ //estos son modulos

        

        // react fragments <> </> contiene info sin alterarla (podes contener dos div o ams)
        return( 
                <>
                <Header Buscar={(texto)=> this.Buscar(texto) } // aca recive la info de lo que escribio el usuario y si puede hacer una funcion y trabajar ocn este texto
                Vertical= {()=> this.Vertical() }
                Horizontal= {()=> this.Horizontal() }
                />  
                <button className='agregarbtn' onClick = {() => this.agregar()}>Agregar Mas</button>
                <div className= {`${this.state.lista== "Horizontal" ?"TarjetasGeneral" :"alolargo" }`}>
                  {this.state.populares.map(popular=>( // el map es comom un for que usamos para recorrer cada array de pelis con info
                      <Tarjeta
                      key={popular.id}
                      info={popular}
                      borrar={(id)=>this.borrar(id)} //en tarjetas cunado apretas el boton te lleva aca
                      orientacion= {this.state.lista}
                       />
                  ))}

              </div>
              </>
        )
    }
}  // si es true, usa la clase tarjeta general y si es false usa a lo largo. 
// R.Fragment --> si lo saco, header, button , div estan todos en la misma categoria de importancia, y jsx no permite que haya mas de un elemento con la misma importancia. R.F funciona como padre sin alterar el estado de lo de adentro. 

export default Tarjetas
