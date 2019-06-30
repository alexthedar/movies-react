import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NewsItem, NewsList, mapStateToProps } from "../companyNews";
import { Card } from "react-bootstrap";
import fakeData from "../../store/__mocks__/fakeStore";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/iex-get.js");

describe("NewsList Component", () => {
  let wrapper = {};

  const props = {
    news: fakeData.stockDetail.news,
    companyName: fakeData.stockDetail.quotes.companyName
  };

  beforeEach(() => {
    wrapper = mount(<NewsList {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("has h3 & NewsItem components when news present", () => {
    expect(wrapper.find("h3")).toHaveLength(1);
    expect(wrapper.find(NewsItem)).toHaveLength(2);
  });

  it("has h4 components when no news present", () => {
    wrapper.setProps({ news: [], companyName: "test" });
    expect(wrapper.find("h4")).toHaveLength(1);
    expect(wrapper.find(NewsItem)).toHaveLength(0);
  });

  it("has h4 components when no news present", () => {
    const newsItem = wrapper.find(NewsItem).at(0);
    expect(newsItem.find(Card)).toHaveLength(1);
    expect(newsItem.find('CardHeader')).toHaveLength(1);
    expect(newsItem.find('CardBody')).toHaveLength(1);
    expect(newsItem.find('CardFooter')).toHaveLength(1);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      stockDetail: {
        news: [
          {
            headline: "a",
            source: "b",
            summary: "d",
            url: "c"
          }
        ],
        quotes: { companyName: "test" }
      }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      news: [
        {
          headline: "a",
          source: "b",
          summary: "d",
          url: "c"
        }
      ],
      companyName: "test"
    };

    expect(actualResult).toEqual(expectedResult);
  });
});
