//***************************************************************************************
//
//     Filename: EventRepository.java
//     Author: Kyle McColgan
//     Date: 13 July 2026
//     Description: This file provides database functionality for the Event entity.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.data;

import com.mcckyle.ShowMOEvents.models.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {
}
