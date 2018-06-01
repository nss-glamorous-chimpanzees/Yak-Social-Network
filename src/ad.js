import React, { Component } from 'react';
import './ad.css';

class Ad extends Component {

    state = {
        adId: 0,
        adTitle: "",
        adContent: "",
        adCompany: ""
    }

    componentDidMount() {
        fetch(`http://localhost:8088/ads/${this.props.adId}`)
        .then(response => response.json())
        .then(data => {
            fetch(`http://localhost:8088/usersads?userId=${this.props.userId}&_expand=ad`)
            .then(secondaryResponse => secondaryResponse.json())
            .then(excludedData => {
                excludedData.forEach(element => {
                    if(element.ad.id !== data.id) {
                        this.setState({
                            adTitle: data.title,
                            adContent: data.content,
                            adCompany: data.company
                        })
                    }
                });
            })
        })
    }

    render() {
      return (
        <div className="Ad">
            <h2>{this.state.adTitle}</h2>
            <p>{this.state.adContent}</p>
            <p>{this.state.adContent}</p>
        </div>
      );
    }
  }
  
  export default Ad;