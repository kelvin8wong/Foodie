import React, { Component } from 'react';
import RestaurantLogin from './RestaurantLogin';
import RestaurantSignup from './RestaurantSignup';
import { Modal, Button, Alert } from 'react-bootstrap';
class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      member: "",
      loginOpen: false,
      signupOpen: false,
      alertLogin: false,
      alertSignup: false
    }
  }

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
        console.log('Logged in successful:',res , loginParams.member);
        self.setState({loginOpen : false})
      } else {
        console.log('Failed logging in', res);
        this.setState({alertLogin: true})
      }
    })
    .catch((err) => {
        return console.log("Error", err)
    })
  }

  logout () {
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
        this.props.onMemberLogin();
        this.setState({member: ""});
      }
      console.log("logout status: ", res);
    })
  }

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
      //if you use ===, it doesn't work
      if (res == "1") {
        this.login({member: signupParams.member, password: signupParams.password });
      } else {
        this.setState({
          alertSignup: true
        })
      }
    })
  }

  openLogin = () => {
    this.setState({loginOpen: true})
  }
  closeLogin = () =>{
    this.setState({loginOpen: false})
  }
  openSignup = () => {
    this.setState({signupOpen: true})
  }
  closeSignup = () =>{
    this.setState({signupOpen: false})
  }
  closeAlertLogin() {
    this.setState({ alertLogin: false });
  }
  closeAlertSignup() {
    this.setState({ alertSignup: false });
  }

  render() {
    const alertLoginMessage = this.state.alertLogin ?
      <Alert bsStyle="danger" onDismiss={this.closeAlertLogin.bind(this)}>
        <h4>Invalid Username / Password</h4>
      </Alert> : <div></div>

    const alertSignupMessage = this.state.alertSignup ?
      <Alert bsStyle="danger" onDismiss={this.closeAlertSignup.bind(this)}>
        <h4> Username has been taken</h4>
      </Alert> : <div></div>

    if (this.state.member == false) {
      return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
          <a href="/"><img className="foodie-logo" src="https://image.ibb.co/cqYsnm/f6d69fa1_b1e3_4100_8067_4128339bacaa.png" alt="logo"/></a>
          <div className="login-signup">
            <Button className="btn btn-lg" onClick={this.openLogin}>Login</Button>
            <Button className="btn btn-lg" bsStyle="warning" onClick={this.openSignup}>Signup</Button>
            <Modal show={this.state.loginOpen} onHide={this.closeLogin}>
              {alertLoginMessage}
              <RestaurantLogin onLogin={this.login} />
            </Modal>
            <Modal show={this.state.signupOpen} onHide={this.closeSignup}>
              {alertSignupMessage}
              <RestaurantSignup onSignup={this.signup} />
            </Modal>
          </div>
        </nav>
      </header>
      );
    } else {
      return(
        <header>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <a href="/"><img className="foodie-logo" src="https://image.ibb.co/cqYsnm/f6d69fa1_b1e3_4100_8067_4128339bacaa.png" alt="logo"/></a>
            <div className="login-signup">
              <span className="navbar-brand">Welcome, {this.state.member}</span>
              <Button className="btn btn-lg" onClick={this.logout.bind(this)}> Logout</Button>
            </div>
          </nav>
        </header>
      );
    }
  }
}

export default NavBar
