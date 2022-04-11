import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Fragment className='App'>
            <Outlet />
        </Fragment>
    )
}

export default Layout;