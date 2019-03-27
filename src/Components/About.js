import React, { Component } from 'react';
import '../App.css';

class About extends Component {
    render() {
        return (
            <section id="about-me" className="about" style={{backgroundImage: 'url(' + require('../images/bg3.png') + ')'}}>
            <div className="about-me">
                <img src={require("../images/profile-photo.png")} alt='web developer profile'></img>
                <div className="about-me-introduction">
                    <h2>About me</h2>
                    <p className='about-content'>
                    Hi! My name is Rimgaile. My journey as a front-end developer started in 2017, when I finished Multimedia studies in Kaunas information technology school, were I learned both graphic design and web developement.
                    </p>
                    <p className='about-content'>
                    2017 October I was accepted as a recepient of the <strong>Google Developer Challenge Scholarship</strong> and after three months of the challenge I was selected to finish a full program of <strong>Front End Web Developer Nanodegree at Udacity</strong>. It took six months of intense studying, 8 projects were both challenging and exciting. Some of my projects are presented on my portfolio site. 
                    </p>
                    <p className='about-content'>Most of my websites are build with <strong>Wordpress CMS</strong> (Content Management System). Wordpress is the most popular CMS that allows users to easily create, publish, edit and organize content. I help my clients to learn and use Wordpress.</p>
                    <p className='about-content'>This website is build with <strong>React</strong> - a Javascript library for building user interfaces. </p>
                </div>
            </div>
        </section>
        );
      }
    }
    
    export default About;