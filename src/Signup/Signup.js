import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      location: ""
    };

    this.firstnameChange = this.firstnameChange.bind(this);
    this.lastnameChange = this.lastnameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
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

  locationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.firstname +
        " " +
        this.state.lastname +
        " " +
        this.state.email +
        " " +
        this.state.location
    );

      fetch("http://localhost:8088/users")
      // Must be explicit on how to parse the response
      .then(r => r.json())

      // JSON parsed data comes to this then()
      .then(users => {
          console.log(users)
      })

    event.preventDefault();
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      location: ""
    });
  }

  render() {
    return (
      <div className="signup__container">
        <h1 className="signup__title">Sign-up to use our app below!</h1>
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
          <label>
            Location:
            <select value={this.state.location} onChange={this.locationChange}>
              <option selected value="">
                Pick one
              </option>
              <option value="Nashville">Nashville</option>
              <option value="Memphis">Memphis</option>
              <option value="Knoxville">Knoxville</option>
              <option value="Chattanooga">Chattanooga</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
