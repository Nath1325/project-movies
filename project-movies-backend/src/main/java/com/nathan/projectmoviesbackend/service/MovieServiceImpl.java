package com.nathan.projectmoviesbackend.service;

import com.nathan.projectmoviesbackend.dto.MovieDTO;
import com.nathan.projectmoviesbackend.exception.ResourceAlreadyExistException;
import com.nathan.projectmoviesbackend.exception.ResourceNotFoundException;
import com.nathan.projectmoviesbackend.model.Director;
import com.nathan.projectmoviesbackend.model.Movie;
import com.nathan.projectmoviesbackend.repository.DirectorRepository;
import com.nathan.projectmoviesbackend.repository.MovieRepository;
import com.nathan.projectmoviesbackend.service.interfaces.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {
    @Autowired
    MovieRepository movieRepository;

    @Autowired
    DirectorRepository directorRepository;

    @Override
    public Movie addMovie(MovieDTO m) throws ResourceAlreadyExistException {
        Director d;
        Optional<Director> directorOpt = directorRepository.findByName(m.getDirectorName());
        d = directorOpt.orElseGet(() -> new Director(m.getDirectorName()));
        directorRepository.save(d);
        Movie movie = new Movie();
        movie.setDirector(d);
        movie.setName(m.getName());
        movie.setReleaseDate(m.getReleaseDate());
        movie.setRating(m.getRating());
        movie.setPosterLink(m.getPosterLink());
        return movieRepository.save(movie);
    }

    @Override
    public List<Movie> getMovies(){
        return movieRepository.findAll();
    }

    @Override
    public List<Movie> getMoviesByDirectorName(String name) throws ResourceNotFoundException {
        List<Movie> movies = new ArrayList<>();
        Optional<Director> directorOptional = directorRepository.findByName(name);
        if (directorOptional.isEmpty()) throw new ResourceNotFoundException(" Director "+name+" not found in DB.");
        return movieRepository.getMoviesByDirectorId(directorOptional.get().getId());
    }

    @Override
    public Movie rateMovieByMovieId(long movieId, int rating) throws ResourceNotFoundException {
        Optional<Movie> movieOptional = movieRepository.findById(movieId);
        if (movieOptional.isEmpty()) throw new ResourceNotFoundException(" Movie of id "+movieId+" not found");
        Movie movie = movieOptional.get();
        movie.setRating(rating);
        return movieRepository.save(movie);
    }

    @Override
    public List<Movie> getMoviesByDirectorId(long directorId) throws ResourceNotFoundException {
        if (directorRepository.findById(directorId).isEmpty()) throw new ResourceNotFoundException(
                "Director w/ id "+directorId+" not found.");
        return movieRepository.getMoviesByDirectorId(directorId);
    }

}
