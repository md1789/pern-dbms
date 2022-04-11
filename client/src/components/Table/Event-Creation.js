import React, { Fragment, useState } from 'react';

const Event = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { name, description, time, date, category, location };
            const response = await fetch('http:localhost:5000/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Create Event</h1>
            <Form className="d-flex" onSubmit={onSubmitForm}>
                <b-row className="event-form">
                    <b-col sm="10">
                        <b-form-input id="input" placeholder="Provide an event name" onChange={e => setName(e.target.value)}></b-form-input>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input" placeholder="Provide an event description" onChange={e => setDescription(e.target.value)}></b-form-input>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input" placeholder="Provide an event time" onChange={e => setTime(e.target.value)}></b-form-input>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input" placeholder="Provide an event date" onChange={e => setDate(e.target.value)}></b-form-input>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input" placeholder="Provide an event category" onChange={e => setCategory(e.target.value)}></b-form-input>
                    </b-col>
                    <b-col sm="10">
                        <b-form-input id="input" placeholder="Provide an event location" onChange={e => setCategory(e.target.value)}></b-form-input>
                    </b-col>
                </b-row>
                <button className="btn btn-success">Add Event</button>
            </Form>
        </Fragment>
    )
}

export default Event;