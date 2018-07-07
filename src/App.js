import React, { Component } from 'react';

import logo from './logo.svg';

import './app.css';
import  Sidebar  from "./containers/sidebar"
import NameForm from "./containers/nameform"
const users = [
  {name: "Sam",
  id: 1
  },
  {name: "Ben",
  id: 2
  },
  {name: "Jennifer",
  id: 3
  },
  {name: "Michael",
  id: 4
  },
  {name: "Laura",
  id: 5
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      response: ''
    };

    this.addUser = this.addUser.bind(this)
  }


  addUser(name) {
    var id = this.state.users[this.state.users.length-1].id + 1
    var user = {name: name, id: id}
    this.setState({users: [...this.state.users, user] })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <nav id="sidebar">
            <Sidebar
              users = {this.state.users}

              />
              {this.state.response}
          </nav>
          <div id="content">
          <NameForm
            addUser = {this.addUser}
          />
          </div>
        </div>
      </div>
    );
  }
}



export default App;
