package com.nathan.projectmoviesbackend.controller;

import com.nathan.projectmoviesbackend.exception.ResourceAlreadyExistException;
import com.nathan.projectmoviesbackend.model.Director;
import com.nathan.projectmoviesbackend.service.interfaces.DirectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class DirectorController {
    @Autowired
    private DirectorService directorService;

    @GetMapping("/directors")
    private List<Director> getAllDirectors(){
        return directorService.getDirectors();
    }

    @PostMapping("/directors")
    private Director addDirector(@RequestBody Director director){
        Director d;
        try {
             d = directorService.addDirector(director);
        } catch (ResourceAlreadyExistException e){
            throw new ResponseStatusException(HttpStatus.CONFLICT,e.getMessage());
        }
        return d;
    }
}
