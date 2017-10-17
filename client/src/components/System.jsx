import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const GameImage = styled.div`
    text-align: center;
    img {
        max-width: 10%;
        max-height: 10%;     
    }
    img: hover {
        opacity: 1;
    }
    `


class System extends Component {

    state = {
        games: []
    }

    async componentWillMount() {
        const { systemId } = this.props.match.params
        const res = await axios.get(`/api/systems/${systemId}`)
        console.log(res)
        this.setState({ games: res.data.games })
    }

    render() {
        return (

            <GameImage>
                <h3>Current Games on Sale: </h3>
                {this.state.games.map(game => {
                    return (
                        <Link to={`/games/${game._id}`} key={game._id}>
                            <img src={game.coverLink} alt={game.title} />
                            <p>{game.title}</p>
                        </Link>
                    )
                })}
            </GameImage>
        );
    }
}

export default System;