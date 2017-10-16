import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class LoginPage extends Component {
    state = {
        users: []
    }

    componentWillMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>Log-In</h1>
                <h3>Please Select an Existing User</h3>
                {this.state.users.map(user => {
                    return (<Link to={`/user/${user._id}`}>{user.username}</Link>)
                })}
            </div>
        );
    }
}

export default LoginPage;