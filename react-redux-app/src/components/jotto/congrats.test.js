import React from "react";
import { shallow } from "enzyme";
import Congrats from "./congrats";
import { findByTestAttr, checkProp } from "../../test/testUtils";

const defaultProps = {success:false}

const setUp = (props = {}) => {
  const setUpProps = {...defaultProps,...props};
  return shallow(<Congrats {...setUpProps} />);
};

describe("congrats", () => {
  it("should render without error", () => {
    const wrapper = setUp();
    const $el = findByTestAttr(wrapper, "congrats-wrapper");
    expect($el.length).toBe(1);
  });

  it("should rende no text when `success` prop os false", () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, "congrats-wrapper");
    expect(component.text()).toBe("");
  });

  it("should render no-empty `congrats` message when `success` prop is true", () => {
    const wrapper = setUp({ success: true });
    const congratsMessage = findByTestAttr(wrapper, "congrats-message");
    expect(congratsMessage.text()).not.toBe(0);
  });

  it("should not throw warning with expected props", () => {
    const expectedProps = { success: false };
    checkProp(Congrats, expectedProps);
  });
});
