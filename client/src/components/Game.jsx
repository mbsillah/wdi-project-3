import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';

const GamePage = styled.div`

h1{
    text-align: center;
    padding: 10px;
    margin: 0 auto;
}

div{
    background-color: white
}
`

const GameImage = styled.div`
    img {
        max-width: 30%;
        max-height: 30%; 
        float: left;
        padding: 0px 50px
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
                <h3>Price:</h3><span>${this.state.game.price}</span>
                <h3>Release Year:</h3><span>{this.state.game.releaseYear}</span>
                <div><h3>Description:</h3><span>{this.state.game.description}</span></div>
            </GamePage>
        );
    }
}

export default Game;