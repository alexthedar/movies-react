import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Pagination } from "react-bootstrap";
import { PageNumbers, mapStateToProps } from "../PageNumbers";

Enzyme.configure({ adapter: new Adapter() });

describe("PageNumbers Component", () => {
  let wrapper = {};
  const dispatch = jest.fn();
  const props = {
    totalPages: 10,
    activePage: 2,
    queryString: "test",
    firstPage: jest.fn(),
    lastPage: jest.fn(),
    nextPage: jest.fn(),
    prevPage: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<PageNumbers {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("has Pagination (First, Prev, Item, Next, Last) components", () => {
    expect(wrapper.find(Pagination)).toHaveLength(1);
    expect(wrapper.find(Pagination.First)).toHaveLength(1);
    expect(wrapper.find(Pagination.Prev)).toHaveLength(1);
    expect(wrapper.find(Pagination.Item)).toHaveLength(1);
    expect(wrapper.find(Pagination.Next)).toHaveLength(1);
    expect(wrapper.find(Pagination.Last)).toHaveLength(1);
  });

  it("disables First and Prev is activePage = 1", () => {
    wrapper.setProps({ activePage: 1 });
    expect(wrapper.find(Pagination.First).props().disabled).toEqual(true);
    expect(wrapper.find(Pagination.Prev).props().disabled).toEqual(true);
  });

  it("disables Next and Last is activePage = totalPages", () => {
    wrapper.setProps({ activePage: 10 });
    expect(wrapper.find(Pagination.Next).props().disabled).toEqual(true);
    expect(wrapper.find(Pagination.Last).props().disabled).toEqual(true);
  });

  it("triggers firstPage on Pagination.First click", () => {
    const first = wrapper.find(Pagination.First);
    first.simulate("click");
    expect(props.firstPage.mock.calls.length).toEqual(1);
  });
  it("triggers prevPage on Pagination.Prev click", () => {
    const prev = wrapper.find(Pagination.Prev);
    prev.simulate("click");
    expect(props.prevPage.mock.calls.length).toEqual(1);
    expect(props.prevPage).toHaveBeenCalledWith(2);
  });
  it("triggers nextPage on Pagination.Next click", () => {
    const next = wrapper.find(Pagination.Next);
    next.simulate("click");
    expect(props.nextPage.mock.calls.length).toEqual(1);
    expect(props.nextPage).toHaveBeenCalledWith(2);
  });
  it("triggers lastPage on Pagination.Last click", () => {
    const last = wrapper.find(Pagination.Last);
    last.simulate("click");
    expect(props.lastPage.mock.calls.length).toEqual(1);
    expect(props.lastPage).toHaveBeenCalledWith(10);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      search: {
        totalPages: 10,
        activePage: 2,
        queryString: "test"
      }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      totalPages: 10,
      activePage: 2,
      queryString: "test"
    };

    expect(actualResult).toEqual(expectedResult);
  });
});
