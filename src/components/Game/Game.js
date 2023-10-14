import React from 'react';
import Form from "../Form";
import GuessResults from '../GuessResults';
import FailBanner from "../FailBanner/FailBanner";
import SuccessBanner from "../SuccessBanner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [guessValidation, setGuessValidation] = React.useState([]);
  const [userWon, setUserWon] = React.useState(false);
  const [guessesLeft, setGuessesLeft] = React.useState(NUM_OF_GUESSES_ALLOWED);

  return (
    <>
      <GuessResults
        guessList={guessList}
        guessValidation={guessValidation}
        answer={answer}
      />
      <Form
        answer={answer}
        guessesLeft={guessesLeft}
        guessList={guessList}
        guessValidation={guessValidation}
        setGuessesLeft={setGuessesLeft}
        setGuessList={setGuessList}
        setGuessValidation={setGuessValidation}
        setUserWon={setUserWon}
        userWon={userWon}
      />
      {userWon && <SuccessBanner numGuesses={guessList.length} />} 
      {guessesLeft === 0 && !userWon && <FailBanner answer={answer}/>}
    </>
  );
}

export default Game;
