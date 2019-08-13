import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProp } from "../../test/testUtils";
import GuessWords from "./GuessedWords";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3
    }
  ]
};

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};
describe("Guessed Words", () => {
  describe("when there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ guessedWords: [] });
    });
    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "guessed-words-wrapper");
      expect(component.length).toBe(1);
    });
    it("should render instruction to guess a word", () => {
      const instructions = findByTestAttr(wrapper, "guess-word-instructions");
      expect(instructions.text()).not.toBe(0);
    });
  });
  describe("when there are guessed words", () => {
    let guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 }
      ],
      wrapper;

    beforeEach(() => {
      wrapper = setUp({ guessedWords });
    });

    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "guessed-words-wrapper");
      expect(component.length).toBe(1);
    });

    it("should render `guessed words` section", () => {
      const guessedWordsList = findByTestAttr(wrapper, "guessed-words-list");
      expect(guessedWordsList.length).toBe(1);
    });

    it("should display correct number of guessed words", () => {
      const guessedWordsList = findByTestAttr(wrapper, "guessed-word");
      expect(guessedWordsList.length).toBe(guessedWords.length);
    });
  });

  it("should not throw warning with expected props", () => {
    checkProp(GuessWords, defaultProps);
  });
});
