import axios from "axios";

const MOVIE_API_BASE_URL = "http://localhost:8080/api/v1/movies";

export function getMovies(){
        return axios.get(MOVIE_API_BASE_URL);
}

export function getMoviesByDirectorId(id){
    return axios.get(MOVIE_API_BASE_URL+"/director?directorId="+id);
}

export function rateMovieById(movieId, rating){
    return axios.put(MOVIE_API_BASE_URL+"/rate?movieId="+movieId+"&rating="+rating).catch(error => {
        console.error("There was an error : ",error);
    });
}

export function postMovie(movie){
    return axios.post(MOVIE_API_BASE_URL,movie);
}

