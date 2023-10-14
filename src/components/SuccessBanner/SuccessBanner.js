import React from 'react';
import Banner from "../Banner";

function SuccessBanner({ numGuesses }) {
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations! 🎉 </strong>Got it in{" "}
        <strong>
          {numGuesses === 1 ? "1 guess!" : `${numGuesses} guesses.`}
        </strong>
      </p>
    </Banner>
  );
}

export default SuccessBanner;
