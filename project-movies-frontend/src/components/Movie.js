import { useEffect, useState } from 'react';
import '../styles/Movie.css'
import { FaStar } from 'react-icons/fa'
import { rateMovieById } from '../services/MovieService';

function Movie ({movie}){
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    function setMovieRating(currentRating){
        setRating(currentRating);
        rateMovieById(movie.id,currentRating);
        movie.rating = currentRating;
    }

    useEffect(() => {
        setRating(movie.rating);
    },[movie])

    return (
        <div>
            <div className='pl-movieCard'>
                    <div className='movie-desc'>
                        <p className='movie-title'>{movie.name}</p>
                        <p className='movie-director'>{movie.director.firstName} {movie.director.lastName}, {movie.releaseDate}</p>
                    </div>
                    <div className='poster-container'>
                        <img className="img-poster" src={movie.posterLink} alt={movie.name} />
                    </div>
                    
                    <div className="star-rating">
                        <p className='note-label'>Note</p>
                        <div className='stars-rating'>
                            {[...Array(5)].map( (star, index) => {
                                const currentRating = index + 1;
                                return( 
                                    <label key={index+"star"}>
                                        <input type='radio' 
                                        name='rating' 
                                        value={currentRating} 
                                        onClick={() => {setMovieRating(currentRating)}} 
                                        />

                                        <FaStar 
                                        className='star'
                                        size={20}
                                        color={currentRating <= (hover || rating ) ? "#ffc107" : "#e4e5e9"} 
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(null)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Movie;