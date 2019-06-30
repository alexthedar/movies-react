import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CompanyInfo, mapStateToProps } from "../companyInfo";
import { Card, Col } from "react-bootstrap";
import fakeData from "../../store/__mocks__/fakeStore";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/iex-get.js");

describe("CompanyInfo Component", () => {
  let wrapper = {};

  const props = {
    ...fakeData.stockDetail
  };

  beforeEach(() => {
    wrapper = shallow(<CompanyInfo {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("has h3 & NewsItem components when news present", () => {
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find('CardBody')).toHaveLength(1);
    expect(wrapper.find('CardTitle')).toHaveLength(1);
    expect(wrapper.find('Bootstrap(ListGroupItem)')).toHaveLength(2);
    expect(wrapper.find('Bootstrap(Image)')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find(Col)).toHaveLength(7);
    expect(wrapper.find('Bootstrap(Row)')).toHaveLength(2);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      stockDetail: {
        quotes: {
          symbol: "SYM",
          companyName: "name",
          primaryExchange: "exch",
          latestPrice: 78,
          latestSource: "sour",
          week52High: 90,
          week52Low: 9
        },
        companyInfo: {
          CEO: "someone",
          description: "description",
          industry: "indus",
          website: "www.website.com"
        },
        logo: "www.logo.com",
        news: [
          {
            headline: "a",
            source: "b",
            summary: "d",
            url: "c"
          }
        ]
      }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      symbol: "SYM",
      companyName: "name",
      primaryExchange: "exch",
      latestPrice: 78,
      latestSource: "sour",
      week52High: 90,
      week52Low: 9,
      CEO: "someone",
      description: "description",
      industry: "indus",
      website: "www.website.com",
      logo: "www.logo.com"
    };

    expect(actualResult).toEqual(expectedResult);
  });
});
