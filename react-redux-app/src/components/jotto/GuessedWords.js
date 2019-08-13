import React from "react";
import propTypes from "prop-types";
export default function GuessedWords(props) {
  let content;
  if (!props.guessedWords.length) {
    content = (
      <span data-test="guess-word-instructions">
        Try to guess the secret word!
      </span>
    );
  } else {
    content = (
      <div>
        <ul data-test="guessed-words-list">
          <li className="row header">
            <div className="cell"><span>Guessed Word</span></div>
            <div className="cell"><span>Letters Matched</span></div>
          </li>
          {props.guessedWords.map(({guessedWord , letterMatchCount},index) => (
            <li key={index} data-test="guessed-word" className="row">
              <div className="cell">
                  <span>{guessedWord}</span>
              </div>
              <div className="cell">
                  <span>{letterMatchCount}</span>
              </div>
            </li>
          ))}
        </ul> 
      </div>
    );
  }
  return <div data-test="guessed-words-wrapper">{content}</div>;
}

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number.isRequired
    })
  ).isRequired
};
