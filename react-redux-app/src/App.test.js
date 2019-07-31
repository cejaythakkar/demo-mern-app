import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it = test

test("fake test", () => {
  expect(true).toBeTruthy();
});

// Uni test
// it only test one thing
const add = (x, y) => x + y;

test("should ", () => {
  expect(add(1, 2)).toBe(3);
});

//integration

function total(subtotal,total){
 return add(subtotal,total);
} 

test('total' , () => {
  expect(total(5,20)).toBe(25)
})