import React, { Component } from 'react';
import '../App.css';

const projects = [
    {
        'img': require('../images/stm.png'),
        'url': 'http://stnamai.lt/',
        'alt': 'web developement',
        'title': 'Skaitmeninės tekstilės namai',
        'content': 'I created this website for my friend who owns a digital textile business. This was my first website created from scratch. At first I created the design, then wrote code and added it to the Wordpress CMS. ',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'img': require('../images/pokalbis.png'),
        'url': '#',
        'alt': 'web developement',
        'title': 'Asmeninis pokalbis',
        'content': 'This project was a part of a job interview of a company that hired me to build some projects. The design was created by a designer. My task was to build a website with a given design.',
        'services': ['Wordpress CMS', 'Responsive Layout', 'Contact Form', 'Multilingual']
    },
    {
        'img': require('../images/vilniusMap.png'),
        'url': 'https://singail.github.io/Neighborhood-Map/',
        'alt': 'web developement',
        'title': 'Vilnius map',
        'content': 'This project is a part of the Front-End Web Developer Nanodegree Program of Udacity. My goal was to develop a single page Neighborhood Map application using React framework. The app contains the list of places to visit in my chosen area and a map of that area with marked locations.',
        'services': ['ReactJs', 'Website Design', 'Responsive Layout']
    },
    {
        'img': require('../images/gile.png'),
        'url': 'https://gile.lt',
        'alt': 'web developement',
        'title': 'Gilė',
        'content': 'This is my first website.',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout', 'SSL integration']
    },
    {
        'img': require('../images/cpto.png'),
        'url': 'https://cpto.eu',
        'alt': 'web developement',
        'title': 'Consulens baltic',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout', 'Multilingual', 'SSL integration']
    },
    {
        'img': require('../images/grindu-slifavimas.png'),
        'url': 'https://grindu-slifavimas.lt',
        'alt': 'web developement',
        'title': 'Grindų šlifavimas',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'img': require('../images/gpais.png'),
        'url': 'https://gpais.com',
        'alt': 'web developement',
        'title': 'GPAIS',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout', 'SEO', 'SSL integration', 'Popup Contact Form']
    },
    {
        'img': require('../images/kelmesasc.png'),
        'url': 'http://kelmesasc.lt',
        'alt': 'web developement',
        'title': 'Kelmės aklųjų ir silpnaregių centras',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'img': require('../images/restaurant.png'),
        'url': '#',
        'alt': 'web developement',
        'title': 'Restaurant app',
        'content': 'This project is a part of the Front-End Web Developer Nanodegree Program of Udacity. For the Restaurant Reviews project, I had to convert a static webpage to a responsive web application. To complete the task I had to make the webpage and all its contents visible at any viewport(desktop, mobile, tablet). I also made the site accessible for screen reader use and added a service worker so that all visited pages would be accessible offline.',
        'services': ['Responsive Layout', 'Accessible For Screen Reader', 'Service Worker']
    },
    {
        'img': require('../images/memoryGame.png'),
        'url': 'https://singail.github.io/fend-project-memory-game/',
        'alt': 'web developement',
        'title': 'Memory game',
        'content': 'This project is a part of the Front-End Web Developer Nanodegree Program of Udacity. As a student I received a starter code with HTML and CSS to display a static version of the Memory Game project. My goal was to add functionality and make the game interactive by using JavaScript, some HTML and CSS.',
        'services': ['Javascript', 'HTML', 'CSS', 'Responsiveness']
    },
]

class Portfolio extends Component {

    state = {
        id: '0'
    }

    handleClick = (e) => { 
        let projectId = e.target.getAttribute('id');
        this.setState({id: projectId});
    }

    render() {
        return (
            <section id="portfolio" className="portfolio">
                {projects.map((project, i) => (
                    <div className="project-image" key={i}>
                        <div className='overlay'>
                                <img src={project.img} alt={project.alt} onClick={this.handleClick} id={i}></img>
                        </div>
                    </div>
                ))}
                    <div className='modal'>
                        <span className='close-modal'>&times;</span>
                        <div className='modal-content'>
                            <div className='modal-images'>
                                <a href={projects[this.state.id].url} target="_blank" rel="noopener noreferrer">
                                    <img src={projects[this.state.id].img} alt="website design"></img>
                                </a>
                            </div>
                            <div className='about-project'>
                                <h2 className='about-project_title'>{projects[this.state.id].title}</h2>
                                <h3 className='section-title'>Short description</h3>
                                <p>{projects[this.state.id].content}</p>
                                <h3 className='section-title'>Services</h3>
                                    {projects[this.state.id].services.map((service, i) => (
                                        <div className='portfolio-services' key={i}>
                                            <i className="fas fa-check"></i>
                                            <h4>{service}</h4>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
            </section>
        );
      }
    }
    
    export default Portfolio;