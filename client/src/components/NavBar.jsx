import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class NavBar extends Component {

  state = {
    systems: []
  }

  async componentWillMount() {
    try {
    const res = await axios.get('/api/systems')
    this.setState({ systems: res.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
          <Link to="/">Home</Link>
          <Link to="/login">Log In</Link>
        {this.state.systems.map(system => {
          return (
              <Link key={system._id} to={`/systems/${system._id}`}>{system.name}</Link>
          )
        })}
      </div>
    )
  }
}

export default NavBar;