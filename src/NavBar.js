import React, { Component } from 'react';
import RestaurantLogin from './RestaurantLogin';
import RestaurantSignup from './RestaurantSignup';
import {Route,Link } from 'react-router-dom'; 
class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      member: null
    }
  }

  // LOGIN HERE ***************************
  login = (loginParams) => {
    let urlDOM = "http://localhost:3001";
    let endPoint = "/req/auth";
    let longURL = (urlDOM + endPoint);
    let url = new URL(longURL), params = loginParams;
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    let url1 = url.toString().slice(21);
    return fetch(url1, {
      method: 'GET',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      credentials: 'include'
    })
    .then((res) => res.json())
    .then((res) => {
      if (res === "1") {
           this.setState({member: loginParams.member});
           console.log(res);
      } else {
          console.log(res);
      }
    })
    .catch((err) => {
        return console.log("false")
    })
  }
  //signout
  signout () {
    this.setState({
      member: null
    })
  }
  // SingUp **********************************
  signup = (signupParams) => {
    let endPoint = "/req/membAdd";
    let params = JSON.stringify(signupParams);
    return fetch(endPoint, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: params
    })
    .then(res => res.json())
    .then((res) => {
      if (res === "0") {
        // Going to Login ****************************
        this.login({member: signupParams.member, password: signupParams.password });
      } else {
        console.log("This username has already been registered. Please choose another.");
      }
    })
  }

  render() {
    if (this.state.member===null) {
      return 
      <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">Foodie</a>
        <Link to="/login">Login</Link>
        <Link to='/signup'>Sign-up</Link>
        <Route path="/login" render={(props) => <RestaurantLogin onLogin={this.login} {...props}/>}/>
        <Route path="/signup" render={(props) => <RestaurantSignup onSignup={this.signup} {...props}/>}/>
        </nav>
      </header>

    } else {
      return(
        <header>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">Foodie</a>
            <button onClick={this.signout.bind(this)}> Logout</button>
          </nav>
        </header>
      );
    }
  }
}

export default NavBar

