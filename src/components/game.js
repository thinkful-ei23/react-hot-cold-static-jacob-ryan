import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import { generateFeedback } from './../guess-function'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         currentGuess: 0,
         guessCount: 0,
         guesses: [],
         magicNumber: (Math.floor((Math.random() * 100) + 1)),
         feedback: 'Make your guess'
        }
    }
    newGuess(guess) {
        this.setState({
            currentGuess: guess,
            guessCount: this.state.guessCount + 1,
            guesses: [...this.state.guesses, guess]
        })
        const answer = generateFeedback(this.state.magicNumber,guess)
        this.setState({
            feedback: answer
        })
    }
    newGame() {
        this.setState({
            currentGuess: 0,
            guessCount: 0,
            guesses: [],
            magicNumber: (Math.floor((Math.random() * 100) + 1)),
            
        })
    }
        
    render() {
        console.log(this.state.magicNumber)
        return (
            <div>
                <Header newGame={() => this.newGame()}/>
                <GuessSection feedback={this.state.feedback} newGuess={(guess) => this.newGuess(guess)}/>
                <GuessCount count={this.state.guessCount} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

