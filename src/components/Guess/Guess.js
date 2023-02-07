import React, { useState } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Cell({ letter, status }) {
  const cellStyle = status ? `cell ${status}` : "cell";
  return <span className={cellStyle}>{letter}</span>;
}

function Guess({ value }) {
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);

  const result = checkGuess(value, answer);
  let numOfGuesses;

  return (
    <>
      {hasWon && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numOfGuesses} guesses</strong>.
          </p>
        </div>
      )}
      {hasLost && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;
