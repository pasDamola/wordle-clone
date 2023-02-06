import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Cell({ key, letter, status }) {
  const cellStyle = status ? `cell ${status}` : "cell";
  return (
    <span key={key} className={cellStyle}>
      {letter}
    </span>
  );
}

function Guess({ value }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
