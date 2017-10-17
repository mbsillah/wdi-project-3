import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom'
import axios from 'axios'

class UserEdit extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }
    }

    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        console.log(res)
        this.setState({ user: res.data })
    }



    render() {
        return (
            <div>
                <h3>Edit User</h3>
                <form>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input name="firstName" type="text" value={this.state.newUser.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input name="lastName" type="text" value={this.state.newUser.lastName} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address: </label>
                        <input name="email" type="text" value={this.state.newUser.email} />
                    </div>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input name="username" type="text" value={this.state.newUser.username} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input name="password" type="text" value={this.state.newUser.password} />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default UserEdit;