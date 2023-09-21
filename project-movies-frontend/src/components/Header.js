import '../styles/Header.css'
import { useLocation } from 'react-router-dom';

function Header({setInputText, setSortMovies, sortMovies,setAddMovie,sortDirectors,setSortDirectors}){
    const { pathname } = useLocation();

    const isMoviesTab = pathname === '/movies' ? true : false;
    const isDirectorsTab = pathname === '/directors' ? true : false;
    
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
                <button onClick={() => setAddMovie(true)} className='button-add-movie'>Ajouter un film</button>
                <p className='select-label'>Trier</p>
                <select className='select-menu' onChange={e => setSortMovies(e.target.value)} value={sortMovies}>
                    <option value="notes+">Notes +</option>
                    <option value="notes-">Notes -</option>
                    <option value="ddsortie+">Date de sortie +</option>
                    <option value="ddsortie-">Date de sortie -</option>
                    <option value="ordreAlphabetique">Ordre alphabétique</option>
                </select>
            </div>
           ) : ""
           }

           {
            isDirectorsTab? (
                <div className='sort-bar'>
                <p className='select-label'>Trier</p>
                <select className='select-menu' onChange={e => setSortDirectors(e.target.value)} value={sortDirectors}>
                    <option value="moyenneNotes+">Moyenne notes +</option>
                    <option value="moyenneNotes-">Moyenne notes -</option>
                    <option value="ordreAlphabetique">Ordre alphabétique</option>
                </select>
            </div>
            ) :""
           }

            <div className="searchBar">
                <input className="searchQueryInput" type="text" name="searchQueryInput" placeholder="Recherche" onChange={inputHandler} />
            </div>

            </div>
        </div>
    )

}

export default Header;