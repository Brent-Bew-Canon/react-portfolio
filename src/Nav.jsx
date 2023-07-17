import React, { useState } from 'react';
import './App.css'

function Nav() {
    return (
        <nav class="navbar dark-bg">
            <div class="container-fluid">
                <a class="navbar-bran py-2 ps-3 white-text fs-2">Brent Buchanan</a>
                <div class="d-flex pe-3" role="search">
                    <a href="#" class="mx-3 fs-3 green-text nav-link">About Me</a>
                    <a href="#" class="mx-3 fs-3 green-text nav-link">Portfolio</a>
                    <a href="#" class="mx-3 fs-3 green-text nav-link">Contact</a>
                    <a href="" class="mx-3 fs-3 green-text nav-link">Resume</a>
                </div>
            </div>
        </nav>

    )
}

export default Nav;