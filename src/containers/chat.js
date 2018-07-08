import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import Message from './message'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: this.props.users,
      messages: [],
      open: this.props.open === true? true : false,
      message: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.toggleChat = this.toggleChat.bind(this)
    this.otherUserName = this.otherUserName.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addMessage = this.addMessage.bind(this)
  };

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    this.addMessage(this.state.message)
    this.setState({message: ""})

  }

  addMessage(text) {
    var user = this.props.current_user
    var message = {text: text, user: user}
    this.setState({messages: [...this.state.messages, message]})
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
      var messageNodes = this.state.messages.slice(0, 5).map(function ( message ) {
          return ( <Message
            current_user = {this.props.current_user}
            user = {message.user}
            text =  {message.text} /> )
    }.bind(this));

      return (
        <div className = {this.state.open? "chat open" : "chat closed"} >
          <div className = "chat-name" onClick = {this.handleClick}>
            <div className = "online"> </div>
            {this.otherUserName()}
          </div>

          <div className = "messages">
          {messageNodes}
          </div>
          <form className="message-form" onSubmit={this.handleSubmit}>
              <input className="message-input" type="text" placeholder="type a message..." value={this.state.message} onChange={this.handleChange} />
          </form>


        </div>




      );

  }
}
export default Chat
