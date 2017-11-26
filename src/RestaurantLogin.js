import React from 'react'

class RestaurantLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const loginParams = { member: this.state.member, password: this.state.password}
    this.props.onLogin(loginParams)

    this.setState({
      username: "",
      password:""
    })
  }


  onUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  onPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  render() {

      return (
        
        <div className="login-container">
          <form onSubmit={this.handleSubmit} className="field is-grouped is-grouped-centered">
            <div className="control">
            <input className="input is-primary" type="text" placeholder="Username" onChange={this.onUsername} value={this.state.username}/>
            </div>
            <div className="control">
            <input  className="input is-primary" type="password" placeholder="password" onChange={this.onPassword} value={this.state.password}/>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"></input>
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      )
    }

}

export default RestaurantLogin
