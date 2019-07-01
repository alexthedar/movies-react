import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import CompanyInfo from "./companyInfo";
import CompanyNews from "./companyNews";

export class StockDetail extends Component {
  componentDidMount() {
    const {
      match: {
        params: { symbol }
      }
    } = this.props;
    this.loadSymbol(symbol);
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { symbol }
      }
    } = this.props;
    if (prevProps.match.params.symbol !== symbol) {
      this.loadSymbol(symbol);
    }
  }

  loadSymbol(symbol) {
    const {
      loadQuotesForSymbol,
      loadNewsForSymbol,
      loadLogoForSymbol,
      loadCompanyInfoForSymbol
    } = this.props;
    loadQuotesForSymbol(symbol);
    loadNewsForSymbol(symbol);
    loadLogoForSymbol(symbol);
    loadCompanyInfoForSymbol(symbol);
  }

  render() {
    return (
      <React.Fragment>
        <CompanyInfo />
        <CompanyNews />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadQuotesForSymbol: symbol => dispatch(actions.getSymbolQuotes(symbol)),
    loadNewsForSymbol: symbol => dispatch(actions.getSymbolNews(symbol)),
    loadLogoForSymbol: symbol => dispatch(actions.getSymbolLogo(symbol)),
    loadCompanyInfoForSymbol: symbol =>
      dispatch(actions.getSymbolCompanyInfo(symbol))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StockDetail);
