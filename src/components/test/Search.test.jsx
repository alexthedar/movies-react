import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SearchForm, mapStateToProps } from "../Search";
import { Form, Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import fakeData from "../../store/__mocks__/fakeStore";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/iex-get.js");

describe("SearchForm Component", () => {
  let wrapper = {};

  const props = {
    setStockSymbol: jest.fn(),
    history: { push: jest.fn() },
    ...fakeData.search
  };

  beforeEach(() => {
    props.setStockSymbol.mockClear();
    wrapper = shallow(<SearchForm {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("handleChange changes state via typeahead input ", () => {
    const instance = wrapper.instance();
    wrapper.find(Typeahead).simulate("change", "test");
    expect(instance.state.searchText).toEqual("test");
  });

  it("handleSelect changes state", () => {
    const instance = wrapper.instance();
    instance.handleSelect('select')
    expect(instance.state.searchText).toEqual("select");
  });

  it("handleSubmit calls setStockSymbol and history.push ", () => {
    const e = { preventDefault: jest.fn() }
    wrapper.setState({searchText: 'SYMBOL'})
    const instance = wrapper.instance();
    instance.handleSubmit(e)
    expect(props.setStockSymbol.mock.calls.length).toEqual(1);
    expect(props.history.push.mock.calls.length).toEqual(1);
  });

  it("has Form, TypeAhead, Button, Bootstrap(InputGroup), InputGroupAppend components", () => {
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(Typeahead)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find("Bootstrap(InputGroup)")).toHaveLength(1);
    expect(wrapper.find("InputGroupAppend")).toHaveLength(1);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      search: { refSymbolTypeAhead: ["1", "2", "3"] }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      refSymbolTypeAhead: ["1", "2", "3"]
    };

    expect(actualResult).toEqual(expectedResult);
  });
});
