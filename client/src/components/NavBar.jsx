import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

const NavStyle = styled.div`

ul{
  background-color: red;
  margin: 0 ;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}

a {
  padding: 20px;
  color: black
  }

li a:hover {
    background-color: rgb(128,0,0)
    } 
}
`


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
      <NavStyle>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Log In</Link></li>
          {this.state.systems.map(system => {
            return (
              <li key={system._id}><Link to={`/systems/${system._id}`}>{system.name}</Link></li>
            )
          })}
        </ul>
      </NavStyle>
    )
  }
}

export default NavBar;