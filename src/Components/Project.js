import React, { Component } from 'react';
import '../App.css';
import Modal from './Modal.js';

class Project extends Component {

    state = {
        id: 0
    }

    handleClick = (e) => { 
        let projectId = e.target.getAttribute('id');
        this.setState({id: projectId});
    }

    render() {
            return (
                <section id="portfolio" className="portfolio">
                    {this.props.projects.map((project, i) => (
                        <div className="project-image" key={i}>
                            <div className='overlay'>
                                <i className="fas fa-search-plus" onClick={this.handleClick} id={i}></i>
                                <img src={project.img} alt={project.alt} onClick={this.handleClick} id={i}></img>
                            </div>
                        </div>
                    ))}
                    <Modal projects={this.props.projects} id={this.state.id}/>
                </section>  
            );
    }
}
    
export default Project;