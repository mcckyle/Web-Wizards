//***************************************************************************************
//
//     Filename: EventService.java
//     Author: Kyle McColgan
//     Date: 14 July 2026
//     Description: This file provides abstracted event functionality.
//
//***************************************************************************************

package com.mcckyle.ShowMOEvents.services;

import com.mcckyle.ShowMOEvents.exceptions.EventServiceException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

@Service
public class EventService
{
    private static final String TICKETMASTER_API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

    private static final String TICKETMASTER_API_KEY = System.getenv("TICKETMASTER_API_KEY");

    private final RestTemplate restTemplate = new RestTemplate();

    public String fetchEvents(String location)
    {
        String ticketmasterUrl = TICKETMASTER_API_URL + "?apikey=" + TICKETMASTER_API_KEY + "&city=" + location;

        try
        {
            return restTemplate.getForObject(ticketmasterUrl, String.class);
        }
        catch(HttpClientErrorException e)
        {
            throw new EventServiceException("Ticketmaster API returned client error: " + e.getStatusCode(), e);
        }
        catch(HttpServerErrorException e)
        {
            throw new EventServiceException("Ticketmaster API returned server error: " + e.getStatusCode(), e);
        }
        catch(ResourceAccessException e)
        {
            throw new EventServiceException("Unable to connect to Ticketmaster API. Please try again later. ", e);
        }
        catch(Exception e)
        {
            throw new EventServiceException("An unexpected error occurred while fetching events.", e);
        }
    }
}
