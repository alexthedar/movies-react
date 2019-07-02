import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchForm, mapStateToProps } from "../Search";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import fakeData from "../../store/__mocks__/fakeStore";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchForm Component", () => {
  let wrapper = {};

  const props = {
    search: jest.fn(),
    ...fakeData.search
  };

  beforeEach(() => {
    wrapper = shallow(<SearchForm {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("handleSubmit calls searchMovies", () => {
    const e = { preventDefault: jest.fn() };
    wrapper.setState({ queryString: "TEST" });
    const instance = wrapper.instance();
    instance.handleSubmit(e);
    expect(props.search.mock.calls.length).toEqual(1);
  });

  it("handleChange sets state", () => {
    const event = { target: { value: "CHANGED" } };
    wrapper.setState({ queryString: "TEST" });
    const input = wrapper.find(FormControl);
    input.simulate("change", event);
    expect(wrapper.state().queryString).toEqual("CHANGED");
  });

  it("has Form, InputGroup, InputGroup.Prepend, InputGroup.Text, FormControl FaSearch components", () => {
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(InputGroup)).toHaveLength(1);
    expect(wrapper.find(InputGroup.Prepend)).toHaveLength(1);
    expect(wrapper.find(InputGroup.Text)).toHaveLength(1);
    expect(wrapper.find(FormControl)).toHaveLength(1);
    expect(wrapper.find(FaSearch)).toHaveLength(1);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      search: {
        queryString: "test"
      }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      queryString: "test"
    };

    expect(actualResult).toEqual(expectedResult);
  });
});
