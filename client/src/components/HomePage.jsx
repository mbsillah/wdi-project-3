import React, { Component } from 'react';
import GameList from './GameList'
import styled from 'styled-components';

const MainStyle = styled.div`
    text-align: center
`


class HomePage extends Component {

    render() {
        return (
            <MainStyle>
                <h1>Welcome to the Old Man Game Store!</h1>
                <h3>Current Games on Sale: </h3>
                <GameList />
            </MainStyle>
        );
    }
}

export default HomePage;