import React, { useState } from 'react';
import brent from '../assets/images/Brent_headshot.jpg'
import '../App.css'

function Contact() {
    return (
        <main className=" ">
            <div className="pt-5">
                <h1 className="text-center heading-underline">Contact</h1>
            </div>
            <div className="pb-5">
                <p className="text-center mt-5 white-text fs-4">let's get in touch about your company or next project</p>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="h-100 p-5">
                            <img src={brent} alt="Photo Plan App Screenshot" className="w-75 rounded" loading="lazy" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-5 ">
                            <h2 className="green-text fs-1 pb-3">My Info</h2>
                            <p className="white-text fs-3 pb-3">
                                <span className="green-text">LinkedIn: </span><a href="https://www.linkedin.com/in/buchma/" className="white-text">linkedin.com/in/buchma/</a>
                            </p>
                            <p className="white-text fs-3"> <span className="green-text">Email: </span> mrbuchmas@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;