import React from "react";
import propTypes from 'prop-types';

export default function Congrats(props) {
  if (props.success) {
    return (
      <div data-test="congrats-wrapper">
        <span data-test="congrats-message">congrats! You guessed the word!</span>
      </div>
    );
  } else {
    return (
        <div data-test="congrats-wrapper" />
    )
  }
}

Congrats.propTypes = {
    success: propTypes.bool.isRequired
}