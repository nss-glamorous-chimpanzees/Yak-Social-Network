import React, { Component } from "react";
import Post from "./Post";
import "./PostList.css";

class PostList extends Component {
    constructor (props) {
        super(props) 
        this.uniqueKey = 1
        this.state = {
                userIds: [],
                postIds: []
        }        
    }


    //need to see public posts from all friends
    //current user => user's friends => posts of current user and user's friends (but no one else)

    getFollowedUsers(){

        //fetch call returns a single object representing the currently logged in user. That object has an embedded array of all of the current user's followed users.
        fetch((`http://localhost:8088/users/?id=${this.props.userId}&_embed=follows`))
            .then(user => user.json())
            .then(user => {

            //grabs just the ID for each of the followed users and pushes the ID to the userIds array in this component's state
            user[0].follows.forEach(follow => {
                this.state.userIds.push(parseInt(follow.followId))
            })

            //call function to build a list of postIds
            this.getPosts()        
        })
    }

    getPosts() {

        //create a variable to store the parameter string that will be passed to JSON Server. Initialize the variable with the ID of the current user.
        let postUsers = `?userId=${this.props.userId}`

        //add the userIds of each followed user to the parameter string
        this.state.userIds.forEach(userId => {
            postUsers += `&userId=${userId}`
        })

        //make the API call using the parameter string
        fetch((`http://localhost:8088/posts${postUsers}`))
            .then(posts => posts.json())
            .then(posts => {
                //push the postIds of all posts by the current user and the current user's follows
                let newPosts=[]
                posts.forEach(post => {
                    newPosts.push(parseInt(post.id))
                })
                this.setState({
                    postIds: newPosts
                })
            })

    }

    componentDidMount(){
        this.getFollowedUsers()
    }

    render() {
        return(
            <div id="post-list">
                {this.state.postIds.map(post => (
                    <Post key={this.uniqueKey++} postId={post} />
                ))}
            </div>
        )
    }

}


export default PostList