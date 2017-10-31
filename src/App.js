import React, { Component } from 'react';
import Button from './Button';
import ButtonCounter from './ButtonCounter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleClick.bind(this)
  }
  handleClick() {
    console.log('Klik egin duzu');
  }
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
        <Button onClick={this.handleClick} text='kaixoooo mundua'/>
        <p>
          Kontatzailea: ButtonCounter klasea
        </p>
        <ButtonCounter />
      </div>
    );
  }
}

export default App;
