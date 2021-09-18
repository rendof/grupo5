import React from "react" /* para que funcivone react siempre hay que importar*/
import './Footer.css' /* se importa unn css que puede no tener*/
/* componente comunn sin estado por que no queremos darle ninguna funcionalidad al usuario*/
function Footer(){ {/* los componentes sin estado son funciones clasicas*/}
        return( 
            <footer>
                <ul className="Main">
                    <li>Francisco Rendo </li>
                    <li>Federico Koch</li>
                    <li>Martin Albores</li>
                </ul>
            </footer>
        )
    {/* una function con un valor(footer) puede tener props o no y la info que se quiera mostrar adentro*/} 
}

export default Footer
// por ultimo se exporta normal como la app 
