//***************************************************************************************
//
//     Filename: UserNotFoundException.java
//     Author: Kyle McColgan
//     Date: 31 November 2024
//     Description: This file implements custom exception handling
//                  to handle the lack of an existing user in the database.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.Exceptions;

//***************************************************************************************

public class UserNotFoundException extends RuntimeException
{
    public UserNotFoundException(String message)
    {
        super(message);
    }
}

//***************************************************************************************