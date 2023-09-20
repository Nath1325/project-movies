package com.nathan.projectmoviesbackend.service.interfaces;

import com.nathan.projectmoviesbackend.dto.MovieDTO;
import com.nathan.projectmoviesbackend.exception.ResourceNotFoundException;
import com.nathan.projectmoviesbackend.model.Movie;

import java.util.List;

public interface MovieService {
    public Movie addMovie(MovieDTO m);

    public List<Movie> getMovies();

    List<Movie> getMoviesByDirectorName(String name) throws ResourceNotFoundException;

    public Movie rateMovieByMovieId(long movieId, int rating);

    public List<Movie> getMoviesByDirectorId(long directorId);
}
