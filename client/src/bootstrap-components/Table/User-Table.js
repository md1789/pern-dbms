import React, { Fragment, useEffect, useState } from 'react';
import axios from '../../api/axios';

// create a list item for each event in the events table with a name,
// category, description, date, time, location, rating, and join button
const UserTable = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getEvents();
    }, []);

    // Adds event id to user's event list

    const getUser = async() => {
        try {
            const response = await axios.get("/users",
                JSON.stringify({ user}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response);
            const jsonData = response?.data;

            setUser(jsonData);
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
                    </tr>
                </thead>
                <tbody>
                    { user.map(name => (
                        <tr key={name.event_name}>
                            <td>{name.name}</td>
                            <td>{name.date}</td>
                            <td>{name.time}</td>
                            <td>{name.location}</td>
                            <td>{name.description}</td>
                            <td>{name.category}</td>
                            <button type="button" className="btn btn-primary btn-sm">Join</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default UserTable;