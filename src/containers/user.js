import React from 'react';
var FontAwesome = require('react-fontawesome');

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.name
    }
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick(){
    if (this.props.switch) {
      this.props.changeUser(this.props.user.id)
      this.props.switchUser()
    } else {
      this.props.startChat([this.props.user.id, this.props.current_user])
    }
  }

    render() {


      return (
      <div
        className={this.props.switch? "user switch" : "user " +this.props.user.id}
        id={this.props.user.id}
        onClick = {this.handleClick}>
        <div className="online">
        </div>
        {this.props.user.name}
        <FontAwesome
        className='user-icon'
        name='user' />
      </div>


      );

  }
}
export default User
