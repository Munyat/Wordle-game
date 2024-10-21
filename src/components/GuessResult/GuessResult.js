import React from "react";
import { checkGuess } from "../../game-helpers";

function Cell({ guess, results }) {
  return <span className={`cell ${results}`}>{guess}</span>;
}

function GuessResult({ guess, answer }) {
  const result = guess && checkGuess(guess, answer);
  console.log(result);
  return (
    <p className="guess">
      {Array.from({
        length: 5,
      }).map((_, j) => (
        <Cell
          guess={guess?.at(j) || undefined}
          key={j}
          results={result ? result[j].status : ""}
        />
      ))}
    </p>
  );
}

export default GuessResult;
