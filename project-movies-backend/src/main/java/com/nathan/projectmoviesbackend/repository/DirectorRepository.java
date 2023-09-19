package com.nathan.projectmoviesbackend.repository;

import com.nathan.projectmoviesbackend.model.Director;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DirectorRepository extends JpaRepository<Director,Long> {
    public Optional<Director> findByFirstNameAndLastName(String first_name, String last_name);

}
