import correctGuessAction from "./correctguess.action";
import { CORRECT_GUESS } from "./actionTypes";

describe("correct guess action", () => {
  it("should return action with type `CORRECT_GUESS`", () => {
    let result = correctGuessAction();
    expect(result).toEqual({ type: CORRECT_GUESS });
  });
});
