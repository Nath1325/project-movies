package com.nathan.projectmoviesbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Table(name ="movies")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Movie {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "director_id", referencedColumnName = "id", nullable = false)
    private Director director;

    private String releaseDate;

    private Integer rating;

    private String posterLink;

    public void setRating(Integer rating) {
        if (rating != null) {
            if (rating <= 5) this.rating = rating;
        }
    }

}
