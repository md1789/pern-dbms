import React, { Fragment } from 'react';

// events list navbar
const EventNavbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <h2 className="text-white">Events</h2>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </Fragment>
    )
}

export default EventNavbar;