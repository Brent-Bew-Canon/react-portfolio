import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import github from '../assets/images/github-ico.png'
import linkedIn from '../assets/images/linkedin-ico.png'
import Tools from '../components/Tools'


function AboutMe({ handlePageChange }) {
    return (
        <main className="">
            <div className="pt-5">
                <h1 className="text-center heading-underline">About Me</h1>
            </div>
            <div className="mx-auto text-center mt-5">
                <a href="https://github.com/Brent-Bew-Canon"><img src={github} alt="" className='social mx-2' /></a>
                <a href="https://www.linkedin.com/in/buchma/"><img src={linkedIn} alt="" className='social mx-2' /></a>
            </div>
            <div className="pb-5">
                <p className="text-center mt-5 white-text fs-4 mx-3">Get to know a bit about my background and programming skills</p>
            </div>

            <div className="container">
                <div className="row pt-5 justify-content-center gx-5 mx-2">
                    <div className="col-sm-12 col-md-6 text-left pb-5">
                        <h2 className=" green-text fs-1 pb-4">My Background</h2>
                        <p className="white-text fs-4">Hey! It's Brent Buchanan, a <span className="green-text">Full Stack Web Developer</span> located in Phoenix. My professional background includes experience in building full-stack web applications with the MERN stack and in digital marketing as an SEO specialist.
                        </p>
                        <p className="white-text fs-4">I'm currently pursing work as a full stack developer, so take a look at my projects and let's get in touch!
                        </p>
                        <Link className="btn white-btn fs-4 mt-4 green-text py-2 px-4 white-bg" to={'/portfolio'}>See Portfolio</Link>

                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <h2 className="green-text fs-1 pb-4">My Skills</h2>
                        <div className="">
                            <div className="skills">
                                {Tools(5)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="fog">
                    <img src={fog3} style={{ "--i": 8 }} />
                </div> */}
            </div>
        </main>

    )
}

export default AboutMe;