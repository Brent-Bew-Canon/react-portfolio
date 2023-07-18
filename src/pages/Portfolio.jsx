import React, { useState } from 'react';
import { elements } from '../components/Elements'
import '../App.css'

function ProjectCard() {
    return elements.map(el =>
        <div className="row " key={el.name}>
            <div className="col-md-6">
                <div className="h-100 p-5">
                    <img src={el.image} alt="Photo Plan App Screenshot" className="w-100" loading="lazy" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="p-5 ">
                    <h2 className="green-text fs-1">{el.name}</h2>
                    <p className="white-text fs-5">
                        <span className="green-text">Summary: </span>{el.description}
                    </p>
                    <p className="white-text fs-5"> <span className="green-text">Technologies Used: </span> {el.tech}</p>
                    <button className="btn white-btn fs-4 mt-2 green-text px-4 white-bg">Explore</button>
                </div>
            </div>
        </div>)
}



function Portfolio() {
    return (
        <main className=" ">
            <div className="pt-5">
                <h1 className="text-center heading-underline">Portfolio</h1>
            </div>
            <div className="pb-5">
                <p className="text-center mt-5 white-text fs-4">Modern web applications with a focus on responsive design</p>
            </div>
            {/* Project Rows */}
            <div className="container">
                {ProjectCard()}
            </div>
        </main >
    )
}

export default Portfolio;