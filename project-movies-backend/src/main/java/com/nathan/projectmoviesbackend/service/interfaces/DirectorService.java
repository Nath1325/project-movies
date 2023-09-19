package com.nathan.projectmoviesbackend.service.interfaces;

import com.nathan.projectmoviesbackend.model.Director;

import java.util.List;

public interface DirectorService {

    public Director addDirector(Director d);

    public List<Director> getDirectors();
}
