import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: this.props.users,
      messages: [],
      open: this.props.open === true? true : false,
      message: ""
    }

    this.handleClick = this.handleClick.bind(this)
    this.toggleChat = this.toggleChat.bind(this)
    this.otherUserName = this.otherUserName.bind(this)
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleClick(){
    this.toggleChat()
  }

  otherUserName() {
    var id = $(this.state.users).not([this.props.current_user]).get();
    return this.props.getUserName(id[0])
  }

  toggleChat() {
    this.setState({open: !this.state.open})
  }

    render() {

      return (
        <div className = {this.state.open? "chat open" : "chat closed"} >
          <div className = "chat-name" onClick = {this.handleClick}>
            <div className = "online"> </div>
            {this.otherUserName()}
          </div>

          <div className = "messages">
            <div className = "message me">
              <span>
                Hi!!!
              </span>
            </div>
            <div className = "message you">
              <span>
                Yo dude
              </span>
            </div>
          </div>
          <form className="message-form" onSubmit={this.handleSubmit}>
              <input className="message-input" type="text" placeholder="type a message..." value={this.state.message} onChange={this.handleChange} />
          </form>


        </div>




      );

  }
}
export default Chat
