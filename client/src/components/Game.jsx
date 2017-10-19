import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';

const GamePage = styled.div`
text-align: center;
h1{
    padding: 10px;
    margin: 0 auto;
}
`

const GameImage = styled.div`
    img {
        max-width: 30%;
        max-height: 30%;     
    }
    `


class Game extends Component {

    state = {
        game: {}
    }

    async componentWillMount() {
        const { gameId } = this.props.match.params
        const res = await axios.get(`/api/games/${gameId}`)
        this.setState({ game: res.data })
    }

    render() {
        return (
            <GamePage>
                <h1>{this.state.game.title}</h1>
                <GameImage>
                    <img src={this.state.game.coverLink} alt={this.state.game.title} />
                </GameImage>
                <h4>Price:</h4><p>${this.state.game.price}</p>
                <h4>Release Year:</h4><p>{this.state.game.releaseYear}</p>
                <h4>Description:</h4><p>{this.state.game.description}</p>
            </GamePage>
        );
    }
}

export default Game;