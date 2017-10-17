import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class UserPage extends Component {

    state = {
        user: {}
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

    async deleteProfile() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

    render() {
        return (
            <div>
                <h1>{this.state.user.username}'s Page</h1>
                <Link to={`/users/${this.state.user._id}/edit`}>
                <button>Edit</button>
                </Link>
                <button onClick={this.deleteProfile}>Delete</button>
            </div>
        );
    }
}

export default UserPage;