import React from 'react';
import UserChecker from './loginChecker';




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
            // this.setState({
            //     email: data.email,
            //     userId: data.userId,
            //     password: data.password
            // })
            // 
            console.log(data)
            
        })
    //   if (this.state === UserChecker) {
          console.log("UserChecker",UserChecker)
          event.preventDefault()
    //   }
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