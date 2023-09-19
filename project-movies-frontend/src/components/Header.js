import '../styles/Header.css'
import { useLocation } from 'react-router-dom';

function Header({setInputText, setSort, sort}){
    const { pathname } = useLocation();

    const isMoviesTab = pathname === '/movies' ? true : false;
    
    const onPathnameChanged = (pathname) => {
        if (isMoviesTab){ 
            return("Films ");
        }
        else if (!isMoviesTab){
            return("Réalisateurs");
        }
    }

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    return (
        <div className="pl-header">
            <h1>{onPathnameChanged(pathname)}</h1>

            <div className='filter'>
           
           {isMoviesTab ? (
            <div className='sort-bar'>
                <p className='select-label'>Trier</p>
                <select className='select-menu' onChange={e => setSort(e.target.value)} value={sort}>
                    <option value="notes+">Notes +</option>
                    <option value="notes-">Notes -</option>
                    <option value="ddsortie+">Date de sortie +</option>
                    <option value="ddsortie-">Date de sortie -</option>
                    <option value="ordreAlphabetique">Ordre alphabétique</option>
                </select>
            </div>
           ) : ""
           }

            <div className="searchBar">
                <input className="searchQueryInput" type="text" name="searchQueryInput" placeholder="Recherche" onChange={inputHandler} />
            </div>

            </div>
        </div>
    )

}

export default Header;