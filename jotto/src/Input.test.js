import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("should render component without error", () => {});
    test("should render input box", () => {});
    test("should render submit button", () => {});

    describe("word has been guessed", () => {
      test("should render component without error", () => {});
      test("should not render input box", () => {});
      test("should not render submit button", () => {});
    });
  });
});
