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

    const signupParams = { member: this.state.member,
                           nameFirst: this.state.nameFirst,
                          nameLast: this.state.nameLast,
                          email: this.state.email,
                          password: this.state.password}
    this.props.onSignup(signupParams)
    this.setState({
      member:    "",
      nameFirst: "",
      nameLast:  "",
      email:     "",
      password:  ""
    })
  }

  onMember = (event) => {
    this.setState({
      member: event.target.value
    })
  }

  onFirstName = (event) => {
    this.setState({
      nameFirst: event.target.value
    })
  }

  onLastName = (event) => {
    this.setState({
      nameLast: event.target.value
    })
  }

  onEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div className="px-4 py-3">
        <div className="col-lg-12">
          <div className="signup-title"><h3>Signup Here</h3></div>
          <form id="ajax-register-form" onSubmit={this.ModSubmit} >
            <div className="form-group">
              <input className ="form-control"type="text" placeholder="Username" onChange={this.onMember} value={this.state.member}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="First Name" onChange={this.onFirstName} value={this.state.nameFirst}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Last Name" onChange={this.onLastName} value={this.state.nameLast}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="email" placeholder="Email" onChange={this.onEmail} value={this.state.email}/>
            </div>
            <div className="form-group">
              <input  className="form-control" type="password" placeholder="Password" onChange={this.onPassword} value={this.state.password}/>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-6 col-xs-offset-3">
                  <input type="submit" name="register-submit" id="register-submit" className="form-control btn btn-info" value="Sign up"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RestaurantSignup


