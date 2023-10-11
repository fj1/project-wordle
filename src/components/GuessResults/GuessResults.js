import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { BLANK_GUESS, NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessList, guessValidation }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess
          key={guessList[index]?.id || crypto.randomUUID()}
          guess={guessList[index]?.value || BLANK_GUESS}
          guessValidation={guessValidation[index] || []}
        />
      ))}
    </div>
  );
}

export default GuessResults;
