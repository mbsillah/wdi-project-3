import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class NavBar extends Component {

  state = {
    systems: []
  }

async componentWillMount() {
  const res = await axios.get('api/systems')
  this.setState({ systems: res.data})
}

  render () {
    return(
    <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">Log In</Link>
        </div>
        {this.state.systems.map(system => {
          return (
            <div key={system._id}>
              <Link to={`/systems/${system._id}`}>{system.name}</Link>
            </div>
          )
        })}
    </div>
  )
  }
}

export default NavBar;