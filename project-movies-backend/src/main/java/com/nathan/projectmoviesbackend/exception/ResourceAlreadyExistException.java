package com.nathan.projectmoviesbackend.exception;

public class ResourceAlreadyExistException extends RuntimeException {
    public ResourceAlreadyExistException(String message){
        super(message);
    }
}
