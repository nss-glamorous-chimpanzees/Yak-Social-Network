import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import NameForm from './login';
=======
import FriendList from './friends/FriendList';


>>>>>>> abfe354829e99902d4797331b87a9dc2d570d00f
class App extends Component {
  render() {
    return (
      <div className="App">
      Chimps be Glam!
<<<<<<< HEAD
      <NameForm />
       </div>
     
=======
        <div id="friends-div">
          <FriendList userId="1"/>
        </div>
      </div>
>>>>>>> abfe354829e99902d4797331b87a9dc2d570d00f
    );
  }
}

export default App;
