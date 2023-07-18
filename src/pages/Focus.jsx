import React, { useState } from 'react';
import '../App.css'
import cinema from '../assets/images/cinema.png'
import { elements } from '../components/Elements'


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
                <div className="col-8 mx-auto">
                    <img src={el.image} className="w-100" alt="" />
                </div>
            </div>
        </div>
    )
}

function ProjectMain(i) {
    return (
        <p className="white-text fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptatem fugiat non reprehenderit culpa assumenda quidem veniam, dicta, numquam qui aspernatur optio delectus explicabo veritatis dignissimos recusandae nostrum repore rerum dolor pariatur facilis deleniti!</p>
    )
}

function Tools(i) {
    return elements[i].tools.map(el =>
        <div className="skill-item white-btn cursor-cross" key={el}>{el}</div>
    )
}

function Focus() {
    return (
        <section>
            <div className="container">
                {ProjectHeader(1)}
                <div className="row">
                    <div className="col-6 mx-auto">
                        <h2 className='green-text fs-1 py-5'>Project Overview</h2>
                        {ProjectMain(1)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mx-auto">
                        <h2 className='green-text fs-1 py-5'>Tools Used </h2>
                        <div className="skills">
                            {Tools(1)}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 mx-auto">
                        <h2 className='green-text fs-1 py-5'>Links  </h2>
                        <div className=' '>
                            <a href="" className="btn green-text white-bg fs-4 px-3 py-1 me-4 white-btn">Live Link</a>
                            <a href="" className="btn green-text white-bg fs-4 px-3 py-1 white-btn">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Focus;