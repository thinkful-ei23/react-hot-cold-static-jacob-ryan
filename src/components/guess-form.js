import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    
    onGuessFormSubmit(e) {   
        e.preventDefault();
        const text = parseInt(this.number.value.trim(), 10);
        if (text && this.props.newGuess) {
            this.props.newGuess(text);
        
        }
        this.number.value = '';
    }
    render() {
        return (
            <form onSubmit={(e) => this.onGuessFormSubmit(e)}>
                <input ref={input => this.number = input} type="number" name="userGuess" id="userGuess"
                    className="text" max="100" autoComplete="off"
                    placeholder="Enter your Guess" required />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

