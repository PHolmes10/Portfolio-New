import React, { Component } from 'react';
import NavbarOne from './Components/NavbarOne';
import JumbotronOne from './Components/JumbotronOne';
import CardOne from './Components/CardOne'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavbarOne></NavbarOne>
          <JumbotronOne></JumbotronOne>
          <h3>Projects</h3>
          <div className='grid'>
          <CardOne className='grid-item'></CardOne>
          <CardOne></CardOne>
          <CardOne></CardOne>
          <CardOne></CardOne>
          <CardOne></CardOne>
          <CardOne></CardOne>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
