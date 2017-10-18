import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';


const GameImage = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        width: 30%;
        height: 30%;

        img {
            width: 100%;
            height: 100%;
            &:hover {
                opacity: .9;
            }
        }
    }

    `

class GameList extends Component {

    state = {
        games: [],
    }

    componentWillMount() {
        this.getAllGames()
    }

    getAllGames = async () => {
        try {
            const res = await axios.get('/api/games')
            this.setState({ games: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <GameImage>
                {this.state.games.map(game => {
                    return (
                        <Link key={game._id} to={`/games/${game._id}`} className="gameContainer">
                            <img src={game.coverLink} alt={game.title} />
                        </Link>
                    )
                })}
            </GameImage>
        );
    }
}


export default GameList;

