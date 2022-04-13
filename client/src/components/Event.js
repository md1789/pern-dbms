import React, { Fragment } from 'react';
import EventTable from '../bootstrap-components/Table/Event-Table';
import HeaderNavbar from '../bootstrap-components/Navbar/Navbar-Header';

const Event = () => {
  return (
    <Fragment>
      <HeaderNavbar />
      <EventTable />
    </Fragment>
  )
}

export default Event;