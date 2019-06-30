/* eslint-disable */
import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import asyncComponent from "./hoc/asyncComponent";
import * as actions from "./store/actions/index";
import Layout from "./hoc/Layout";
import Home from './containers/Home'

// const asyncStockDetail = asyncComponent(() => {
//   return import("./containers/stock-detail");
// });

class App extends Component {
  render() {
    let routes = (
      <Switch>
        {/* <Route path="/stock/:symbol" component={asyncStockDetail} /> */}
        {/* <Route exact path="/" component={MarketTable} /> */}
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRefSymbols: () => dispatch(actions.getRefSymbols())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(App));
