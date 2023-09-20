import '../styles/Director.css'
import { getMoviesByDirectorId } from '../services/MovieService';
import { useState, useEffect } from 'react';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

function Director({director}){
    const[movies,setMovies] = useState([]);

    const settings = {
        infinite: false,
        slidesToShow: 1,
        swipeToSlide: true,
      };

    useEffect(() =>{
        getMoviesByDirectorId(director.id).then((res) => {
            setMovies(res.data);
        })
        .catch((error) =>
        alert("Error fetching movies of director : \n"+error));
    }, [])

    const slideLeft = () => {
        console.log("slideLeft");
        var slider = document.getElementById(director.name+"-slider");
        slider.scrollLeft = slider.scrollLeft - 250;
    }

    const slideRight = () => {
        console.log("slideRight");
        var slider = document.getElementById(director.name+"-slider");
        console.log(slider);
        slider.scrollLeft = slider.scrollLeft + 250
    }

    return (
            <div className='director-card'>
            <h2 className='director-name'> {director.name}</h2>
            <div className='director-picture-and-movies '>
                <div>
                    <img className="director-picture" src={director.pictureLink} alt={director.name}/>
                </div>
                <div className='slider-movies'>
                    <MdChevronLeft size={40} className='chevron-left' onClick={slideLeft}/>
                    <div className='director-movies' id={director.name+"-slider"}>
                            {
                                movies.map((movie) => {
                                    console.log(movie)
                                    return (
                                        <div key={movie.id}>
                                            <div className='poster-container-director'>
                                                <img className="img-poster-director" src={movie.posterLink} alt={movie.name}/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                    <MdChevronRight size={40} className='chevron-right' onClick={slideRight}/>
                </div>
            </div>
        </div>
    )
}

export default Director;