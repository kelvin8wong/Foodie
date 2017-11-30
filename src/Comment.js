import React from 'react'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentField: ''
    }
  }

  submitComment = (event) => {
    event.preventDefault()
    this.props.updateComment(this.state.commentField)
    this.setState({
      commentField:''
    })
  }

  onCommentField = (event) => {
    this.setState({
      commentField: event.target.value
    })
  }

  render() {
    return (
      <div className="px-4 py-3">
        <div className="col-lg-12">
          <div className="-title"><h3>Leave a comment here!</h3></div>
          <form id="comment-form" onSubmit={this.submitComment} >
            <div className="form-group">
              <input className ="form-control"type="text" onChange={this.onCommentField} value={this.state.commentField}/>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-6 col-xs-offset-3">
                  <input type="submit" name="comment-submit" className="form-control btn btn-info" value="Submit"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Comment