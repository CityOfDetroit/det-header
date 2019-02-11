import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo.js';
import Search from './Search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to opposite.
          </p>
          <Logo title="mikes button" type="primary"/>
          <Search/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
