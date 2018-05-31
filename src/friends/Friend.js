import React, { Component } from 'react';



class Friend extends Component {
    render () {
    return (
        <section className="friend-list-item">
        <img src={this.props.img} alt={this.props.first}/>
        <h5>{this.props.first} {this.props.last}</h5>
        <p>{this.props.location}</p>
        </section>
    )
    }   
}

export default Friend