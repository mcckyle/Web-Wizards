//***************************************************************************************
//
//   Filename: EventServiceException.java
//   Author: Kyle McColgan
//   Date: 14 July 2026
//   Description: This file contains custom exception prototypes for ShowMOEvents.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.exceptions;

//***************************************************************************************

public class EventServiceException extends RuntimeException
{
    public EventServiceException(String message)
    {
        super(message);
    }

    public EventServiceException(String message, Throwable cause)
    {
        super(message, cause);
    }
}
