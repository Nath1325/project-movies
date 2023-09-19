package com.nathan.projectmoviesbackend.repository;

import com.nathan.projectmoviesbackend.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie,Long> {
    public List<Movie> getMoviesByDirectorId(long directorId);

}
