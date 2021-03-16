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

test("renders counter display", () => {
  const wrapper = setUp();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay).toHaveLength(1);
});

test("counter starts at 0", () => {
  const wrapper = setUp();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

describe("Increment", () => {
  test("renders increment button", () => {
    const wrapper = setUp();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("counter increments when button is clicked", () => {
    const wrapper = setUp();

    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click");

    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
  });
});

describe("decrement button", () => {
  test("renders decrement button", () => {
    const wrapper = setUp();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });

  test("clicking decrement button", () => {
    const wrapper = setUp();

    const incButton = findByTestAttr(wrapper, "increment-button");
    incButton.simulate("click");

    const decButton = findByTestAttr(wrapper, "decrement-button");
    decButton.simulate("click");

    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
});

describe("error when counter goes below 0", () => {
  test("error is hidden", () => {
    const wrapper = setUp();
    const errorDiv = findByTestAttr(wrapper, "error-message");

    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });
});

describe("counter is 0 and decrement is clicked", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
  });
  test("decrement click when count 0 error shows", () => {
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(false);
  });
  test("counter still displays 0", () => {
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
  test("clicking increment clears the error", () => {
    const incButton = findByTestAttr(wrapper, "increment-button");
    incButton.simulate("click");
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });
});
