import React, { useState } from 'react';
import cinema from './assets/images/cinema.png'
import drone from './assets/images/drone.png'
import photo from './assets/images/photo.png'
import social from './assets/images/social.png'
import superq from './assets/images/superq.png'
import blogger from './assets/images/blogger.png'
import './App.css'

function Portfolio() {
    return (
        <main class=" ">
            <div class="pt-5">
                <h1 class="text-center heading-underline">Portfolio</h1>
            </div>
            <div class="pb-5">
                <p class="text-center mt-5 white-text fs-4">Modern web applications with a focus on responsive design</p>
            </div>
            {/* Project Rows */}
            <div className="container">

                <div class="row ">
                    <div class="col-md-6">
                        <div class="h-100 p-5">
                            <img src={photo} alt="Photo Plan App Screenshot" class="w-100" loading="lazy" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-5 ">
                            <h2 class="green-text fs-1">Photo Planner</h2>
                            <p class="white-text fs-5">
                                <span class="green-text">Summary: </span>A web app that assists a photographer in planning for a photo shoot using Google Maps API.
                            </p>
                            <p class="white-text fs-5"> <span class="green-text">Technologies Used: </span> HTML, CSS, JavaScript, Google Maps API, Bootstrap</p>
                            <button class="btn white-btn fs-4 mt-2 green-text px-4 white-bg">Explore</button>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-6">
                        <div class="h-100 p-5">
                            <img src={drone} alt="Drone Photography App Screenshot " class="w-100" loading="lazy" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-5 ">
                            <h2 class="green-text fs-1">Arizona Drone Photography</h2>
                            <p class="white-text fs-5">
                                <span class="green-text">Summary: </span>A business site for a drone photography company. Allows scheduling with SMTP email notifications via a JS calendar connected to a MYSQL database.
                            </p>
                            <p class="white-text fs-5"> <span class="green-text">Technologies Used: </span> HTML, CSS, JavaScript, PHP, MYSQL, SMTP, Bootstrap</p>
                            <button class="btn white-btn fs-4 mt-2 green-text px-4 white-bg">Explore</button>
                        </div>
                    </div>
                </div>
                <div class="row pb-4">
                    <div class="col-md-6">
                        <div class="h-100 p-5">
                            <img src={cinema} alt="Movie Finder App Screenshot" class="w-100" loading="lazy" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-5 ">
                            <h2 class="green-text fs-1">Movie Finder</h2>
                            <p class="white-text fs-5">
                                <span class="green-text">Summary: </span>A full-stack application that helps a user find new movies to watch, as well as
                                gives he/she the opportunity to rate the movies on a scale from 1 to 10.
                            </p>
                            <p class="white-text fs-5"> <span class="green-text">Technologies Used: </span> HTML, CSS, JavaScript, Node.js,
                                Express.js, MYSQL, Sequelize, Heroku, HandleBars.js, Bcrypt, API, Animate CSS</p>
                            <button class="btn white-btn fs-4 mt-2 green-text px-4 white-bg">Explore</button>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-6">
                        <div class="h-100 p-5">
                            <img src={social} alt="Black screen with glowing circle with the words 'social api' " class="w-100" loading="lazy" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-5 ">
                            <h2 class="green-text fs-1">Social API</h2>
                            <p class="white-text fs-5">
                                <span class="green-text">Summary: </span>A MongoDB back-end for a mock social media site.
                            </p>
                            <p class="white-text fs-5"> <span class="green-text">Technologies Used: </span> JavaScript, MongoDB, Node.js</p>
                            <button class="btn white-btn fs-4 mt-2 green-text px-4 white-bg">Explore</button>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-6">
                        <div class="h-100 p-5">
                            <img src={blogger} alt="A screenshot of the a tech blog" class="w-100" loading="lazy" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-5 ">
                            <h2 class="green-text fs-1">Tech Blogger</h2>
                            <p class="white-text fs-5">
                                <span class="green-text">Summary: </span>A mock blog about technology that lets users make accounts, create posts, and comment on posts.
                            </p>
                            <p class="white-text fs-5"> <span class="green-text">Technologies Used: </span> HTML, CSS, JavaScript, MYSQL, Node.js, Bootstrap</p>
                            <button class="btn white-btn fs-4 mt-2 green-text px-4 white-bg">Explore</button>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-6">
                        <div class="h-100 p-5">
                            <img src={superq} alt="A screenshot of a product page" class="w-100" loading="lazy" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-5 ">
                            <h2 class="green-text fs-1">Super Q</h2>
                            <p class="white-text fs-5">
                                <span class="green-text">Summary: </span>A landing page for beta testers for a music app in development.
                            </p>
                            <p class="white-text fs-5"> <span class="green-text">Technologies Used: </span> HTML, CSS, JavaScript </p>
                            <button class="btn white-btn fs-4 mt-2 green-text px-4 white-bg">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Portfolio;