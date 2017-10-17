import React, { Component } from 'react';
import axios from 'axios'
//import { Redirect } from 'react-router-dom'


class SignUpForm extends Component {

    state = {
        newUser: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        },
        newUserId:''
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.newUser }
        updateUser[attribute] = event.target.value
        this.setState({ newUser: updateUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        this.setState({newUserId: res.data._id})
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input onChange={this.handleChange} name="firstName" type="text" value={this.state.newUser.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name: </label>
                        <input onChange={this.handleChange} name="lastName" type="text" value={this.state.newUser.lastName} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address: </label>
                        <input onChange={this.handleChange} name="email" type="text" value={this.state.newUser.email} />
                    </div>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input onChange={this.handleChange} name="username" type="text" value={this.state.newUser.username} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.newUser.password} />
                    </div>
                    <button>Save Edits</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;