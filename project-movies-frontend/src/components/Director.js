import '../styles/Director.css'
import { getMoviesByDirectorId } from '../services/MovieService';
import { useState, useEffect } from 'react';

function Director({director}){
    const[movies,setMovies] = useState([]);

    useEffect(() =>{
        getMoviesByDirectorId(director.id).then((res) => {
            setMovies(res.data);
        })
        .catch((error) =>
        alert("Error fetching movies of director : \n"+error));
    }, [])

    return (
            <div className='director-card'>
            <h2 className='director-name'>{director.firstName} {director.lastName}</h2>
            <div className='director-picture-and-movies '>
                <div>
                    <img className="director-picture" src={director.pictureLink} alt={director.lastName}/>
                </div>
                <div className='director-movies'>
                {
                    movies.map((movie) => {
                        return (
                            <div className='poster-container-director' key={movie.id}>
                                <img className="img-poster-director" src={movie.posterLink} alt={movie.name}/>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default Director;