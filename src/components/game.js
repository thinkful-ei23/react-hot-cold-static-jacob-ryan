import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         currentGuess: '' 
        }
    }
    newGuess(guess) {
        this.setState({
            currentGuess: guess
        })
    }
    render() {
        console.log(this.state.currentGuess)
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" newGuess={(guess) => this.newGuess(guess)}/>
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

