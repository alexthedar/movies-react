import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import fakeStore from "../../store/__mocks__/fakeStore";
import { MovieTable, mapStateToProps } from "../MovieTable";

Enzyme.configure({ adapter: new Adapter() });

describe("MovieTable Component", () => {
  let wrapper = {};

  const props = {
    ...fakeStore.movies,
    ...fakeStore.search
  };

  beforeEach(() => {
    wrapper = shallow(<MovieTable {...props} />);
  });

  it("renders without crashing", () => {
    console.log(wrapper.debug());
    expect(wrapper.exists()).toEqual(true);
  });

  // it("dispatches loadTops on mount", () => {
  //   expect(props.loadTops.mock.calls.length).toEqual(1);
  // });

  // it("dispatches setStockSymbol if item clicked", () => {
  //   const tableBodyRow = wrapper.find("tbody").childAt(0);
  //   tableBodyRow.simulate("click");
  //   expect(props.setStockSymbol.mock.calls.length).toEqual(1);
  //   expect(props.history.push.mock.calls.length).toEqual(1);
  // });

  // it("has h3, thead, tbody, tr, th and td html tags", () => {
  //   expect(wrapper.find("h3")).to.have.length(1);
  //   expect(wrapper.find("thead")).to.have.length(1);
  //   expect(wrapper.find("tbody")).to.have.length(1);
  //   expect(wrapper.find("tr")).to.have.length(3);
  //   expect(wrapper.find("th")).to.have.length(7);
  //   expect(wrapper.find("td")).to.have.length(14);
  // });

  it("should have a mapStateToProps function", () => {
    const state = {
      movies: {
        moviesList: {
          1: [{ title: "test" }]
        }
      },
      search: {
        totalPages: 3,
        activePage: 1
      }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      moviesList: { 1: [{ title: "test" }] },
      activePage: 1,
      totalPages: 3
    };
    expect(actualResult).toEqual(expectedResult);
  });
});
