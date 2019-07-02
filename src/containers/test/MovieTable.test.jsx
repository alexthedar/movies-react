import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import fakeStore from "../../store/__mocks__/fakeStore";
import { MovieTable, mapStateToProps } from "../MovieTable";
import { Table, Image } from "react-bootstrap";
import PageNumbers from "../../components/PageNumbers";

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
    expect(wrapper.exists()).toEqual(true);
  });

  it("has thead, tbody", () => {
    expect(wrapper.find("thead")).toHaveLength(1);
    expect(wrapper.find("tbody")).toHaveLength(1);
  });

  it("has 4 columns", () => {
    expect(wrapper.find("th")).toHaveLength(4);
  });

  it("has rows for each entry + head", () => {
    expect(wrapper.find("tr")).toHaveLength(3);
  });

  it("has cells for each column/entry", () => {
    expect(wrapper.find("td")).toHaveLength(8);
  });

  it("has 2 PageNumber component", () => {
    expect(wrapper.find(PageNumbers)).toHaveLength(2);
  });

  it("has a Table component", () => {
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it("has poster images for each entry", () => {
    expect(wrapper.find(Image)).toHaveLength(2);
  });

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
