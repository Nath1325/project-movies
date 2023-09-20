package com.nathan.projectmoviesbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name ="directors")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Director {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String pictureLink;

    @OneToMany(mappedBy = "director")
    @JsonIgnore
    private List<Movie> movies;

    public Director(String name){
        this.name = name;
        movies = new ArrayList<>();
    }

}
