import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      location: "",
      password: "",
      image: "",
      email: ""
    };

    this.firstnameChange = this.firstnameChange.bind(this);
    this.lastnameChange = this.lastnameChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
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

  imageChange(event) {
    this.setState({ image: event.target.value });
  }

  locationChange(event) {
    this.setState({ location: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    // Prevent form from clearing every time submitted
    event.preventDefault();

    // Store submitted values into variables
    const submittedFirstname = this.state.firstname;
    const submittedLastname = this.state.lastname;
    const submittedEmail = this.state.email;
    const submittedPassword = this.state.password;
    const submittedImageUrl = this.state.image;
    const submittedLocation = this.state.location;

    fetch(`http://localhost:8088/users?email=${submittedEmail}`)
      // Must be explicit on how to parse the response
      .then(r => r.json())

      // JSON parsed data comes to this then()
      .then(user => {
        // Convert user to string to get undefined if empty (instead of empty array)
        if (user.toString()) {
          document
            .getElementById("emailExistsAlert")
            .removeAttribute("class", "emailexists");

          // if doesn't exist, add to user db and forward to login page, passing email/password
        } else {
          fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              first: submittedFirstname,
            last: submittedLastname,
            email: submittedEmail,
            password: submittedPassword,
            image: submittedImageUrl,
            location: submittedLocation
            })
          });
          this.setState({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            image: '',
            location: ''
          });
        }
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
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.passwordChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              value={this.state.image}
              onChange={this.imageChange}
            />
          </label>
          <label>
            Location:
            <select value={this.state.location} onChange={this.locationChange}>
              <option defaultValue="">Pick one</option>
              <option value="Nashville">Nashville</option>
              <option value="Memphis">Memphis</option>
              <option value="Knoxville">Knoxville</option>
              <option value="Chattanooga">Chattanooga</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div id="emailExistsAlert" className="emailexists">
          <p>That email address already exists. Click here to log in.</p>
        </div>
      </div>
    );
  }
}

export default Signup;
