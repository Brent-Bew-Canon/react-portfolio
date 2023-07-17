import React, { useState } from 'react';
import resume from './assets/images/resume.pdf'
import './App.css'

function Resume() {
    return (
        <main class=" ">
            <div class="pt-5">
                <h1 class="text-center heading-underline">Resume</h1>
            </div>
            <div class="pb-5">
                <p class="text-center mt-5 white-text fs-4">let's get in touch about your company or next project</p>
            </div>
            <div className="container">
                <div class="row ">
                    <div class="col-md-12">
                        <div class="p-5">
                            <iframe src="https://drive.google.com/file/d/1tCMGeLqNHuZMqFVH6LfL5v9lw5Y0iMQ7/preview" class="resume" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Resume;