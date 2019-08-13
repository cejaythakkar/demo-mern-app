import React, { Component } from "react";
import Congrats from "../components/jotto/congrats";
import GuessedWords from "../components/jotto/GuessedWords";
import { connect } from "react-redux";

class Jotto extends Component {
  render() {
    console.log(this.props.success);
    return (
      <div className="jotto-wrapper">
        <Congrats />
        <GuessedWords
          guessedWords={[
            {
              guessedWord: "train",
              letterMatchCount: 3
            }
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
    const { jotto : {success : {success }}} = state;
    return {
        success
  };
};
export default connect(mapStateToProps)(Jotto);
