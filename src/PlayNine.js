import React, { Component } from 'react';
import axios from 'axios';

const Stars = (props) => {
    return (
        <div>...</div>
    );
}

const Button = (props) => {
    return (
        <div>...</div>
    );
}

const Answer = (props) => {
    return (
        <div>...</div>
    );
}

class Game extends Component {
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <Stars />
                <Button />
                <Answer />
            </div>
        );
    }
}

class PlayApp extends Component {
    render() {
        return (
            <Game />
        )
    }
}

export default PlayApp;