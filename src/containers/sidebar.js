import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';
import NameForm from "./nameform"

var FontAwesome = require('react-fontawesome');


class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    };

    render() {
      var userNodes = this.props.users.slice(0, 100).map(function ( user ) { // can change 100 as a variable to show more
      return ( <User user={ user } />)
    });


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

        </div>
      }
        <div className="user-list">
          {userNodes}
        </div>
        {!this.props.current_user &&
          <NameForm addUser = {this.props.addUser}
        />}
      </div>



      );

  }
}
export default Sidebar
