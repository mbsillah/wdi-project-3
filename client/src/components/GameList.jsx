import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
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

class GameList extends Component {

    state = {
        games: []
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
                            <Link to={`/game/${game._id}`}><img src={game.coverLink} alt={game.title} />
                            <p>{game.title}</p>
                            </Link>
                            
                            )
                    })}
                </GameImage>
        );
    }
}

export default GameList;