import React, { Component } from 'react';
import './App.css';
import Nav from './nav.jsx';
import Text from './text.jsx'; 

class App extends Component {
  render() {
    return (
      <div>
      <Nav/>
        <Text/>
       
      </div>
    );
  }
}

export default App;
