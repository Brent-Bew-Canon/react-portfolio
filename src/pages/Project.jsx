import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css'
import { elements } from '../components/Elements'
import Tools from '../components/Tools'


function ProjectHeader(i) {
    let el = elements[i]
    return (
        <div>
            <div className="row">
                <div className="pt-5">
                    <h1 className="text-center heading-underline">{el.name}</h1>
                </div>
                <div className="pb-5">
                    <p className="text-center mt-5 white-text fs-4">{el.subTitle}</p>
                    <div className='text-center '>
                        <a href={el.liveLink} className="btn green-text white-bg fs-4 px-3 py-1 m-3 white-btn">Live Link</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto">
                    <img src={el.image} className="w-100" alt="" />
                </div>
            </div>
        </div>
    )
}

function ProjectMain(i) {
    return elements[i].overview.map(el =>
        <p className="white-text fs-4 pb-4" key={el}>{el}</p>
    )
}

function Screenshots(i) {
    return elements[i].screenshots.map(el =>
        <img src={el} className="w-100 py-5 rounded" alt="" />)
}

function Links(i) {
    let el = elements[i]
    return (
        <div className=''>
            <a href={el.liveLink} className="btn green-text white-bg fs-4 px-3 py-1 me-4 white-btn mb-4">Live Link</a>
            <a href={el.repoLink} className="btn green-text white-bg fs-4 px-3 py-1 white-btn mb-4">GitHub Repo</a>
        </div>
    )
}

function Project() {
    let { state } = useLocation();
    const projId = state.id;

    return (
        <section>
            <div className="container">
                {ProjectHeader(projId)}
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h2 className='green-text fs-1 py-5'>Project Overview</h2>
                        {ProjectMain(projId)}
                        <h2 className='green-text fs-1 py-5'>Screenshots</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className=''>
                            {Screenshots(projId)}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h2 className='green-text fs-1 py-5'>Tools Used</h2>
                        <div className="skills">
                            {Tools(projId)}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h2 className='green-text fs-1 py-5'>Links</h2>
                        {Links(projId)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;