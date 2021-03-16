import { shallow } from "enzyme";
import React from "react";
import Congrats from "./Congrats";

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {});
