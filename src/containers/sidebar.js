import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';


class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    };

    render() {
      var userNodes = this.props.users.slice(0, 100).map(function ( user ) { // can change 100 as a variable to show more
      return ( <User user={ user } />)
    });


      return (
        <div className="userList">
          {userNodes}
        </div>




      );

  }
}
export default Sidebar
