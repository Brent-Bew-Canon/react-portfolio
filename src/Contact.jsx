import React, { useState } from 'react';
import brent from './assets/images/Brent_headshot.jpg'
import './App.css'

function Contact() {
    return (
        <main class=" ">
            <div class="pt-5">
                <h1 class="text-center heading-underline">Contact</h1>
            </div>
            <div class="pb-5">
                <p class="text-center mt-5 white-text fs-4">let's get in touch about your company or next project</p>
            </div>
            <div className="container">
                <div class="row ">
                    <div class="col-md-6">
                        <div class="h-100 p-5">
                            <img src={brent} alt="Photo Plan App Screenshot" class="w-75 rounded" loading="lazy" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-5 ">
                            <h2 class="green-text fs-1 pb-3">My Info</h2>
                            <p class="white-text fs-3 pb-3">
                                <span class="green-text">LinkedIn: </span><a href="https://www.linkedin.com/in/buchma/" class="white-text">linkedin.com/in/buchma/</a>
                            </p>
                            <p class="white-text fs-3"> <span class="green-text">Email: </span> mrbuchmas@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;