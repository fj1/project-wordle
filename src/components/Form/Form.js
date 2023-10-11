import React from 'react';
import { checkGuess } from "../../game-helpers";
import { GUESS_LENGTH } from "../../constants";

function Form({
  answer,
  guessesLeft,
  guessList,
  guessValidation,
  setGuessesLeft,
  setGuessList,
  setGuessValidation,
  setUserWon,
  userWon,
}) {
  const [value, setInputValue] = React.useState("");
  const [error, setError] = React.useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value.toUpperCase());
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (value.length < GUESS_LENGTH) {
      setError(`The guess must be ${GUESS_LENGTH} letters long.`);
    } else {
      setInputValue("");
      setGuessList([
        ...guessList,
        {
          id: crypto.randomUUID(),
          value,
        },
      ]);
      
      const checkGuessResult = checkGuess(value, answer);
      setGuessValidation([...guessValidation, checkGuessResult]);

      if (checkGuessResult.every((char) => char.status === "correct")) {
        setUserWon(true);
      } else {
        setGuessesLeft(guessesLeft - 1);
      }
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={userWon || guessesLeft === 0}
        id="guess-input"
        onChange={handleInputChange}
        maxLength={GUESS_LENGTH}
        minLength={GUESS_LENGTH}
        required
        type="text"
        value={value}
      />
      {error && <span>{error}</span>}
    </form>
  );
}

export default Form;
