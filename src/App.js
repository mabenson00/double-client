import React, { Component } from 'react';

import logo from './logo.svg';

import './app.css';
import './sidebar.css'
import  Sidebar  from "./containers/sidebar"

const users = [
  {name: "Sam Jones",
  id: 1
  },
  {name: "Benjamin Humperdink",
  id: 2
  },
  {name: "Jennifer Lawrence",
  id: 3
  },
  {name: "Tom Jerry",
  id: 4
  },
  {name: "Laura Dunkin",
  id: 5
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      current_user: undefined
    };

    this.addUser = this.addUser.bind(this)
    this.getUserName = this.getUserName.bind(this)
  }


  addUser(name) {
    var id = this.state.users[this.state.users.length-1].id + 1
    var user = {name: name, id: id}
    this.setState({users: [...this.state.users, user] }) // add user to users state
    this.setState({current_user: user.id}) // set current_user as user ID
  }

  getUserName(userID) {
    var user =  this.state.users.find((element) => {
    return element.id === userID;
  })
  return user? user.name: ""
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <nav id="sidebar">


            <Sidebar
              current_user = {this.state.current_user}
              users = {this.state.users}
              getUserName = {this.getUserName}
              addUser = {this.addUser}

              />
              {this.state.response}
          </nav>
          <div id="content">

          </div>
        </div>
      </div>
    );
  }
}



export default App;
