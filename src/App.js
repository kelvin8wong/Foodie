import React, { Component } from 'react';
import './App.css';
import RestaurantContainer from './RestaurantContainer.js'
import {BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <RestaurantContainer />
      </div>
      </Router>
    );
  }
}

export default App;
