package com.nathan.projectmoviesbackend.controller;

import com.nathan.projectmoviesbackend.dto.MovieDTO;
import com.nathan.projectmoviesbackend.exception.ResourceNotFoundException;
import com.nathan.projectmoviesbackend.model.Movie;
import com.nathan.projectmoviesbackend.service.interfaces.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping("/movies")
    public List<Movie> getAllMovies(){
        return movieService.getMovies();
    }

    @PostMapping("/movies")
    public Movie createMovie(@RequestBody MovieDTO movie){
        Movie m;
        try {
            m = movieService.addMovie(movie);
        } catch (ResourceNotFoundException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
        return m;
    }

    @GetMapping("/movies/directorName")
    public List<Movie> getMoviesByDirectorFirstAndLastName(@RequestParam String firstName, @RequestParam String lastName){
        List<Movie> movies;
        try {
            movies = movieService.getMoviesByDirectorFirstAndLastName(firstName,lastName);
        } catch (ResourceNotFoundException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
        return movies;
    }

    @GetMapping("/movies/director")
    public List<Movie> getMoviesByDirectorId(@RequestParam long directorId){
        List<Movie> movies;
        try {
            movies = movieService.getMoviesByDirectorId(directorId);
        } catch (ResourceNotFoundException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
        return movies;
    }

    @PutMapping("/movies/rate")
    public Movie rateMovieByMovieId(@RequestParam long movieId, @RequestParam int rating){
        Movie movie;
        try {
            movie = movieService.rateMovieByMovieId(movieId,rating);
        } catch (ResourceNotFoundException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
        return movie;
    }

}
