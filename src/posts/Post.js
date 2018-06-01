import React, { Component } from "react";
import './Post.css'

class Post extends Component {
    state = {
        id: 0,
        userId: 0,
        userName:'',
        userImg: '',
        title: '',
        content: '',
        image: '',
        date: '',
        toFriendId: null,
        toFriendName: ''
    }

    const isPrivate;

    if

    getPostData() {
        fetch((`http://localhost:8088/posts/?id=${this.props.postId}`))
            .then(post => post.json())
            .then(post => {
                this.setState({
                    id: post[0].id,
                    userId: post[0].userId,
                    title: post[0].title,
                    content: post[0].content,
                    date: post[0].date,
                    toFriendId: post[0].toFriendId
                })
                if (post.image) {
                    this.setState({
                        image: post[0].image
                    })
                } else {
                    this.setState({
                        image: 'http://1x1px.me/NFFFFFF-0.png'
                    })
                }
                return fetch(`http://localhost:8088/users/?id=${this.state.userId}`)
            })
            .then(poster => poster.json())
            .then(poster => {
                this.setState({
                    userName: `${poster[0].first} ${poster[0].last}`,
                    userImg: poster[0].image
                })
                return fetch(`http://localhost:8088/users/?id=${this.state.toFriendId}`)
            })
            .then(friend => friend.json())
            .then(friend => {
                if(parseInt(friend.id)) {
                    this.setState({
                        toFriendName: `${friend[0].first} ${friend[0].last}`
                    })
                } else {
                    this.setState({
                        toFriendName: ''
                    })
                }
            })
    }

    componentDidMount() {
        this.getPostData()
    }

    render() {
        return (
            <section className="post">
                <h3>{this.state.title}</h3>
                <div className="postContent">
                    <img src={this.state.image} className="postImage" alt={this.state.title} />
                    <p className="postDate">{this.state.date}</p>
                    <section className="postText">{this.state.content}</section>
                </div>
                <div className="toFriend private">
                    {this.state.toFriendName}
                </div>
                <div className="posterInfo">
                    <img src={this.state.userImg} className="posterImage" alt={this.state.userName}/>
                    <p>{this.state.userName}</p>
                </div>
            </section>
        )
    }

}

export default Post