import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Counter from "./counter";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper ? wrapper.find(`[data-test="${val}"]`) : null;
};
test("render without error", () => {
  const wrapper = shallow(<Counter />);
  const counterComponent = findByTestAttr(wrapper, "component-counter");
  expect(counterComponent.length).toBe(1);
});

test("renders increment button", () => {
  expect(
    findByTestAttr(shallow(<Counter />), "component-counter-button").length
  ).toBe(1);
});

test("renders counter display", () => {
    const wrapper = shallow(<Counter />),
        counterDisplay = findByTestAttr(wrapper,'component-counter-display');
    expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("clicking button increments counter display", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper,'component-counter-button');
  button.simulate("click");
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper,'component-counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});
