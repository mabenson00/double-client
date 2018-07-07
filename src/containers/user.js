import React from 'react';
import ReactDOM from 'react-dom';
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
    this.props.changeUser(this.props.user.id)
    this.props.switchUser()
  }

    render() {


      return (
      <div
        className={this.props.switch? "user switch" : "user"}
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
