import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PageNumbers } from "../PageNumbers";

Enzyme.configure({ adapter: new Adapter() });

describe("PageNumbers Component", () => {
  let wrapper = {};

  const props = {
    activePage: 1,
    totalPages: 8
  };

  beforeEach(() => {
    props.setStockSymbol.mockClear();
    wrapper = shallow(<PageNumbers {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
