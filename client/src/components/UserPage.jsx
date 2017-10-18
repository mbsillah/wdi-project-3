import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class UserPage extends Component {

    state = {
        user: {
           _id: '' 
        },
        redirectToUserPage: false
    }


    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

    deleteProfile = async () =>  {
        const userId  = this.state.user._id
        const res = await axios.delete(`/api/users/${userId}/delete`)
        this.setState({redirectToUserPage: true, user: res.data })
    }

    render() {
        if (this.state.redirectToUserPage) {
            return <Redirect to={`/login`} />
        }
        
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