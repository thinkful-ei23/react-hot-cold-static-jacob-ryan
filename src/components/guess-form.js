import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    
    onGuessFormSubmit(e) {   
        e.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.newGuess) {
            this.props.newGuess(text);
        
        }
        this.textInput.value = '';
    }
    render() {
        return (
            <form onSubmit={(e) => this.onGuessFormSubmit(e)}>
                <input ref={input => this.textInput = input} type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

