//***************************************************************************************
//
//     Filename: JwtConfig.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file contains the token configuration.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.security.config;

import com.mcckyle.ShowMOEvents.security.jwt.JwtUtils;
import com.mcckyle.ShowMOEvents.services.UserService;
import org.springframework.context.annotation.Configuration;

//***************************************************************************************

@Configuration
public class JwtConfig
{
    private final JwtUtils jwtUtils;
    private final UserService userService;

    public JwtConfig(JwtUtils jwtUtils, UserService userService)
    {
        this.jwtUtils = jwtUtils;
        this.userService = userService;
    }
}

//***************************************************************************************
