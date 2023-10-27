import './Menu.css'
import Search from './Search'
import logo from "../img/Logo.png"
import Imagenes from "./Imagenes"
function Menu() {
    return (
        <header className="Menu">
            <div>
                <img src={logo}alt="" />
                <Search />
            </div>
            <nav>
                <a href="" >Deportes</a>
                <a href="" >Mujer</a>
                <a href="" >Hombres</a>
                <a href="" >Infantil</a>
                <a href="" >entretenimiento</a>
                <a href="" >Nutricion y Salud</a>
            </nav>
            <Imagenes/>
        </header>
        
    )
}

export default Menu