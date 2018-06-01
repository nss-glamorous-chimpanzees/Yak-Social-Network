import React, { Component } from 'react';
import FriendList from "../friends/FriendList"
import "./Dashboard.css"

class Dashboard extends Component {
    state = {
        userId: null
    }

    loadUser () {
        this.setState({
            userId: sessionStorage.getItem("userId")
    })
    }
    componentDidMount() {
        this.loadUser()
    }

    render() {
        return (
            <div id="dashboard-wrapper">
                <div id="dashboard">
                    <div id="feed">
                    </div>
                    <div id="friends">
                        <h4 className="section-title">Friends</h4>
                        <FriendList userId={this.state.userId} />
                    </div>
                    <div id="events">
                    </div>
                </div>
                <div id="adbox">
                </div>
            </div>
        )
    }
}

export default Dashboard