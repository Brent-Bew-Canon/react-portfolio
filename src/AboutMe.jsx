import React, { useState } from 'react';
import './App.css'

function AboutMe() {
    return (
        <main class=" ">
            <div class="pt-5">
                <h1 class="text-center heading-underline">About Me</h1>
            </div>
            <div class="pb-5">
                <p class="text-center mt-5 white-text fs-5">Get to know a bit about my background and programming skills</p>
            </div>

            <div className="container">
                <div className="row pt-5 justify-content-center gx-5">
                    <div className="col-6 text-left">
                        <h2 class=" green-text">My Background</h2>
                        <p class="white-text">Hey! It's Brent Buchanan and I'm a <span class="fw-bold">Full Stack Web Developer</span> located in Phoenix. My professional background includes experience in digital marketing as an SEO analyst, and building up businesses from scratch through various entrepreneurial endeavors.
                        </p>
                        <p class="white-text">I'm currently enrolled in ASU's Full Stack Coding Bootcamp and am pursing work as a full stack developer. Take a look at my projects and let's get in touch!
                        </p>

                    </div>
                    <div className="col-6">
                        <h2 class="green-text">My Skills</h2>
                        <p class="white-text">Hey! It's Brent Buchanan and I'm a <span class="fw-bold">Full Stack Web Developer</span> located in Phoenix. My professional background includes experience in digital marketing as an SEO analyst, and building up businesses from scratch through various entrepreneurial endeavors.
                        </p>
                        <p class="white-text">I'm currently enrolled in ASU's Full Stack Coding Bootcamp and am pursing work as a full stack developer. Take a look at my projects and let's get in touch!
                        </p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default AboutMe;