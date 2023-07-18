import React, { useState } from 'react';
import '../App.css'

function Nav({ handlePageChange }) {
    return (
        <nav className="navbar dark-b">
            <div className="container-fluid">
                <a className="py-2 ps-3 white-text fs-2">Brent Buchanan</a>
                <div className="d-flex pe-3" role="search">
                    <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className='mx-3 fs-5 green-text navi-link'>About</a>
                    <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className="mx-3 fs-5 green-text navi-link" >Portfolio</a>
                    <a href="#Contact" onClick={() => handlePageChange('Contact')} className="mx-3 fs-5 green-text navi-link" >Contact</a>
                    <a href="#Resume" onClick={() => handlePageChange('Resume')} className="mx-3 fs-5 green-text navi-link" >Resume</a>
                </div>
            </div>
        </nav>

    )
}

export default Nav;