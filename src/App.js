import React, { Component } from 'react';
import './App.css';
import RestaurantContainer from './RestaurantContainer.js'
import {BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ""
    }
    //bind method for getting venuesId array from RestaurantContainer to this
    this.setVenuesIDs = this.setVenuesIDs.bind(this);
    this.setFavsIDs = this.setFavsIDs.bind(this);
  }
  onMemberStatus () {
    this.setState({
      status:true
    })
  }
  //bind the venusID's array from the dRestaurant Container to this.state
  setVenuesIDs(venueIDs) {
    this.setState({venueIDs: venueIDs});
  }
  setFavsIDs(favs)  {
    this.setState({favsIDs: favs});
  }

  render() {
    return (
      <Router>
      <div className="App">
        <NavBar onMemberLogin={this.onMemberStatus.bind(this) onLogInOK={this.setFavsIDs}/>
        <RestaurantContainer onLoggedIn={this.state.status} onRestLoad={this.setVenuesIDs}/>
      </div>
      </Router>
    );
  }
}

export default App;
