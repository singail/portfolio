import React, { Component } from 'react';
import '../App.css';
import Modal from './Modal.js';

class Project extends Component {

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
                <Modal projects={this.props.projects}/>
            </section>
        );
    }
}
    
export default Project;