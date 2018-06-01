import React from 'react';
import Dashboard from './dashboard/Dashboard';
import BasicExample from './Router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email:'', password:''};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange= function (event) {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }.bind(this)
  
    handleSubmit(event) {
        fetch(`http://127.0.0.1:8088/users?email=${this.state.email}&password=${this.state.password}`)
        .then(response => response.json())
        .then(data => {
          if (data.length === 0){
            alert("Password and Email Do Not Match Our Records")
          }
          else{
             let userId = data[0].id
            sessionStorage.setItem('userId', userId); 
            <Route path="/dashboard/Dashboard"/>

            console.log(data[0].id)

          }
        })
 }
  
    render() {
      return (
        <form>
          <label>
            Email:
            <input id="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
              Password:
              <input id="password" type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Login" onClick={this.handleSubmit} 
          >Submit</button>
          <label>
              <label> Remember Me?
          <input type="checkbox" value="Remember Me?" className="button" id="submitButton"/>
          </label>
          </label>
        </form>
      );
    }
  }

export default NameForm;