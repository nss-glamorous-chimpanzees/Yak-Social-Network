
import React, { Component } from 'react'
import Ad from "./ad";

class Ads extends Component {
    
    constructor(props) {
        super(props)

    this.state={
        ads: []
    }
}

    componentDidMount(){
        fetch(`http://localhost:8088/ads/`)
        .then(response => response.json())
        .then(data => {
            fetch(`http://localhost:8088/usersads?userId=${this.props.userId}&_expand=ad`)
            .then(response2 => response2.json())
            .then(exclusionData => {
                exclusionData.forEach(excludeAd => {
                    data.forEach((ad, i) => {
                        if (excludeAd.ad.id === ad.id) {
                            data.splice(i, 1)
                        }
                    })
                })
                this.setState({
                    ads: data
                })
            })
        })
    }
                                                
    
    update = (removedAdId) =>{
        let allAds = this.state.ads
        allAds.forEach((ad,i) => {
            if (parseInt(ad.id) === parseInt(removedAdId)) {
                allAds.splice(i, 1)
            }
        })
        this.setState({
            ads: allAds
        })
    }

    render() {
        return (
            <div>
                {this.state.ads.map(ad =>
                    <Ad adId={ad.id} key={ad.id} userId={this.props.userId} callback={this.update} />
                )}
            </div>
        )
    }
}

export default Ads