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
        screenshots: ['https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/public/assets/img/photo%20(1).png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/public/assets/img/photo%20(2).png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/public/assets/img/photo%20(3).png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/public/assets/img/photo%20(4).png']
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
        overview: ['Arizona Drone Photography sells aerial photography and videography services. This website highlights their services and pricing, while also allowing users to schedule and pay for photo shoots', 'The calendar for scheduling is created via JavaScript and uses PHP to update the MYSQL database. Then, an email is sent to the owner via SMTP notifying him of the form submittal with the relevant contact details. Finally, the app redirects to Stripe payment pages where the users can checkout and pay for the services.'],
        screenshots: ['https://github.com/Brent-Bew-Canon/az-drone-photography/raw/main/assets/img/pricing.png', 'https://github.com/Brent-Bew-Canon/az-drone-photography/raw/main/assets/img/cart.png', 'https://github.com/Brent-Bew-Canon/az-drone-photography/raw/main/assets/img/calendar.png', 'https://github.com/Brent-Bew-Canon/az-drone-photography/raw/main/assets/img/schedule.png', 'https://github.com/Brent-Bew-Canon/az-drone-photography/raw/main/assets/img/purchase.png', 'https://github.com/Brent-Bew-Canon/az-drone-photography/raw/main/assets/img/cart-email.png']
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
        overview: ['This app let\'s the user browse from a list of movies and rate them on a scale of 1 - 10. Each user has their own profile on the app, so the movie ratings are exclusive to them.', 'Additionally, the user can also choose to save a movie to a personal list of "saved movies". For example, if the user comes across a new movie that they would like to watch in the future, they can add that movie to the list. After they have watched it, the user can then delete the movie from the list.', 'This was a collaborative project between 4 developers. My role was focused on enabling the save and delete functionality of the movies in the application. This was done by creating the MYSQL tables through Sequelize, using JavaScript to enable user interaction with the movies, and creating the correct routing through Express.js to update the database accordingly.'],
        screenshots: ['https://github.com/Brent-Bew-Canon/Cinema-Finder/raw/main/public/img/sh2.png', 'https://github.com/Brent-Bew-Canon/Cinema-Finder/raw/main/public/img/sh3.png']
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
        overview: ['This web app models the functionality of the backend of a social media site. Users can create and are linked to "thoughts", the equivalent of posts, and can post "reactions" or comments to thoughts. This is the back-end portion only and does not have a GUI.', 'This app uses MongoDB for the database. Check out the GitHub Repo for a walkthrough video of the application'],
        screenshots: []
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
        overview: ['The Tech Blogger app was made to replicate the functionality of a real working blog. Users can create profiles with their usernames and passwords hashed via Bcrypt. They can also create posts for everyone on the blog site to see', 'Each post a user creates is saved to their profile and available to edit later. Users can also comment on other posts and the post links that comment to their username and the time they commented. This app uses MYSQL and Sequelize for the database functionality'],
        screenshots: ['https://github.com/Brent-Bew-Canon/tech-blogger/raw/master/assets/tech1.png', 'https://github.com/Brent-Bew-Canon/tech-blogger/raw/master/assets/tech2.png', 'https://github.com/Brent-Bew-Canon/tech-blogger/raw/master/assets/tech3.png', 'https://github.com/Brent-Bew-Canon/tech-blogger/raw/master/assets/tech4.png', 'https://github.com/Brent-Bew-Canon/tech-blogger/raw/master/assets/tech5.png', 'https://github.com/Brent-Bew-Canon/tech-blogger/raw/master/assets/tech6.png']
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
        overview: ['SuperQ is a new music streaming app in development that allows you to make playlists of songs across different streaming services. I was contracted to create a simple landing page for them with a sign up form for beta testers.', 'I deployed this app at superqapp.com via IONOS web hosting services.'],
        screenshots: ['https://github.com/Brent-Bew-Canon/superq/blob/main/assets/img/Screenshot1.png?raw=true', 'https://github.com/Brent-Bew-Canon/superq/blob/main/assets/img/Screenshot2.png?raw=true', 'https://github.com/Brent-Bew-Canon/superq/blob/main/assets/img/Screenshot3.png?raw=true']
    },
    {
        tools: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express.js', 'React', 'Node.js', 'MYSQL', 'GIT', 'Heroku', 'Technical SEO', 'Ahrefs'],
        id: 100,
    }

]