//***************************************************************************************
//
//     Filename: LoginRequest.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file formats all login requests.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.payload;

//***************************************************************************************

public class LoginRequest
{
    private String username;
    private String password;

    // Getters and Setters
    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }
}

//***************************************************************************************