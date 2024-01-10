import React from "react";
import profilepic from "./images/profilepic.jpeg"

const About = ()=>{
    return(
        <div className="container">
            <h1>About Us</h1>
            <img src={profilepic} alt="pic" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing el
            sed do eiusmod tempor incididunt ut labore et dolore magna al
            iqua. Ut enim ad minim veniam, quis nostrud exercitation u
            llamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
            <hr />
        </div>
    );
}

export default About; 