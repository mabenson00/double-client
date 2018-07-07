import React from 'react';
import ReactDOM from 'react-dom';
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
        {this.props.user.name}
      </div>


      );

  }
}
export default User
