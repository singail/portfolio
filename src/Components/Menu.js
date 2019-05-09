import React, { Component } from 'react';
import '../App.css';

const menuList = [
    {
        'href': '#portfolio',
        'title': 'Portfolio',
    },
    {
        'href': '#about-me',
        'title': 'About me',
    },
    {
        'href': '#contacts',
        'title': 'Contacts',
    }
]

class Menu extends Component {

    render() {
        return (
            <nav className='menu'>
                <div className='menu-bar' title="Menu">
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </div>
                <ul className='menu-list'>
                    {menuList.map((menuItem, i) => (
                        <li key={i}><a href={menuItem.href}> {menuItem.title} </a></li>
                    ))}
                </ul>
            </nav>
        );
      }
    }
    
    export default Menu;