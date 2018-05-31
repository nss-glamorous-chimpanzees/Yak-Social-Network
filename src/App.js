import React, { Component } from 'react';
import './App.css';
import FriendList from './friends/FriendList';


class App extends Component {
  render() {
    return (
      <div className="App">
      Chimps be Glam!
        <div id="friends-div">
          <FriendList userId={this.state.userId}/>
        </div>
      </div>
    );
  }
}

export default App;
