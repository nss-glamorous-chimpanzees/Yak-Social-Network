import React, {Component} from 'react';

class UserChecker {



    

    componentDidMount() { 
        
        fetch(`http://127.0.0.1:8088/users?email=me@fake.noway&password=password`)
            .then(response => response.json())
            .then(data => {
                // this.setState({
                //     email: data.email,
                //     userId: data.userId,
                //     password: data.password
                // })
                // 
                console.log(data)
                
            })
    }
}

export default UserChecker;