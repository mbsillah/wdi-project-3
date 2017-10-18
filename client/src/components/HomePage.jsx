import React, { Component } from 'react';
import GameList from './GameList'
import styled from 'styled-components';

const MainStyle = styled.div`
    text-align: center;
    background-color: rgb(0,0,128);
    h1{
        padding: 10px;
        margin: 0 auto;
    }
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