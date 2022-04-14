import React from 'react';
import HeaderNavbar from '../bootstrap-components/Navbar/Navbar-Header';
import Edit from '../bootstrap-components/Modal/Event-Edit';
import NewEventNavbar from '../bootstrap-components/Navbar/New-Event-Navbar';
const Admin = () => {
  return (
    <div>
        <HeaderNavbar />
        <NewEventNavbar />
        <h1>Welcome to the Admin page!</h1>
    </div>
  )
}

export default Admin;