import React, {Component} from 'react';
import '../App.css';
import ProjectInfo from './ProjectInfo.js';

class Modal extends Component {

    nextClick = (e) => {
        let projectId = e.target.getAttribute('id');
        projectId++;
        if (projectId < 11) {
            this.setState({id: projectId});
        } else {
            this.setState({id: '0'});
        }
    }

    render () {
        return (
            <div className='modal'>
                <span className='close-modal'>&times;</span>
                <div className='modal-content'>
                    <div className='modal-images'>
                        <a href={this.props.projects[this.props.id].url} target="_blank" rel="noopener noreferrer">
                            <img src={this.props.projects[this.props.id].img} alt="website design"></img>
                        </a>
                    </div>
                    <ProjectInfo projects={this.props.projects} id={this.props.id}/>
                </div> 
            </div>
        );
    }
}

export default Modal;

