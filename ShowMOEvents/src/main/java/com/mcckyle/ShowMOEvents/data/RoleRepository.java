//***************************************************************************************
//
//     Filename: RoleRepository.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file provides database connectivity
//                  for role based access control functionality.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.data;

import com.mcckyle.ShowMOEvents.models.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//***************************************************************************************

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer>
{
    Role findByName(String name); //For finding a role by its name...
}

//***************************************************************************************