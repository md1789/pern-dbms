import { set } from 'date-fns';
import React, { Fragment, useEffect, useState } from 'react';
import axios from '../../api/axios';
import EventNavbar from '../Navbar/Navbar-Event';

// create a list item for each event in the events table with a name,
// category, description, date, time, location, rating, and join button
const EventTable = () => {

    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState([]);
    const [eventName, setEventName] = useState([]);
    const [user, setUser] = useState([]);
    const [userEvent, setUserEvent] = useState([]);
    const [universityMatch, setUniversityMatch] = useState(false);

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        getUser();
    }, [user]);

    useEffect(() => {
        getUser();
    }, [event]);

    useEffect(() => {
        joinEvent();
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

            setUser(userData.username);
        } catch (error) {
            console.error(error.message);
        }
    }

    const joinEvent = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/userevents",
                JSON.stringify({user, event}), // user is in state, parameterEvent is passed in from the button in the map... i think
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response);
            const jsonData = response?.data;
            setUser(user);
            set(event);
            setUserEvent(jsonData);
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
            <EventNavbar />
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
                            <button type="button" className="btn btn-success" onChange={(e) => setUserEvent(e.target.value)} onClick={joinEvent}>Join</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default EventTable;