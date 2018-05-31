import React from 'react';
import UserChecker from './loginChecker';




class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: '', password: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({password: event.target.password, email: event.target.email});
    }
  
    handleSubmit(event) {
      alert('Welcome');
      if (this.state === `UserChecker(${this.state.email})`) {
          console.log(this.state)
      }
      console.log(UserChecker)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
              Password:
              <input type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Login" onClick={this.handleSubmit} 
          />
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