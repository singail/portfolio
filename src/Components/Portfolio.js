import React, { Component } from 'react';
import '../App.css';

const projects = [
    {
        'url': require('../images/stm.png'),
        'alt': 'web developement',
        'title': 'Skaitmeninės tekstilės namai',
        'content': 'Info about project'
    },
    {
        'url': require('../images/pokalbis.png'),
        'alt': 'web developement',
        'title': 'Asmeninis pokalbis',
        'content': 'Info'
    },
    {
        'url': require('../images/vilniusMap.png'),
        'alt': 'web developement',
        'title': 'Vilnius map',
        'content': 'Info about project'
    },
    {
        'url': require('../images/gile.png'),
        'alt': 'web developement',
        'title': 'Gilė',
        'content': 'Info about project'
    },
    {
        'url': require('../images/cpto.png'),
        'alt': 'web developement',
        'title': 'Consulens baltic',
        'content': 'Info about project'
    },
    {
        'url': require('../images/grindu-slifavimas.png'),
        'alt': 'web developement',
        'title': 'Grindų šlifavimas',
        'content': 'Info about project'
    },
    {
        'url': require('../images/gpais.png'),
        'alt': 'web developement',
        'title': 'GPAIS',
        'content': 'Info about project'
    },
    {
        'url': require('../images/kelmesasc.png'),
        'alt': 'web developement',
        'title': 'Kelmės aklųjų ir silpnaregių centras',
        'content': 'Info about project'
    },
    {
        'url': require('../images/restaurant.png'),
        'alt': 'web developement',
        'title': 'Restaurant app',
        'content': 'Info about project'
    },
    {
        'url': require('../images/memoryGame.png'),
        'alt': 'web developement',
        'title': 'Memory game',
        'content': 'Info about project'
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
                            </div>
                        </div>
                    </div>
            </section>
        );
      }
    }
    
    export default Portfolio;