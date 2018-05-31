// import React, {Component} from 'react';

// class UserChecker extends Component {
// constructor() {
//     super();

//     this.state = {
//         email: "",
//         userId: "",
//         password: "",
//     }

//     componentDidMount() ;{
        
//         fetch(`http://localhost:8088/users/${this.props.userId}`)
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     email: data.email,
//                     userId: data.userId,
//                     password: data.password
//                 })
//                 return fetch(`http://localhost:8088/users?id=${this.state.userId}`)
//             })
//     }
// }}

// export default UserChecker;