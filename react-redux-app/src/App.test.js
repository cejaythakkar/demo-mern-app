import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Enzyme,{shallow} from 'enzyme';
import EmzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EmzymeAdapter()})

it("renders without crashing", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});

// it = test
const add = jest.fn(() => 3);

// test("fake test", () => {
//   expect(true).toBeTruthy();
// });

// Uni test
// it only test one thing
// const add = (x, y) => x + y;

// test("should ", () => {
//   expect(add(1, 3)).toBe(3);
//   expect(add).toHaveBeenCalledTimes(1);
//   expect(add).toHaveBeenCalledWith(1 , 2);
// });   

//integration

function total(subtotal,total){
 return add(subtotal,total);
} 

// test('total' , () => {
//   expect(total(5,20)).toBe(25)
// })

// test('renders without crashing',() => {
//   const wrapper = shallow(<App />)
// })