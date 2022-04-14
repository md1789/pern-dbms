import React, { Fragment, useEffect, useState } from 'react';
import axios from '../../api/axios';

// create a list item for each event in the events table with a name,
// category, description, date, time, location, rating, and join button
const EventTable = () => {

    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState([]);
    const [user, setUser] = useState([]);
    const [universityMatch, setUniversityMatch] = useState(false);

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        setUniversityMatch(user.university_name === event.university_name);
    }, [user, events])

    const getUser = async () => {
        try {
            const response = await axios.get("/users:id",
                JSON.stringify({ user}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response);
            const userData = response?.data;

            setUser(userData);
        } catch (error) {
            console.error(error.message);
        }
    }
    const getEvent = async() => {
        try {
            const response = await axios.get("/events:id",
                JSON.stringify({ event}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response);
            const jsonData = response?.data;

            setEvent(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    const joinEvent = async(parameterEvent) => {
        try {
            const response = await axios.get("/join",
                JSON.stringify({user, parameterEvent}), // user is in state, parameterEvent is passed in from the button in the map... i think
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response);
            const jsonData = response?.data;

            setEvent(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    // Adds event id to user's event list

    const getEvents = async() => {
        try {
            const response = await axios.get("/events",
                JSON.stringify({ events}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response);
            const jsonData = response?.data;

            setEvents(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <table className="table table-striped table-dark">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Location</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    { events.map(event => (
                        <tr key={event.event_name}>
                            <td>{event.name}</td>
                            <td>{event.date}</td>
                            <td>{event.time}</td>
                            <td>{event.location}</td>
                            <td>{event.description}</td>
                            <td>{event.category}</td>
                            <td>{event.rating_stars}</td>
                            <button type="button" className="btn btn-primary btn-sm" onClick={joinEvent(event.event_name)}>Join</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default EventTable;