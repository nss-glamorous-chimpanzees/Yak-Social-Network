
import React, { Component } from 'react'
import Ad from "./ad";

class Ads extends Component {
    state={
        ads: []
    }

    componentDidMount(){
        fetch(`http://localhost:8088/ads/`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                ads: data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.ads.map(ad =>
                    <Ad adId={ad.id} key={ad.id} userId={this.props.userId}/>
                )}
            </div>
        )
    }
}

export default Ads