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

    //getCurrentGame = async () => {
    //    try {
    //        const{ gameId } = this.props.match
    //        const res = await axios.get(`api/games/${ gameId }`)
    //        this.setState({currentGame: res.data})
    //    } catch (error) {
    //        console.log(error)
    //    }
    //}

    render() {
        return (
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
        );
    }
}

export default GameList;