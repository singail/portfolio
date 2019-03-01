import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu.js';
import FrontPage from './Components/FrontPage.js';
import './script.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu />
      <FrontPage />
      </div>
    );
  }
}

export default App;
