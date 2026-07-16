//***************************************************************************************
//
//     Filename: GlobalExceptionHandler.java
//     Author: Kyle McColgan
//     Date: 14 July 2026
//     Description: This file implements a custom exception.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.exceptions;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler
{
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<?> handleNotFoundException(EntityNotFoundException ex)
    {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
