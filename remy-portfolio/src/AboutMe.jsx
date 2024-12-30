import React from 'react';
import ProfilePic from './assets/ProfilePic.jpg';

const AboutMe = () => {

    return (
        <div className="AboutMe">
           <h1 className="about-title">About Me</h1>
            <img className="profile-pic" src={ProfilePic} alt="Baileigh Remy" />
            <p className="bio">
                Hello! I'm Baileigh Remy, a full stack web developer with experience in HTML, CSS, Javascript, Node.js, React and more! I love problem solving and creating dynamic websites. In my freetime I enjoy learning foreign languages, travelling, reading, playing videogames and anything outdoors. 
            </p>
        </div>
    );
}

export default AboutMe;