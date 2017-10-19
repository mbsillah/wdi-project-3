import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const MainStyle = styled.div`
text-align: center;
h3{
    padding: 10px;
    margin: 0 auto;
}
`


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


class System extends Component {

    state = {
        games: []
    }

    async componentWillMount() {
        const { systemId } = this.props.match.params
        const res = await axios.get(`/api/systems/${systemId}`)
        this.setState({ games: res.data.games })
    }

    async componentWillReceiveProps(nextProps){
        if (this.props.match.params.systemId !== nextProps.match.params.systemId){
            const res = await axios.get(`/api/systems/${nextProps.match.params.systemId}`)
            this.setState({ games: res.data.games })
        }
    }

    render() {
        return (
            <MainStyle>
            <h3>Current Games on Sale: </h3>
            <GameLink>
                {this.state.games.map(game => {
                    return (
                        <Link to={`/games/${game._id}`} key={game._id}>
                            <img src={game.coverLink} alt={game.title} />
                        </Link>
                    )
                })}
            </GameLink>
            </MainStyle>
        );
    }
}

export default System;