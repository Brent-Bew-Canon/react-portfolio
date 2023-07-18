import React, { useState } from 'react';
import '../App.css'

function AboutMe() {
    return (
        <main className=" ">
            <div className="pt-5">
                <h1 className="text-center heading-underline">About Me</h1>
            </div>
            <div className="pb-5">
                <p className="text-center mt-5 white-text fs-4">Get to know a bit about my background and programming skills</p>
            </div>

            <div className="container">
                <div className="row pt-5 justify-content-center gx-5">
                    <div className="col-6 text-left">
                        <h2 className=" green-text fs-1 pb-4">My Background</h2>
                        <p className="white-text fs-4">Hey! It's Brent Buchanan and I'm a <span className="green-text">Full Stack Web Developer</span> located in Phoenix. My professional background includes experience in building full-stack web applications with the MERN stack and in digital marketing as an SEO specialist.
                        </p>
                        <p className="white-text fs-4">I'm currently enrolled in ASU's Full Stack Coding Bootcamp and am pursing work as a full stack developer. Take a look at my projects and let's get in touch!
                        </p>
                        <button className="btn white-btn fs-4 mt-4 green-text py-2 px-4 white-bg">Contact</button>

                    </div>
                    <div className="col-6">
                        <h2 className="green-text fs-1 pb-4">My Skills</h2>
                        <div className="">
                            <div className="skills">
                                <div className="skill-item white-btn cursor-cross">HTML</div>
                                <div className="skill-item white-btn cursor-cross">CSS</div>
                                <div className="skill-item white-btn cursor-cross">JavaScript</div>
                                <div className="skill-item white-btn cursor-cross">MongoDB</div>
                                <div className="skill-item white-btn cursor-cross">Express</div>
                                <div className="skill-item white-btn cursor-cross">React</div>
                                <div className="skill-item white-btn cursor-cross">Node.js</div>
                                <div className="skill-item white-btn cursor-cross">MYSQL</div>
                                <div className="skill-item white-btn cursor-cross">GIT</div>
                                <div className="skill-item white-btn cursor-cross">Heroku</div>
                                <div className="skill-item white-btn cursor-cross">Technical SEO</div>
                                <div className="skill-item white-btn cursor-cross">Ahrefs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default AboutMe;