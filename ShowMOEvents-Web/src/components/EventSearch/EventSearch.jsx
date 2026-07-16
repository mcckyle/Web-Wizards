//****************************************************************************************
// Filename: EventSearch.jsx
// Date: 16 July 2026
// Author: Kyle McColgan
// Description: This file contains the EventSearch component for ShowMOEvents.
//****************************************************************************************

import React, { useState } from 'react';
import './EventSearch.css';

const EventSearch = () => {
	const [query, setQuery] = useState('');
	const [events, setEvents] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	
	const handleSearch = async () => {
		setLoading(true);
		try
		{
				const response = await fetch(`http://localhost:8080/search/find-events?location=${encodeURIComponent(query)}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
			});
			
			if(!response.ok)
			{
				throw new Error('Network response was not ok...');
			}
			const data = await response.json();
			
			setEvents(data?._embedded?.events ?? []);
			
		}
		catch(error)
		{
			setError(error.message);
		}
		finally
		{
			setLoading(false);
		}
	};
	
	return (
	    <div>
		<h1>Search Nearby Events...</h1>
		<input
		type="text"
		value={query}
		onChange={(e) => setQuery(e.target.value)}
		placeholder="Enter location for events..."
		/>
		<button onClick = {handleSearch}>Search Events</button>
		
		{error && <p>Error: {error}</p>}
		
		<h1>Events</h1>
		<table>
		<thead>
		    <tr>
			    <th>Event Name</th>
				<th>Location</th>
				<th>Date</th>
				<th>Time</th>
				<th>Link</th>
			</tr>
		</thead>
		<tbody>
		    {events.map(event => (
			    <tr key = {event.id}>
				<td>{event.name}</td>
				<td>{event._embedded?.venues?.[0]?.city?.name ?? "Unknown"}</td>
				<td>{new Date(event.dates?.start?.localDate).toLocaleDateString()}</td>
				<td>{new Date(event.dates?.start?.dateTime).toLocaleTimeString()}</td>
				<td><a href = {event.url} target="_blank" rel="noopener noreferrer">View Event</a></td>
				</tr>
			))}
			</tbody>
		</table>
		</div>
	);
};

export default EventSearch;