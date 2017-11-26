import React from 'react'

class RestaurantLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      member: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const loginParams = { member: this.state.member, password: this.state.password}
    this.props.onLogin(loginParams)

    this.setState({
      member: "",
      password:""
    })
  }


  Modmember = (event) => {
    this.setState({
      member: event.target.value
    })
  }


  Modpassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  render() {

      return (

        <div className="dropdown-menu" style={{ display: "block"}}>
          <form className="px-4 py-3">
            <div className="form-group">
              <label for="exampleDropdownFormUsername1">Username</label>
              <input type="text" className="form-control" id="exampleDropdownFormUsername1" placeholder="Username"></input>
            </div>
            <div className="form-group">
              <label for="exampleDropdownFormPassword1">Password</label>
              <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"></input>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"></input>
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">New around here? Sign up</a>
          <a className="dropdown-item" href="#">Forgot password?</a>
        </div>
      )
    }

}

export default RestaurantLogin
