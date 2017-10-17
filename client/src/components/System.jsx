import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const GameImage = styled.div`
    display: flex;
    justify-content: space-around;
    img {
        max-width: 50%;
        max-height: 50%;     
    }
    img: hover {
        opacity: 0.9;
    }
    `


class System extends Component {

    state = {
        games: []
    }

    async componentWillMount() {
        const { systemId } = this.props.match.params
        const res = await axios.get(`/api/systems/${systemId}`)
        this.setState({ games: res.data.games })
    }

    render() {
        return (
            <div>
            <h3>Current Games on Sale: </h3>
            <GameImage>
                {this.state.games.map(game => {
                    return (
                        <Link to={`/games/${game._id}`} key={game._id}>
                            <img src={game.coverLink} alt={game.title} />
                            <p>{game.title}</p>
                        </Link>
                    )
                })}
            </GameImage>
            </div>
        );
    }
}

export default System;