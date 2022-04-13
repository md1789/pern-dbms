import React, { Fragment } from 'react';

// header navbar
const HeaderNavbar = () => {
    return (
        <Fragment>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="event">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="rso">RSOs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="profile">My Profile</a>
                        </li>
                    </ul>
                </div>
            </nav> 
        </Fragment>
    )
}

export default HeaderNavbar;