import React, { Component } from 'react';
import './App.css';
import NameForm from './login';
import FriendList from './friends/Friend'
import Dashboard from './dashboard/Dashboard';



class App extends Component {
  render() {
    return (
      <div className="App">
      Chimps be Glam!
        <div id="friends-div">
          <FriendList userId="1"/>
        </div>
      <NameForm />
      <Dashboard />
      </div>
    )
  }
}

export default App;
