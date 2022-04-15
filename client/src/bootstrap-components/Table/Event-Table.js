import { set } from 'date-fns';
import React, { Fragment, useEffect, useState } from 'react';
import axios from '../../api/axios';
import EventNavbar from '../Navbar/Navbar-Event';

// create a list item for each event in the events table with a name,
// category, description, date, time, location, rating, and join button
const EventTable = () => {

    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState([]);
    const [name, setName] = useState([]);
    const [username, setUsername] = useState([]);
    const [event_name, setEvent_name] = useState([]);
    const [category, setCategory] = useState([]);
    const [description, setDescription] = useState([]);
    const [location, setLocation] = useState('');
    const [time, setTime] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        getEvents();
    }, []);



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
                            <button type="button" className="btn btn-success">Join</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default EventTable;