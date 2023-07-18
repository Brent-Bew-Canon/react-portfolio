import cinema from '../assets/images/cinema.png'
import drone from '../assets/images/drone.png'
import photo from '../assets/images/photo.png'
import social from '../assets/images/social.png'
import superq from '../assets/images/superq.png'
import blogger from '../assets/images/blogger.png'


export const elements = [
    {
        name: "Photo Planner",
        description: "A web app that assists a photographer in planning for a photo shoot using Google Maps API.",
        tech: "HTML, CSS, JavaScript, Google Maps API, Bootstrap",
        image: photo,
        id: 1
    },
    {
        name: "Arizona Drone Photography",
        description: "A business site for a drone photography company. Allows scheduling with SMTP email notifications via a JS calendar connected to a MYSQL database.",
        tech: "HTML, CSS, JavaScript, PHP, MYSQL, SMTP, Bootstrap",
        image: drone,
        id: 2
    },
    {
        name: "Movie Finder",
        description: "A full-stack application that helps a user find new movies to watch, as well as gives he/she the opportunity to rate the movies on a scale from 1 to 10.",
        tech: "HTML, CSS, JavaScript, Node.js, Express.js, MYSQL, Sequelize, Heroku, HandleBars.js, Bcrypt, API, Animate CSS",
        image: cinema,
        id: 3
    },
    {
        name: "Social API",
        description: "A MongoDB back-end for a mock social media site.",
        tech: "JavaScript, MongoDB, Node.js",
        image: social,
        id: 4
    },
    {
        name: "Tech Blogger",
        description: "A mock blog about technology that lets users make accounts, create posts, and comment on posts.",
        tech: "HTML, CSS, JavaScript, MYSQL, Node.js, Bootstrap",
        image: blogger,
        id: 5
    },
    {
        name: "Super Q",
        description: "A landing page for beta testers for a music app in development.",
        tech: "HTML, CSS, JavaScript",
        image: superq,
        id: 6
    }

]