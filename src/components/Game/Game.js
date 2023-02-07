import React, { useState } from "react";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  // running/won/lost
  const [gameStatus, setGameStatus] = useState("running");

  const handleGuess = (newGuess) => {
    const nextGuess = [...guesses, newGuess];
    setGuesses(nextGuess);

    if (newGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onEnterGuess={handleGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && (
        <WonBanner
          handleGameStatus={setGameStatus}
          numOfGuesses={guesses.length}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner handleGameStatus={setGameStatus} answer={answer} />
      )}
    </>
  );
}

export default Game;
