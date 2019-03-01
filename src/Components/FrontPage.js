import React, { Component } from 'react';
import '../App.css';

class FrontPage extends Component {
    render() {
        return (
            <section className="front-page" style={{backgroundImage: 'url(' + require('../images/bg2.png') + ')'}}>
                <div className="front-page-inner">
                    <div className="intro">
                        <h1>FRONT END WEB DEVELOPER & DESIGNER</h1>
                        <p>I design and code simple and beautiful websites.</p>
                        <div className="view-portfolio">
                            <img className="desktop" src={require('../images/code.gif')} alt="web-design"></img>
                            <a href="#portfolio">
                                <div className='link-to-portfolio'>
                                    <button type="button" className='view-portfolio__button'><span className='button-text'>View portfolio</span><i className="fas fa-angle-double-down button-overlay"></i></button>   
                                </div>
                            </a> 
                        </div>
                    </div>
                </div>
            </section>
        );
      }
    }
    
    export default FrontPage;