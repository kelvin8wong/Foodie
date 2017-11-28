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


  onUsername = (event) => {
    this.setState({
      member: event.target.value
    })
  }


  onPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  render() {

      return (
        <div>
          <div className="login-title">Login Here</div>
          <form onSubmit={this.handleSubmit} className="px-4 py-3">
            <div className="form-group">
            <input className="form-control" type="text" placeholder="Username" onChange={this.onUsername} value={this.state.member}/>
            </div>
            <div className="form-group">
            <input  className="form-control" type="password" placeholder="password" onChange={this.onPassword} value={this.state.password}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <div><a className href="/signup">New around here? Sign up</a></div>
          </form>
        </div>
      )
    }

}

export default RestaurantLogin
