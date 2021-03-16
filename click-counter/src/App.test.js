import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent).toHaveLength(1);
});

test("renders button", () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button).toHaveLength(1);
});

test("renders counter display", () => {
  const wrapper = setUp();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay).toHaveLength(1);
});

test("counter starts at 0", () => {});

test("clicking on button icrements counter display", () => {});
