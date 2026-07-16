//***************************************************************************************
//
//   Filename: SearchController.java
//   Author: Kyle McColgan
//   Date: 14 July 2026
//   Description: This file provides Search functionality.
//
//***************************************************************************************


package com.mcckyle.ShowMOEvents.controllers;

import com.mcckyle.ShowMOEvents.services.EventService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/search")
public class SearchController
{
    private final EventService eventService;

    public SearchController(EventService eventService)
    {
        this.eventService = eventService;
    }

    //    @CrossOrigin("https://app.ticketmaster.com")
//    @CrossOrigin("http://localhost:5173")
    @GetMapping("find-events")
    public ResponseEntity<String> getNearbyEvents(@RequestParam String location)
    {
        String events = eventService.fetchEvents(location);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(events);
    }
}