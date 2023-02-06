import { useState } from 'react';
import Game from '../Game';
import Guesses from '../Game/Guesses';
import Header from '../Header';

function App() {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game guess={guess} setGuess={setGuess} guesses={guesses} setGuesses={setGuesses} />
        <Guesses guesses={guesses} />
      </div>
    </div>
  );
}

export default App;
