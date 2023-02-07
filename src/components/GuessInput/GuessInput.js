import React from "react";
import { useState } from "react";

function GuessInput({ onEnterGuess, gameStatus }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuess("");
    onEnterGuess(guess);
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        required
        value={guess}
        onChange={(event) => {
          const guessValue = event.target.value;
          setGuess(guessValue.toUpperCase());
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
