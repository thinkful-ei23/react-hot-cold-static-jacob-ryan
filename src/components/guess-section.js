import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default class GuessSection extends React.Component {
    
    
    render() {
       
        return (
            <section>
                <h2 id="feedback">{this.props.feedback}</h2>
                <GuessForm newGuess={(guess) => this.props.newGuess(guess)}/>
            </section>
        );
    }
    
}

