import React, { Fragment, useState, useEffect } from 'react';
import HeaderNavbar from '../bootstrap-components/Navbar/Navbar-Header';
import UserTable from '../bootstrap-components/Table/User-Table';
import EventNavbar from "../bootstrap-components/Navbar/Navbar-Event";

const Profile = () => {
  return (
    <Fragment>
        <HeaderNavbar />
        <EventNavbar />
        <UserTable />
    </Fragment>
  )
}

export default Profile;