import React, { Component } from 'react';
import GameList from './GameList'

class HomePage extends Component {


    render() {
        return (
            <div>
                <h1>Welcome to the Old Man Game Store!</h1>
                <h3>Current Games on Sale: </h3>
                <GameList />
            </div>
        );
    }
}

export default HomePage;