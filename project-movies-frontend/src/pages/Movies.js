import '../styles/Movies.css'
import { getMovies } from '../services/MovieService';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';


function Movies({inputText,sort,addMovie,setAddMovie}) {
    const [movies, setMovies] = useState([]);
    const filteredMovies = movies.filter((movie) => movie.name.toLowerCase().includes(inputText.toLowerCase()));

    useEffect(() => {
        var modal = document.getElementById("addMovieModal");
        if (addMovie === true) {
            modal.style.display = "block";
        }
        else {
            modal.style.display = "none";
        }
    },[addMovie])

    function sortMovies() {
        switch (sort) {
            case "notes+":
                filteredMovies.sort((movieA, movieB) => movieB.rating - movieA.rating);
                break;
            case "notes-":
                filteredMovies.sort((movieA, movieB) => movieA.rating - movieB.rating);
                break;
            case "ddsortie+":
                filteredMovies.sort((movieA, movieB) => movieB.releaseDate - movieA.releaseDate);
                break;
            case "ddsortie-":
                filteredMovies.sort((movieA, movieB) => movieA.releaseDate - movieB.releaseDate);
                break;
            case "ordreAlphabetique":
                filteredMovies.sort((movieA, movieB) => {
                    const nameA = movieA.name.toLowerCase();
                    const nameB = movieB.name.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                break;
            default:
                break;
        }
    };

    sortMovies();

    console.log(inputText,movies,filteredMovies);

    useEffect(() =>{
        getMovies().then((res) => {
            setMovies(res.data);
        })
        .catch((error) =>
        alert("Error fetching movies : \n"+error));
    }, [])

    useEffect(() => {
        console.log(movies);
    },[movies])

    var modal = document.getElementById("addMovieModal");

    window.onclick = function(event) {
        if (event.target === modal){
            modal.style.display = setAddMovie(false);
        }
    }

    function handleSubmit(){

    }

    return (
        <>
            <div id='addMovieModal' className='modal'>
                <div className='modal-content'>
                    <p onClick={() => setAddMovie(false)} class="close-modal">&times;</p>
                    <div className='add-movie-form'>
                        <form onSubmit={() => handleSubmit()}>
                            <h2>Ajouter un film</h2>
                            <p>Titre</p>
                            <input type='text' className='input-text-form'></input>
                            <p>Lien vers l'affiche</p>
                            <input type='text' className='input-text-form'></input>
                            <p>Année de sortie</p>
                            <input type='text' className='input-text-form'></input>
                            <p>Nom du réalisateur</p>
                            <input type='text' className='input-text-form'></input>
                        </form>
                        <div className='add-movie-poster'>
                            <img src=''></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pl-listMovies'>
                    {filteredMovies.map((movie) => 
                        <Movie key={movie.id} movie={movie}></Movie>
                    )}
            </div>
        </>
    )
}

export default Movies;