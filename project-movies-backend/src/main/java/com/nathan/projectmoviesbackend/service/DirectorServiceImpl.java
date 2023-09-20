package com.nathan.projectmoviesbackend.service;

import com.nathan.projectmoviesbackend.exception.ResourceAlreadyExistException;
import com.nathan.projectmoviesbackend.model.Director;
import com.nathan.projectmoviesbackend.repository.DirectorRepository;
import com.nathan.projectmoviesbackend.service.interfaces.DirectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DirectorServiceImpl implements DirectorService {
    @Autowired
    DirectorRepository directorRepository;

    public Director addDirector(Director d) throws ResourceAlreadyExistException {
        if (directorRepository.findByName(d.getName()).isPresent()){
            throw new ResourceAlreadyExistException("Director "+d.getName()+" already in DB");
        }
        return directorRepository.save(d);
    }

    public List<Director> getDirectors(){
        return directorRepository.findAll();
    }
}
