package com.nathan.projectmoviesbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovieDTO {
    private String name;

    private String directorName;

    private String releaseDate;

    private String posterLink;

    private Integer rating;

}
