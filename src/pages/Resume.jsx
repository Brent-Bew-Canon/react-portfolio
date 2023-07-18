import React, { useState } from 'react';
import resume from '../assets/images/resume.pdf'
import '../App.css'

function Resume() {
    return (
        <main className=" ">
            <div className="pt-5">
                <h1 className="text-center heading-underline">Resume</h1>
            </div>
            <div className="pb-5">
                <p className="text-center mt-5 white-text fs-4">let's get in touch about your company or next project</p>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-12">
                        <div className="p-5">
                            <iframe src="https://drive.google.com/file/d/1tCMGeLqNHuZMqFVH6LfL5v9lw5Y0iMQ7/preview#fit=Fit" className="resume" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Resume;