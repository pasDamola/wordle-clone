import React from 'react';

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
