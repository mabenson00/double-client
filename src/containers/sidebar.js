import React from 'react';
import User from './user';
import NameForm from "./nameform"

var FontAwesome = require('react-fontawesome');


class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      switch: false
    }
    this.switchUser = this.switchUser.bind(this)
    };

    switchUser() {
      this.setState({switch: !this.state.switch})
    }

    render() {
      var userNodes = this.props.users.slice(0, 100).map(function ( user ) { // can change 100 as a variable to show more
        if (user.id !== this.props.current_user){
          return ( <User
                    user={ user }
                    switch={this.state.switch}
                    switchUser = {this.switchUser}
                    changeUser = {this.props.changeUser}
                    startChat = {this.props.startChat}
                    key = {user.id}
                    current_user = {this.props.current_user} />)
        }
    }.bind(this));


      return (
      <div className="current-users">
      {this.props.current_user &&
        <div className="current-user user">
          <div className = "current-user-icon">
            <FontAwesome name='rocket' />
          </div>
          <div className="current-user-name">
            {this.props.getUserName(this.props.current_user).replace(/ .*/,'')}
          </div>
          <div onClick={this.switchUser} className="switch-user">
            Switch User
          </div>

        </div>
      }
      {this.props.current_user &&
        <div className="user-list">
          {userNodes}
        </div>
      }
        {!this.props.current_user &&
          <NameForm addUser = {this.props.addUser}
        />}
      </div>



      );

  }
}
export default Sidebar
