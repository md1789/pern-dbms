import React, { Fragment, useState } from 'react';

const Edit = ({ event }) => {

    const [name, setName] = useState(event.name);
    const [description, setDescription] = useState(event.description);
    const [time, setTime] = useState(event.time);
    const [date, setDate] = useState(event.date);
    const [category, setCategory] = useState(event.category);
    const [location, setLocation] = useState(event.location);

    const updateEvent = async e => {
        e.preventDefault();
        try {
            const body = { name, description, time, date, category, location };
            const response = await fetch('http://localhost:5000/events${event.event_name}', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            window.location = '/';
        } catch (error) {
            console.error(error.message);
        }
    }

    const cancelEdit = () => {
        setName(event.name);
        setDescription(event.description);
        setTime(event.time);
        setLocation(event.location);
        setCategory(event.category);
        setDate(event.date);
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${event.event_name}`}>Edit</button>
            <div className="modal" id={`id${event.event_name}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Event</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => cancelEdit()}></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" value={name} onChange={e => setName(e.currentTarget.value)}/>
                            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.currentTarget.value)}/>
                            <input type="text" className="form-control" value={time} onChange={e => setTime(e.currentTarget.value)}/>
                            <input type="text" className="form-control" value={date} onChange={e => setDate(e.currentTarget.value)}/>
                            <input type="text" className="form-control" value={category} onChange={e => setCategory(e.currentTarget.value)}/>
                            <input type="text" className="form-control" value={location} onChange={e => setLocation(e.currentTarget.value)}/>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={e => updateEvent(e)}>Save</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => cancelEdit()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Edit;