import React, { Fragment, useState, useEffect } from 'react';
import HeaderNavbar from '../bootstrap-components/Navbar/Navbar-Header';
import UserTable from '../bootstrap-components/UserTable/Table/User-Table';

const Profile = () => {
  return (
    <Fragment>
        <HeaderNavbar />
        <UserTable />
    </Fragment>
  )
}

export default Profile