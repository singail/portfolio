import React, { Component } from 'react';
import '../App.css';

class About extends Component {
    render() {
        return (
            <section id="about-me" className="about">
            <div className="about-me">
                <img src={require("../images/profile-photo.png")} alt='web developer profile'></img>
                <div className="about-me-introduction">
                    <h2>About me</h2>
                    <p className='about-content'>
                    Hi! My name is Rimgaile. My journey as a front-end developer started in 2017, when I finished Multimedia studies in Kaunas information technology school, were I learned both graphic design and web developement.
                    </p>
                    <p className='about-content'>
                    2017 October I was accepted as a recepient of the Google Developer Challenge Scholarship and after three months of the challenge I was selected to finish a full program of Front End Web Developer Nanodegree at Udacity. It took six months of intense studying, 8 projects were both challenging and exciting. 
                    </p>
                </div>
            </div>
        </section>
        );
      }
    }
    
    export default About;