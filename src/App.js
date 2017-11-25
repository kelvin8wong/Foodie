import React, { Component } from 'react';
import './App.css';
import RestaurantContainer from './RestaurantContainer.js'
import {BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <RestaurantContainer />
      </div>
      </Router>
    );
  }
}

export default App;
