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
        tools: ['HTML', 'CSS', 'JavaScrip', 'Google Maps API', 'Bootstrap'],
        image: photo,
        id: 1,
        subTitle: "Plan your scheduled photography job with ease!",
        liveLink: "https://brent-bew-canon.github.io/Plan-Photo-Shoot/",
        repoLink: "https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot",
        overview: ['This app is designed to assist a real estate photographer plan their daily photo shoots regarding location, which equipment to pack, how many photos they need to take, and a general idea for any obvious flight restrictions for taking drone pictures.', 'The Google Map api generates a map view of the location by geolocating the address the user provides. The map is interactive - allowing the user to zoom in or out and switch to satellite view.', 'The number of photos is calculated by evaluating the given square footage of the property. Since airports are the most common flight restriction for drone pilots, the app asks for the user\'s best guess on proximity of the nearest airport. Then, it gives you a general idea on what your maximum legal altitude might be so you can come prepared.'],
    },
    {
        name: "Arizona Drone Photography",
        description: "A business site for a drone photography company. Allows scheduling with SMTP email notifications via a JS calendar connected to a MYSQL database.",
        tech: "HTML, CSS, JavaScript, PHP, MYSQL, SMTP, Bootstrap",
        tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MYSQL', 'SMTP', 'Bootstrap'],
        image: drone,
        id: 2,
        subTitle: "Schedule aerial photography services and view past projects.",
        liveLink: "https://azdronephotography.com",
        repoLink: "https://github.com/Brent-Bew-Canon/az-drone-photography",
        overview: ['hi', 'hello'],
    },
    {
        name: "Movie Finder",
        description: "A full-stack application that helps a user find new movies to watch, as well as gives he/she the opportunity to rate the movies on a scale from 1 to 10.",
        tech: "HTML, CSS, JavaScript, Node.js, Express.js, MYSQL, Sequelize, Heroku, HandleBars.js, Bcrypt, API, Animate CSS",
        tools: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MYSQL', 'Sequelize', 'Heroku', 'HandleBars.js', 'Bcrypt', 'API', 'Animate CSS'],
        image: cinema,
        id: 3,
        subTitle: "Find new movies to watch, save them, and rate them!",
        liveLink: "https://movie-finder-bb.herokuapp.com/",
        repoLink: "https://github.com/Brent-Bew-Canon/Cinema-Finder",
        overview: ['hi', 'hello'],
    },
    {
        name: "Social API",
        description: "A MongoDB back-end for a mock social media site.",
        tech: "JavaScript, MongoDB, Node.js",
        tools: ['JavaScript', 'MongoDB', 'Node.js'],
        image: social,
        id: 4,
        subTitle: "Manage your social media site on the back-end.",
        liveLink: "#",
        repoLink: "https://github.com/Brent-Bew-Canon/social-api",
        overview: ['hi', 'hello'],
    },
    {
        name: "Tech Blogger",
        description: "A mock blog about technology that lets users make accounts, create posts, and comment on posts.",
        tech: "HTML, CSS, JavaScript, MYSQL, Node.js, Bootstrap",
        tools: ['HTML', 'CSS', 'JavaScript', 'MYSQL', 'Node.js', 'Bootstrap'],
        image: blogger,
        id: 5,
        subTitle: "Share your thoughts on this technology blog!",
        liveLink: "#",
        repoLink: "https://github.com/Brent-Bew-Canon/tech-blogger",
        overview: ['hi', 'hello'],
    },
    {
        name: "Super Q",
        description: "A landing page for beta testers for a music app in development.",
        tech: "HTML, CSS, JavaScript",
        tools: ['HTML', 'CSS', 'JavaScript'],
        image: superq,
        id: 6,
        subTitle: "Sign up to be a beta tester for this new music app!",
        liveLink: "https://www.superqapp.com",
        repoLink: "https://github.com/Brent-Bew-Canon/superq",
        overview: ['hi', 'hello'],
    },
    {
        tools: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express.js', 'React', 'Node.js', 'MYSQL', 'GIT', 'Heroku', 'Technical SEO', 'Ahrefs'],
        id: 100,
    }

]