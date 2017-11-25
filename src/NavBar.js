import React, { Component } from 'react';
import RestaurantLogin from './RestaurantLogin';
import RestaurantSignup from './RestaurantSignup';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class NavBar extends Component {


  login = (loginParams) => {

    let urlDOM = "http://localhost:3001";
    let endPoint = "/req/auth";
    let longURL = (urlDOM + endPoint);
    let url = new URL(longURL), params = loginParams;

    // let url = new URL('/req/auth'), params = loginParams;

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    let url1 = url.toString().slice(21);
    return fetch(url1, {
      method: 'GET',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => {
        return console.log("false")
    })
    // .then((ok) => { return console.log("trueNao") })
  }

  // signup = (signupParams) => {
  //   const body = JSON.stringify(signupParams)

  //   return

  //   fetch("", {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: body
  //   })
  //   .then(res => res.json())
  //   .then(res => this.login({member: signupParams.member, password: signupParams.password }))
  // }

  render() {

    return(

  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="#">Foodie</a>
      <ul className="nav navbar-nav navbar-right">
        {/* <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>          <RestaurantLogin onLogin={this.login} />
          </li> */}
        <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>
          <RestaurantSignup onSignup={this.signup} />
        </li>
      </ul>
    </nav>
  </header>
       
    );
  }
}

export default NavBar

