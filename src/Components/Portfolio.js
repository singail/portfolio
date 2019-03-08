import React, { Component } from 'react';
import '../App.css';

const projects = [
    {
        'url': require('../images/stm.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/pokalbis.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/vilniusMap.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/gile.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/cpto.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/grindu-slifavimas.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/gpais.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/kelmesasc.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/restaurant.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
    {
        'url': require('../images/memoryGame.png'),
        'alt': 'web developement',
        'content': 'Info about project'
    },
]

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio" className="portfolio">
                {projects.map((project, i) => (
                    <div className="project-image" key={i}>
                        <div className='overlay'>
                                <img src={project.url} alt={project.alt}></img>
                        </div>
                    </div>
                ))}
                    <div className='modal'>
                        <span className='close-modal'>&times;</span>
                        <div className='modal-content'>
                            <div className='modal-images'>
                                <a href="http://stnamai.lt/" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../images/stm.png")} alt="website design"></img>
                                </a>
                                <img src={require("../images/stnamai.png")} alt="web design"></img>
                            </div>
                            <p>{projects[0].content}</p>
                    </div>
            </div>
            </section>
        );
      }
    }
    
    export default Portfolio;