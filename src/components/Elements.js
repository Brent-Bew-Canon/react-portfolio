import cinema from '../assets/images/cinema.png'
import drone from '../assets/images/drone.png'
import photo from '../assets/images/photo.png'
import superq from '../assets/images/superq.png'
import gym from '../assets/images/gymGenius.png'



export const elements = [
    {
        name: "Photo Planner",
        description: "A full stack MERN web app that assists a photographer in planning for a photo shoot using TomTom Maps API.",
        tech: "HTML, CSS, JavaScript, MongoDB, Express.js, React.js, Node.js, TomTom Maps API, Bootstrap",
        tools: ['HTML', 'CSS', 'JavaScript', 'MongoDb', 'Express.js', 'React.js', 'Node.js', 'TomTom Maps API', 'Bootstrap'],
        image: photo,
        id: 1,
        subTitle: "Plan your scheduled photography job with ease!",
        liveLink: "https://photoplanner.netlify.app/",
        repoLink: "https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot",
        overview: ['This web application helps a real estate photographer plan his/her photo shoot when they get a new job. It utilizes the TomTom API to generate a map based on the inputted address. It then tells the user how many photos to take based on square footage and a ballpark estimate on any flight restrictions for possible drone photos based on proximity to airports.', 'Users can create profiles with a login password and create jobs that are saved to their profile. They can view these jobs via the "My Jobs" page.', 'This web app is built on the MERN stack, and I currently have the server and client hosted separately. The database structure is built with Mongoose and MongoDB. I used React Router to navigate through the different pages on the front end.', 'Future features soon to be added are ability to delete jobs, ability to modify job details, ability to upload photos via AWS S3 bucket, and ability to share viewable links to jobs with uploaded photos to potential clients.'],
        screenshots: ['https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/client/public/assets/img/photo%20(1).png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/client/public/assets/img/photo%20(2).png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/client/public/assets/img/photo%20(3).png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/client/public/assets/img/photo%20(4).png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/client/public/assets/img/profile.png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/client/public/assets/img/myjobs.png', 'https://github.com/Brent-Bew-Canon/Plan-Photo-Shoot/raw/master/client/public/assets/img/createjob.png']
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
        name: "Gym Genius",
        description: "A workout planning app that allows users to create and save workouts, and then view them for help in exercise planning.",
        tech: "HTML, CSS, JavaScript, Node.js, Express.js, React.js, MongoDB, GraphQL, AWS S3, Heroku, JWT, API",
        tools: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'GraphQL', 'AWS S3', 'Heroku', 'JWT', 'API'],
        image: gym,
        id: 3,
        subTitle: "Discover new ways to exercise and make your own workouts!",
        liveLink: "https://gym-genius-9546c612d270.herokuapp.com/",
        repoLink: "https://github.com/jonathanjjolsen/gym-genius",
        overview: ['Gym Genius is an application that allows users to create workouts to plan their exercise routine. Using our vast array of different exercises, the user can choose from different categories to target specific muscle groups. This website aims to provide a modular experience for anyone looking to further their workout goals.', 'This web app is built using the MERN stack. It utilizes GraphQL queries and mutations to manipulate the user data. User profile information is protected and authenticated via JWT encoding. The front-end is built using the Create React App framework.', 'While Most of the data is stored via MongoDB Atlas, the avatar profile images are stored and referenced in an Amazon Web Services S3 bucket. As users change their profile picture, the old picture is deleted and the new one is saved using the unique user email as the file name.'],
        screenshots: ['https://github.com/jonathanjjolsen/gym-genius/raw/main/client/public/Screenshots/gymGenius1.png', 'https://github.com/jonathanjjolsen/gym-genius/raw/main/client/public/Screenshots/gymGenius4.png', 'https://github.com/jonathanjjolsen/gym-genius/blob/main/client/public/Screenshots/gymGenius5.png', 'https://github.com/jonathanjjolsen/gym-genius/blob/main/client/public/Screenshots/gymGenius6.png', 'https://github.com/jonathanjjolsen/gym-genius/raw/main/client/public/Screenshots/gymGenius5.png', 'https://github.com/jonathanjjolsen/gym-genius/raw/main/client/public/Screenshots/gymGenius7.png', 'https://github.com/jonathanjjolsen/gym-genius/raw/main/client/public/Screenshots/GymGenius8.png']
    },
    {
        name: "Movie Finder",
        description: "A full-stack application that helps a user find new movies to watch, as well as gives he/she the opportunity to rate the movies on a scale from 1 to 10.",
        tech: "HTML, CSS, JavaScript, Node.js, Express.js, MYSQL, Sequelize, Heroku, HandleBars.js, Bcrypt, API, Animate CSS",
        tools: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MYSQL', 'Sequelize', 'Heroku', 'HandleBars.js', 'Bcrypt', 'API', 'Animate CSS'],
        image: cinema,
        id: 4,
        subTitle: "Find new movies to watch, save them, and rate them!",
        liveLink: "https://movie-finder-bb.herokuapp.com/",
        repoLink: "https://github.com/Brent-Bew-Canon/Cinema-Finder",
        overview: ['This app let\'s the user browse from a list of movies and rate them on a scale of 1 - 10. Each user has their own profile on the app, so the movie ratings are exclusive to them.', 'Additionally, the user can also choose to save a movie to a personal list of "saved movies". For example, if the user comes across a new movie that they would like to watch in the future, they can add that movie to the list. After they have watched it, the user can then delete the movie from the list.', 'This was a collaborative project between 4 developers. My role was focused on enabling the save and delete functionality of the movies in the application. This was done by creating the MYSQL tables through Sequelize, using JavaScript to enable user interaction with the movies, and creating the correct routing through Express.js to update the database accordingly.'],
        screenshots: ['https://github.com/Brent-Bew-Canon/Cinema-Finder/raw/main/public/img/sh2.png', 'https://github.com/Brent-Bew-Canon/Cinema-Finder/raw/main/public/img/sh3.png']
    },
    {
        name: "Super Q",
        description: "A landing page for beta testers for a music app in development.",
        tech: "HTML, CSS, JavaScript",
        tools: ['HTML', 'CSS', 'JavaScript'],
        image: superq,
        id: 5,
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