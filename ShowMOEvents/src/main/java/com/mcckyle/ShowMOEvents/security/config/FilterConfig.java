//***************************************************************************************
//
//     Filename: FilterConfig.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file holds the auth filter configuration.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.security.config;

import com.mcckyle.ShowMOEvents.security.JwtAuthenticationFilter;
import com.mcckyle.ShowMOEvents.security.UserDetailsServiceImpl;
import com.mcckyle.ShowMOEvents.security.jwt.JwtUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//***************************************************************************************

@Configuration
public class FilterConfig
{
    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter(JwtUtils jwtUtils, UserDetailsServiceImpl userDetailsService)
    {
        return new JwtAuthenticationFilter(jwtUtils, userDetailsService);
    }
}

//***************************************************************************************
