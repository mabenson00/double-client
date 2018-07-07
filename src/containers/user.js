import React from 'react';
import ReactDOM from 'react-dom';
var FontAwesome = require('react-fontawesome');

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.name
    }
  };

    render() {


      return (
      <div className="user">
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
