import React from 'react';
import Chat from './chat.js'
import $ from 'jquery'
class Chats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  };

    render() {

        var chatNodes = this.props.chats.slice(0, 5).map(function ( user ) {
          if (user.id !== this.props.current_user & $.inArray( this.props.current_user, user) !== -1){
            return ( <Chat
              current_user = {this.props.current_user}
              users = {user}
              getUserName = {this.props.getUserName}
              open = {this.props.chats[this.props.chats.length-1]=== user? true : false}
              key = {user.join('')} />)
          }
      }.bind(this));

      return (
        <div className = "footer-chats">
          {chatNodes}
        </div>




      );

  }
}
export default Chats
