import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';


const GameLink = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    a {
        width: 20%;
        height: 20%;
        border: 50px;
        margin: 50px;
    

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
            <GameLink>
                {this.state.games.map(game => {
                    return (
                        <Link key={game._id} to={`/games/${game._id}`}>
                            <img src={game.coverLink} alt={game.title} />
                        </Link>
                    )
                })}
            </GameLink>
        );
    }
}


export default GameList;

