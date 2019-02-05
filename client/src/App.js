import React, { Component } from 'react';
import NavbarOne from './Components/NavbarOne';
import JumbotronOne from './Components/JumbotronOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavbarOne></NavbarOne>
          <JumbotronOne></JumbotronOne>
        </header>
      </div>
    );
  }
}

export default App;
