import React from "react";

function GuessInput({ guess, handleGuess, onEnterGuess }) {
  return (
    <form onSubmit={onEnterGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={handleGuess}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
