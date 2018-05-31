import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: ""
    };

    this.firstnameChange = this.firstnameChange.bind(this);
    this.lastnameChange = this.lastnameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firstnameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  lastnameChange(event) {
    this.setState({ lastname: event.target.value });
  }
  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.firstname + " " + this.state.lastname + " " + this.state.email
    );
    // event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={this.state.firstname}
            onChange={this.firstnameChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={this.state.lastname}
            onChange={this.lastnameChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={this.emailChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Signup;
