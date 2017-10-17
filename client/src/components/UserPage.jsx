import React, { Component } from 'react';
import axios from 'axios'


class UserPage extends Component {

    state = {
        user: {}
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        console.log(res)
        this.setState({user: res.data})
    }

    render() {
        return (
            <div>
                <h1>{this.state.user.username}</h1>
            </div>
        );
    }
}

export default UserPage;