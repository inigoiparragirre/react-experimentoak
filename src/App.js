import React, { Component } from 'react';
import Button from './Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ongi etorri React mundura!</h1>
        </header>
        <p className="App-intro">
          Hasteko, editatu <code>src/App.js</code> eta gorde birkargatzeko.
        </p>
        <Button text='kaixo mundua'/>
      </div>
    );
  }
}

export default App;
