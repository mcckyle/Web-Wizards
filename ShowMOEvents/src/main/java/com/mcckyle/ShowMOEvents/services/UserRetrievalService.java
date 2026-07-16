//***************************************************************************************
//
//     Filename: UserRetrievalService.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file provides shared user functionality.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.services;

import com.mcckyle.ShowMOEvents.models.User;
import java.util.Optional;

//***************************************************************************************

public interface UserRetrievalService
{
    Optional<User> findByUsername(String username);
}

//***************************************************************************************
