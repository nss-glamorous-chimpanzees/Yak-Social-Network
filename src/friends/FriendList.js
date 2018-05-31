import React, { Component } from 'react';
import Friend from './Friend';
import "./FriendList.css"

class FriendList extends Component {
    constructor (props) {
        super(props)
        this.uniqueKey = 1
        this.state = {
            friendList: []
        }

    }

    loadFriends() {
        let allUsers
        fetch(("http://localhost:8088/users"))
            .then(users => users.json())
            .then(users => {
                allUsers = users
                return fetch(`http://localhost:8088/users/?id=${this.props.userId}&_embed=follows`)
            })
            .then(user => user.json())
            .then(userWithFollows => {
            const friendfollows = userWithFollows[0].follows.filter(follow => follow.friends)
            const friends = []
            friendfollows.forEach(friendfollow => {
                friends.push(allUsers.find(user => user.id === friendfollow.followId))
            })
            return friends
        })
        .then(friends => {
            this.setState({
                friendList: friends
            })
        })
    }

    componentDidMount () {
        this.loadFriends()
    }

    render () {
        return (
            <div id="friend-list">
                {this.state.friendList.map(friend => (
                    <Friend key={this.uniqueKey++} first={friend.first} last={friend.last} location={friend.location} img={friend.image} />
                ))}
            </div>
        )
    }
}

export default FriendList