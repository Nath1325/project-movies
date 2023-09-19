import axios from "axios";

const DIRECTOR_API_BASE_URL = "http://localhost:8080/api/v1/directors";

export function getDirectors(){
        return axios.get(DIRECTOR_API_BASE_URL);
}

export function getMoviesByDirectorId(id){
    return axios.get(DIRECTOR_API_BASE_URL);
}