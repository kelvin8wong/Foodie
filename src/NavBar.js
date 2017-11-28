import React, { Component } from 'react';
import RestaurantLogin from './RestaurantLogin';
import RestaurantSignup from './RestaurantSignup';
import Modal from 'react-modal';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      member: "",
      loginOpen: false
    }
  }

  // LOGIN HERE ***************************
  login = (loginParams) => {
    const self = this
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
      if (res == "1") {
           self.setState({member: loginParams.member});
           self.props.onMemberLogin(this.state.member);
           console.log('logged in successful:',res , loginParams.member);
           self.setState({loginOpen : false})
      } else {
          console.log(res);
      }
    })
    .catch((err) => {
        return console.log("false")
    })
  }

  //signout **********************************
  signout () {
    let endPoint = "/req/logout";
    return fetch(endPoint, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then((res) => {
      if (res == "1") {
        this.setState({member: ""});
      }
      console.log("logout status: ", res);
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
      if (res == "1") {
        // Going to Login **********************************
        this.login({member: signupParams.member, password: signupParams.password });
      } else {
        console.log("This username has already been registered. Please choose another.");
      }
    })
  }

  openLogin = () => {
    this.setState({loginOpen: true})
  }

  render() {
    if (this.state.member=== '') {
      return (
      <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">Foodie</a>
        <a href="javascript:;" onClick={this.openLogin}>Login</a>
        <a href="javascript:;" onClick={this.openSignup}>Signup</a>
        <Modal isOpen={this.state.loginOpen}>
          <RestaurantLogin onLogin={this.login} />
          <RestaurantSignup onSignup={this.signup} />
        </Modal>
        </nav>
      </header>
      );
    } else {
      return(
        <header>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">Foodie</a>
            <a className="navbar-brand" href="#">{this.state.member}</a>
            <button onClick={this.signout.bind(this)}> Logout</button>
          </nav>
        </header>
      );
    }
  }
}

export default NavBar

