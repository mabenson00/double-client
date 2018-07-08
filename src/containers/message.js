import React from 'react';
class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {




    }

  };

    render() {


      return (

        <div className={this.props.user === this.props.current_user? "message me" : "message you"}>
          <span>{this.props.text}</span>
        </div>




      );

  }
}
export default Message
