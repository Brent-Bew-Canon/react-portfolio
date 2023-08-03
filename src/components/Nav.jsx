import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Nav({ handlePageChange }) {
    return (
        <nav className="navbar dark-b">
            <div className="container-fluid">
                <a className="py-2 ps-3 white-text fs-2">Brent Buchanan</a>
                <div className="d-flex pe-3" role="search">
                    <Link className='mx-3 fs-5 green-text navi-link' to={'/'}>About</Link>
                    <Link className='mx-3 fs-5 green-text navi-link' to={'/portfolio'}>Portfolio</Link>
                    <Link className='mx-3 fs-5 green-text navi-link' to={'/resume'}>Resume</Link>
                    <Link className='mx-3 fs-5 green-text navi-link' to={'/contact'}>Contact</Link>
                </div>
            </div>
        </nav>

    )
}

export default Nav;