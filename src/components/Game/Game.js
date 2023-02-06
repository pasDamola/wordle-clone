import React, { useState } from "react";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  const handleGuess = (event) => {
    const guessValue = event.target.value;
    setGuess(guessValue.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuesses([...guesses, guess]);
    setGuess("");
  };
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        guess={guess}
        onEnterGuess={handleSubmit}
        handleGuess={handleGuess}
      />
    </>
  );
}

export default Game;
