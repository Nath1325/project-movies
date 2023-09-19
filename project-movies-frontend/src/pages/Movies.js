import '../styles/Movies.css'
import { getMovies } from '../services/MovieService';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';


function Movies({inputText,sort}) {
    const [movies, setMovies] = useState([]);
    const filteredMovies = movies.filter((movie) => movie.name.toLowerCase().includes(inputText.toLowerCase()));

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

    return (
        <div className='pl-listMovies'>
            {filteredMovies.map((movie) => 
                <Movie key={movie.id} movie={movie}></Movie>
            )}
        </div>
    )
}

export default Movies;