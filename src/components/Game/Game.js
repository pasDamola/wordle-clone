import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ guess, setGuess, guesses, setGuesses }) {

  const handleGuess = (event) => {
    const guessValue = event.target.value;
    setGuess(guessValue.toUpperCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuesses([...guesses, guess])
    setGuess('');
  }
  return <>
  <form onSubmit={handleSubmit} className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input minLength={5} maxLength={5} value={guess} onChange={handleGuess} id="guess-input" type="text" />
</form>
</>;
}

export default Game;
