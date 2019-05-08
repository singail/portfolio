import React, { Component } from 'react';
import '../App.css';

class Project extends Component {

    state = {
        id: 0
    }

    handleClick = (e) => { 
        let projectId = e.target.getAttribute('id');
        this.setState({id: projectId});
    }

    nextClick = (e) => {
        let projectId = e.target.getAttribute('id');
        projectId++;
        if (projectId < 11) {
            this.setState({id: projectId});
        } else {
            this.setState({id: '0'});
        }
    }

    render() {
            return (
                <section id="portfolio" className="portfolio">
                    {this.props.projects.map((project, i) => (
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
                        <a href={this.props.projects[this.state.id].url} target="_blank" rel="noopener noreferrer">
                            <img src={this.props.projects[this.state.id].img} alt="website design"></img>
                        </a>
                    </div>
                    <div className='about-project'>
                        <h2 className='about-project_title'>{this.props.projects[this.state.id].title}</h2>
                        <h3 className='section-title'>Short description</h3>
                        <p>{this.props.projects[this.state.id].content}</p>
                        <h3 className='section-title'>Services</h3>
                            <div className='services-block'>
                            {this.props.projects[this.state.id].services.map((service, i) => (
                                <div className='portfolio-services' key={i}>
                                    <i className="fas fa-check"></i>
                                    <h4>{service}</h4>
                                </div>
                            ))}
                            </div>
                    </div>
                </div>
                <div className='next-project'>
                    <i className="fas fa-angle-right" tabIndex="0" onClick={this.nextClick} id={this.state.id}></i>
                </div>
            </div>
                </section>  
            );
    }
}
    
export default Project;