import React, {Component} from 'react';
import '../App.css';

class ProjectInfo extends Component {

    render () {
        return (
            <div className='about-project'>
                <h2 className='about-project_title'>{this.props.projects[this.props.id].title}</h2>
                <h3 className='section-title'>Short description</h3>
                <p>{this.props.projects[this.props.id].content}</p>
                <h3 className='section-title'>Services</h3>
                <div className='services-block'>
                    {this.props.projects[this.props.id].services.map((service, i) => (
                        <div className='portfolio-services' key={i}>
                            <i className="fas fa-check"></i>
                            <h4>{service}</h4>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ProjectInfo;
