import React from 'react'

class RestaurantSignup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      member:    "",
      nameFirst: "",
      nameLast:  "",
      email:     "",
      password:  ""
    }
  }

  ModSubmit = (event) => {
    event.preventDefault()

    const signupParams = { member: this.state.member, password: this.state.password}
    this.props.onSignup(signupParams)
    this.setState({
      member:    "",
      nameFirst: "",
      nameLast:  "",
      email:     "",
      password:  ""
    })
  }

  Modmember = (event) => {
    this.setState({
      member: event.target.value
    })
  }

  ModnameFirst = (event) => {
    this.setState({
      nameFirst: event.target.value
    })
  }

  ModnameLast = (event) => {
    this.setState({
      nameLast: event.target.value
    })
  }

  Modemail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  Modpassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  render() {
      return (
        <div className="container">
        <h1>Signup Here</h1>
        <form onSubmit={this.ModSubmit} className="field is-grouped is-grouped-centered">
          <div className="control">
          <input className="input is-primary" type="text" placeholder="Member name" onChange={this.Modmember} value={this.state.member}/>
          </div>
          <div className="control">
          <input className="input is-primary" type="text" placeholder="First name" onChange={this.ModnameFirst} value={this.state.nameFirst}/>
          </div>
          <div className="control">
          <input className="input is-primary" type="text" placeholder="Last name" onChange={this.ModnameLast} value={this.state.nameLast}/>
          </div>
          <div className="control">
          <input className="input is-primary" type="email" placeholder="email" onChange={this.Modemail} value={this.state.email}/>
          </div>
          <div className="control">
          <input  className="input is-primary" type="password" placeholder="password" onChange={this.Modpassword} value={this.state.password}/>
          </div>
          <div className="control">
          <input className="button is-primary is-inverted is-outlined" type="submit" value="Submit"/>
          </div>
        </form>
        <br/>
        </div>
      )
  }

}

export default RestaurantSignup