import '../styles/AddMovieModal.css'
import { useEffect, useState } from 'react';
import { getDirectors } from '../services/DirectorService';
import { postMovie } from '../services/MovieService';
import Autocomplete from './Autocomplete';
import { FaStar } from 'react-icons/fa'

function AddMovieModal({addMovie,setAddMovie}){
    const [newMoviePoster,setNewMoviePoster] = useState('');
    const [directors,setDirectors] = useState([]);
    const [movieName,setMovieName] = useState("");
    const [directorName,setDirectorName] = useState("");
    const [releaseDate,setReleaseDate] = useState("");
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    function setMovieRating(currentRating){
        setRating(currentRating);
    }

    useEffect(()=>{
        getDirectors().then( (res) => setDirectors(res.data));
    },[])

    useEffect(()=>{
        console.log(directors);
    },[directors])

    function handleSubmit(e){
        let movie = {
            name : movieName,
            directorName : directorName,
            releaseDate : releaseDate,
            posterLink : newMoviePoster,
            rating: rating
        }
        console.log(movie);
        postMovie(movie);
    }

    const handleKeyDown = (event, callback) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
          event.preventDefault();
        }
      };

    return (
        <div className='modal-content'>
            <p onClick={() => setAddMovie(false)} class="close-modal">&times;</p>
            <div className='add-movie-container'>
                <form onSubmit={(e) => handleSubmit(e)} onKeyDown={e => { handleKeyDown(e, handleSubmit) }} className='add-movie-form'>
                    <h2>Ajouter un film</h2>
                    <p>Titre</p>
                    <input type='text' onChange={(e) => setMovieName(e.target.value)} className='input-text-form'></input>
                    <p>Lien vers l'affiche</p>
                    <input onChange={(e) => setNewMoviePoster(e.target.value) } value={newMoviePoster} type='text' className='input-text-form'></input>
                    <p>Année de sortie</p>
                    <input type='text' onChange={(e) => setReleaseDate(e.target.value)} className='input-text-form'></input>
                    <p>Réalisateur</p>
                    <Autocomplete 
                    setDirectorName={setDirectorName}
                    suggestions={directors.map(function(director){
                        return director["name"]
                    })}></Autocomplete>
                    <p>Note</p>
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
                    <button type='submit' className='add-movie-button'>Ajouter</button>
                </form>
                <div className='add-movie-poster-container'>
                    <img src={newMoviePoster || ''} className='add-movie-poster' alt='Aperçu affiche' onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="https://i.ibb.co/G3h8hFh/preview-movie.png";
                    }} ></img>
                </div>
            </div>
        </div>
    )

}

export default AddMovieModal;