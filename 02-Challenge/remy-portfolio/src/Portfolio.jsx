import React from 'react';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';


const Portfolio = () => {
    const projectList = [
        {
            title: "Weather Dashboard",
            description: "Provides current weather and 5 day forecast based on city searched.",
            deployedLink: "https://weather-dashboard-6mqh.onrender.com/",
            githubLink: "https://github.com/BaileighRemy/Weather-Dashboard.git",
            image: image1 
        },
        {
            title: "Vehicle Builder",
            description: "Node.js application that allows users to build a vehicle.",
            deployedLink: "https://app.screencastify.com/v3/watch/mCOiz9Mmt6ilAfiXuzYA",
            githubLink: "https://github.com/BaileighRemy/Vehicle_Builder",
            image: image2
        },
        {
            title: "Survey Form",
            description: "Survey Form for a Coding Bootcamp",
            deployedLink: "https://baileighremy.github.io/survey-form/homepage.html",
            githubLink: "https://github.com/BaileighRemy/survey-form.git",
            image: image3
        },
        {
            title: "README Generator",
            description: "Node.js application that generates a README file based on user input.",
            deployedLink: "https://watch.screencastify.com/v/ltq9Xd92PbJeduWor50O",
            githubLink: "https://github.com/BaileighRemy/README-Generator/tree/main/Develop",
            image: image4
        },
        {
            title: "Prework Study Guide",
            description: "Study guide for basics of HTML, CSS, Git, and Javascript.",
            deployedLink: "https://baileighremy.github.io/prework-study-guide/",
            githubLink: "https://github.com/BaileighRemy/prework-study-guide",
            image: image5
        },
        {
            title: "Employee Tracker",
            description: "Node.js application that tracks employees, roles, and departments.",
            deployedLink: "https://github.com/BaileighRemy/Employee-Tracker/tree/main/02-Challenge",
            githubLink: "https://github.com/BaileighRemy/Employee-Tracker/tree/main/02-Challenge",
            image: image6
        },
        
        
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;