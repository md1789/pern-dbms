import React, { Fragment } from 'react';
import HeaderNavbar from '../bootstrap-components/Navbar/Navbar-Header';
import Event from '../bootstrap-components/Form/Event-Creation';
import Edit from '../bootstrap-components/Modal/Event-Edit';
const Admin = () => {
  return (
    <Fragment>
        <HeaderNavbar />
        <Event />
        <Edit />
    </Fragment>
  )
}

export default Admin;