import React, { Component } from "react";

class Signup extends Component {
  state = {
    email: "paul@paul.com",
    password: "paul"
  }
  
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Login" />
        <label>
          <input type="checkbox" value="Remember Me?" />
        </label>
      </form>
    );
  }
}

export default Signup;
