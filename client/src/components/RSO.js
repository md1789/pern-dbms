import React, { Fragment } from 'react';
import RSOTable from '../bootstrap-components/Table/RSO-Table';
import HeaderNavbar from '../bootstrap-components/Navbar/Navbar-Header';

const RSO = () => {
  return (
    <Fragment>
      <HeaderNavbar />
      <RSOTable />
    </Fragment>
  )
}

export default RSO;