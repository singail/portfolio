import React, { Component } from 'react';
import '../App.css';

class Menu extends Component {
    render() {
        return (
            <nav className='menu'>
                <div className="menu-bar" title="Menu">
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </div>
                <ul className='menu-list'>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
        );
      }
    }
    
    export default Menu;