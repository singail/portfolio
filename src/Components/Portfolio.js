import React, { Component } from 'react';
import '../App.css';

const projects = [
    {
        'url': require('../images/stm.png'),
        'alt': 'web developement',
        'title': 'Skaitmeninės tekstilės namai',
        'content': 'I created this website for my friend who owns a digital textile business. This was my first website created from scratch. At first I created the design, then wrote code and added it to the Wordpress CMS. ',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/pokalbis.png'),
        'alt': 'web developement',
        'title': 'Asmeninis pokalbis',
        'content': 'Info',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/vilniusMap.png'),
        'alt': 'web developement',
        'title': 'Vilnius map',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/gile.png'),
        'alt': 'web developement',
        'title': 'Gilė',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/cpto.png'),
        'alt': 'web developement',
        'title': 'Consulens baltic',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/grindu-slifavimas.png'),
        'alt': 'web developement',
        'title': 'Grindų šlifavimas',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/gpais.png'),
        'alt': 'web developement',
        'title': 'GPAIS',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/kelmesasc.png'),
        'alt': 'web developement',
        'title': 'Kelmės aklųjų ir silpnaregių centras',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/restaurant.png'),
        'alt': 'web developement',
        'title': 'Restaurant app',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
    {
        'url': require('../images/memoryGame.png'),
        'alt': 'web developement',
        'title': 'Memory game',
        'content': 'Info about project',
        'services': ['Wordpress CMS', 'Website Design', 'Responsive Layout']
    },
]

class Portfolio extends Component {

    state = {
        id: '0'
    }

    handleClick = (e) => { 
        let projectId = e.target.getAttribute('id');
        console.log(projectId);
        this.setState({id: projectId});
    }

    render() {
        return (
            <section id="portfolio" className="portfolio">
                {projects.map((project, i) => (
                    <div className="project-image" key={i}>
                        <div className='overlay'>
                                <img src={project.url} alt={project.alt} onClick={this.handleClick} id={i}></img>
                        </div>
                    </div>
                ))}
                    <div className='modal'>
                        <span className='close-modal'>&times;</span>
                        <div className='modal-content'>
                            <div className='modal-images'>
                                <a href="http://stnamai.lt/" target="_blank" rel="noopener noreferrer">
                                    <img src={projects[this.state.id].url} alt="website design"></img>
                                </a>
                                <img src={projects[this.state.id].url} alt="web design"></img>
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