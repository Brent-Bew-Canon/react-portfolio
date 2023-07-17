import React, { useState } from 'react';
import './App.css'

function Nav() {
    return (
        <nav class="navbar bg-secondary">
            <div class="container-fluid">
                <a class="navbar-brand text-light">Brent Buchanan</a>
                <div class="d-flex" role="search">
                    <a href="#" class="mx-3 green">About Me</a>
                    <a href="#" class="mx-3 green">Portfolio</a>
                    <a href="#" class="mx-3 green">Contact</a>
                    <a href="" class="mx-3 green">Resume</a>
                </div>
            </div>
        </nav>

    )
}

export default Nav;