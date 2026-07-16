//***************************************************************************************
//
//     Filename: UserRepository.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file provides database functionality for the User entity.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.data;

import com.mcckyle.ShowMOEvents.models.User;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

//***************************************************************************************

public interface UserRepository extends CrudRepository<User, Integer>
{
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
}

//***************************************************************************************
