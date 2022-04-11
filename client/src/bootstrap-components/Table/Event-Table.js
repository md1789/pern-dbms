import React, { Fragment, useEffect, useState } from 'react';

// create a list item for each event in the events table with a name,
// category, description, date, time, location, rating, and join button
const EventTable = () => {

    const [events, setEvents] = useState([]);

    // Adds event id to user's event list
    const joinEvent = async e => {
        e.preventDefault();
        try {
            const response = await fetch('http:localhost:5000/events', {
                method: 'GET',
                headers: { 'Accept': 'application/json'},
                endpoint: 'https:localhost:5000/events',
                cache: {
                    key: CACHE_KEY,
                    strategy: api.cache
                      .get(api.constants.SIMPLE_SUCCESS)
                      .buildStrategy(),
                },
            });

            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    const getEvents = async() => {
        try {
            const response = await fetch('http://localhost:5000/events');
            const jsonData = await response.json();

            setEvents(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <Fragment>
            <table className="table table-striped table-dark">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Location</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    { events.map(event => (
                        <tr key={event.event_name}>
                            <td>{event.name}</td>
                            <td>{event.category}</td>
                            <td>{event.descrioption}</td>
                            <td>{event.date}</td>
                            <td>{event.time}</td>
                            <td>{event.location}</td>
                            <td>{event.rating}</td>
                            <button type="button" className="btn btn-primary btn-sm" onClick={() => joinEvent(event.event_name)}>Join</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default EventTable;