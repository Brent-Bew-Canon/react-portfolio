import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Footer({ handlePageChange }) {
    return (
        <div className="container py-5 mt-5">
            <div className="row justify-content-center pt-5">
                <div className="col-sm-12 col-md-3 pt-5">
                    <p className="ps-3 white-text fs-5 text-center">Brent Buchanan 2023</p>
                </div>
                <div className="col-sm-12 col-md-3  justify-content-center text-center pt-5" >
                    <Link className="ps-3 green-text fs-5 text-center" to={'/contact'}>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;