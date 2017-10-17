import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
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