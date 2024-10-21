import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Guesses from "../Guesses/Guesses";
import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBaanner from "../LostBaanner/LostBaanner";

// Pick a random word on every pageload.
const correctAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ correctAnswer });

function Game() {
  const [status, setStatus] = useState("running");
  const [guess, setGuess] = useState([]);
  function handleGuessSubmit(answer) {
    const nextGuess = [...guess, answer];
    setGuess(nextGuess);
    if (answer.toUpperCase() === correctAnswer) {
      setStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }
  return (
    <>
      <Guesses guess={guess} answer={correctAnswer} />
      <Form onSubmitGuess={handleGuessSubmit} status={status} />
      {status === "won" && <WonBanner numOfGuesses={guess.length} />}
      {status === "lost" && <LostBaanner answer={correctAnswer} />}
    </>
  );
}

export default Game;
