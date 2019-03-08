import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <footer id="contacts">
                <h2>Need a website?</h2>    
                <h2>Contact me</h2>
                <div className="contact">
                    <a href="mailto:rimgaile.web@gmail.com" target="_top"><i className="fas fa-envelope-square"></i></a>
                    <a href="mailto:rimgaile.web@gmail.com" target="_top"><p>rimgaile.web@gmail.com</p></a>
                </div>
                <div className="contact">
                    <a href="tel:+370 603 04 806"><i className="fas fa-phone-square"></i></a>
                    <a href="tel:+370 603 04 806"><p>+370 603 04 806</p></a>
                </div>
                <i className="fas fa-angle-double-up"></i>
                <div className="copyright">
                    <p>2019 © Design by Rimgaile. All rights protected.</p>
                </div>
            </footer>
        );
      }
    }
    
    export default Footer;