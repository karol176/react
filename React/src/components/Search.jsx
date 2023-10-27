import './Search.css'
import lupa from "../img/lupa.png"

function Search() {
    return (
        <div id='search-box'>
            
                <input id='search-text' placeholder='Escribe lo que buscas' type='text'/>
                <button id='search-button' type='submit'>
                    <span>
                        <img id='lupa' src={lupa} alt="" />
                    </span>
                </button>
        </div>
    )
}

export default Search