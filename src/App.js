import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu.js';
import FrontPage from './Components/FrontPage.js';
import Portfolio from './Components/Portfolio.js';
import About from './Components/About.js';
import Footer from './Components/Footer.js';
import './script.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <FrontPage />
        <div className='bg-overlay'></div>
        <Portfolio />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
