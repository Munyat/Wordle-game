import React, { useState } from "react";

function Form({ onSubmitGuess, status }) {
  const [answer, setAnswer] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (answer.length !== 5) {
          return window.alert("Your word length");
        }
        onSubmitGuess(answer);
        console.log(answer);

        setAnswer("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={status !== "running"}
        required
        id="guess-input"
        value={answer}
        type="text"
        maxLength={5}
        minLength={5}
        onChange={(e) => {
          const answer = e.target.value;
          setAnswer(answer.toUpperCase());
        }}
      />
    </form>
  );
}

export default Form;
