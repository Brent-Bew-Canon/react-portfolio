import React, { useState } from 'react';
import './App.css'

function Footer() {
    return (
        <div className="container py-5 mt-5">
            <div className="row justify-content-center ">
                <div className="col-3 text-center ">
                    <p className="ps-3 white-text fs-5 text-center">Brent Buchanan 2023</p>
                </div>
                <div className="col-3 " >
                    <a className="ps-3 green-text fs-5 text-center">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;