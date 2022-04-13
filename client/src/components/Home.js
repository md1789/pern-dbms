import React, { Fragment } from 'react';
import HeaderNavbar from '../bootstrap-components/Navbar/Navbar-Header';
import ucf_logo from "../ucf_logo.png"

const Home = () => {
  return (
    <Fragment>
        <HeaderNavbar />
        <h1>Welcome!</h1>
        <img src={ucf_logo} alt="ucf logo" width="500" height="500"/>
    </Fragment>
  )
}

export default Home;