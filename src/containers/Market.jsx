import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const columnsTops = [
  { id: "symbol", header: "Symbol" },
  { id: "askPrice", header: "Ask Price" },
  { id: "askSize", header: "Ask Size" },
  { id: "bidPrice", header: "Bid Price" },
  { id: "bidSize", header: "Bid Size" },
  { id: "lastSalePrice", header: "Last Sale Price" },
  { id: "lastSaleSize", header: "Last Sale Size" }
];

const tableRow = (columns, data) =>
  columns.map(column => <td key={column.id}>{data[column.id]}</td>);

const tableHeader = columns =>
  columns.map(column => <th key={column.id}>{column.header}</th>);

export class MarketTable extends Component {
  componentDidMount() {
    const { loadTops } = this.props;
    loadTops();
  }

  handleClick(symbol) {
    const { setStockSymbol, history } = this.props;
    setStockSymbol(symbol);
    history.push(`/stock/${symbol}`);
  }

  render() {
    const { marketTops } = this.props;
    return (
      <React.Fragment>
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Top 100 Best Quoted Bids & Offers
        </h3>
        <Table striped bordered hover>
          <thead>
            <tr>{tableHeader(columnsTops)}</tr>
          </thead>
          <tbody>
            {// eslint-disable-next-line array-callback-return
            marketTops.map((row, idx) => {
              while (idx < 100) {
                return (
                  <tr onClick={() => this.handleClick(row.symbol)} key={idx}>
                    {tableRow(columnsTops, row)}
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTops: () => dispatch(actions.getMarketTops()),
    setStockSymbol: symbol => dispatch(actions.setStockSymbol(symbol))
  };
};

export function mapStateToProps(state) {
  const { marketTops } = state.market;
  return { marketTops };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketTable);
