import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'



class UserEdit extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        },
        redirectToUserPage: false
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        console.log(res)
        this.setState({ user: res.data })
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedUser = { ...this.state.user }
        updatedUser[attribute] = event.target.value
        this.setState({ user: updatedUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.put(`/api/users/${this.state.user._id}/edit`, {
            'user': this.state.user
        })
        console.log(res)
        this.setState({redirectToUserPage: true, user: res.data})
    }


    render() {

        if (this.state.redirectToUserPage) {
            return <Redirect to={`/users/${this.state.user._id}`} />
        }   

        return (
            <div>
                <h3>Edit User</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input onChange={this.handleChange} name="firstName" type="text" value={this.state.user.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input onChange={this.handleChange} name="lastName" type="text" value={this.state.user.lastName} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address: </label>
                        <input onChange={this.handleChange} name="email" type="text" value={this.state.user.email} />
                    </div>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input onChange={this.handleChange} name="username" type="text" value={this.state.user.username} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.user.password} />
                    </div>
                    <button>Save Changes</button>
                </form>
            </div>
        );
    }
}

export default UserEdit;