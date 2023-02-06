import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

import { sample } from '../../utils';
import { WORDS } from '../../data';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Guess({ value }) {
  
  const guessArr = checkGuess(value, answer);
  
  function getStyle(letterIndex) {
    if(!value) {
      return;
    }
    return guessArr[letterIndex].status;
  }


  return (
    <p className="guess">
    {range(5).map(num => (
      <span key={num} className={`cell ${getStyle(num)}`}>
        {value ? value[num] : undefined}
      </span>
    ))}
  </p>
  )
}

export default Guess;
