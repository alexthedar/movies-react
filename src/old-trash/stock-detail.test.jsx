import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StockDetail } from "../stock-detail";
import CompanyInfo from "../../components/companyInfo";
import CompanyNews from "../../components/companyNews";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/iex-get.js");

describe("StockDetail Component", () => {
  let wrapper = {};

  const props = {
    loadQuotesForSymbol: jest.fn(),
    loadNewsForSymbol: jest.fn(),
    loadLogoForSymbol: jest.fn(),
    loadCompanyInfoForSymbol: jest.fn(),
    match: { params: "TEST" }
  };

  beforeEach(() => {
    props.loadQuotesForSymbol.mockClear();
    props.loadNewsForSymbol.mockClear();
    props.loadLogoForSymbol.mockClear();
    props.loadCompanyInfoForSymbol.mockClear();
    wrapper = shallow(<StockDetail {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it("dispatches loadQuotesForSymbol, loadNewsForSymbol, loadLogoForSymbol, loadCompanyInfoForSymbol on mount", () => {
    expect(props.loadQuotesForSymbol.mock.calls.length).to.equal(1);
    expect(props.loadNewsForSymbol.mock.calls.length).to.equal(1);
    expect(props.loadLogoForSymbol.mock.calls.length).to.equal(1);
    expect(props.loadCompanyInfoForSymbol.mock.calls.length).to.equal(1);
  });

  it("dispatches loadQuotesForSymbol, loadNewsForSymbol, loadLogoForSymbol, loadCompanyInfoForSymbol if the location changes", () => {
    wrapper.setProps({
      location: {
        pathname: "/new/path"
      }
    });
    expect(props.loadQuotesForSymbol.mock.calls.length).to.equal(1);
    expect(props.loadNewsForSymbol.mock.calls.length).to.equal(1);
    expect(props.loadLogoForSymbol.mock.calls.length).to.equal(1);
    expect(props.loadCompanyInfoForSymbol.mock.calls.length).to.equal(1);
  });

  it("has CompanyInfo & CompanyNews components", () => {
    expect(wrapper.find(CompanyInfo)).to.have.length(1);
    expect(wrapper.find(CompanyNews)).to.have.length(1);
  });
});
