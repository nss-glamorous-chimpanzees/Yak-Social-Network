import React, { Component } from 'react';
import './App.css';
import NameForm from './login';
import FriendList from './friends/FriendList'
import Dashboard from './dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import BasicExample from './Router';



class App extends Component {
  render() {
    return (





      
      <div className="App">
      Chimps be Glam!
      <BasicExample />
      <NameForm />
     
      </div>
     )
 }
}

export default App;





