import React, { Fragment, useEffect, useState } from 'react';
import axios from '../../api/axios';

// create a list item for each event in the events table with a name,
// category, description, date, time, location, rating, and join button
const RSOTable = () => {

    const [RSO, setRSO] = useState([]);

    useEffect(() => {
        getRSOs();
    }, []);

    // Adds event id to user's event list

    const getRSOs = async() => {
        try {
            const response = await axios.get("/rsos",
                JSON.stringify({ RSO}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response);
            const jsonData = response?.data;

            setRSO(jsonData);
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
                        <th scope="col">Number of Members</th>
                    </tr>
                </thead>
                <tbody>
                    { RSO.map(name => (
                        <tr key={name.rso_name}>
                            <td>{name.rso_name}</td>
                            <td>{name.num_members}</td>
                            <button type="button" className="btn btn-success btn-sm">Join</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default RSOTable;