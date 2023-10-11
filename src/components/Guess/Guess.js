import React from 'react';

function Guess({ 
    guess, 
    guessValidation,
    id: guessId
  }) {
  const guessArray = guess.split("").map((char) => ({
    charId: crypto.randomUUID(),
    char,
  }));

  return (
    <p className="guess" key={guessId}>
      {guessArray.map(({ char, charId }, index) => {
        const resultStatus = guessValidation[index]?.status; 
        const additionalClassName =
          (resultStatus === "correct") | (resultStatus === "misplaced")
            ? ` ${resultStatus}`
            : "";

        return (
          <span className={`cell${additionalClassName}`} key={charId}>
            {char}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
