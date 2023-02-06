import { useState } from 'react';
import Game from '../Game';
import Guess from '../Guess';
import Header from '../Header';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function App() {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
       <div className='guess-results'>
       {
         range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
           <Guess key={index} value={guesses[index]}/>
         ))
       }
       </div>
        <Game 
          guess={guess} 
          setGuess={setGuess} 
          guesses={guesses}
          setGuesses={setGuesses}
        />
      </div>
    </div>
  );
}

export default App;
