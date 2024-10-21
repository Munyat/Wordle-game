import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessResult from "../GuessResult/GuessResult";

function Guesses({ guess, answer }) {
  return (
    <div className="guess-results">
      {Array.from({ length: NUM_OF_GUESSES_ALLOWED }).map((_, i) => (
        <GuessResult key={i} guess={guess[i]} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;
