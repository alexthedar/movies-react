import React, { Component } from "react";
import { Table, Image } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { getImage } from "../api/moviedb";

const columnsTops = [
  { id: "poster_path", header: "Poster" },
  { id: "original_title", header: "Title" },
  { id: "release_date", header: "Release Date" },
  { id: "overview", header: "Summary" }
];

const image = path => {
  const url = `https://image.tmdb.org/t/p/w92/${path}`;
  if (path !== null) {
    return <Image src={url} fluid />;
  } else {
    return "No Image";
  }
};

const tableRow = (columns, data) =>
  columns.map(column => (
    <td key={column.id} style={{ verticalAlign: "middle" }}>
      {column.id === "poster_path" ? image(data[column.id]) : data[column.id]}
    </td>
  ));

const tableHeader = columns =>
  columns.map(column => <th key={column.id}>{column.header}</th>);

export class MarketTable extends Component {
  componentDidMount() {
    const { loadMovies } = this.props;
    loadMovies("searchMovie", { query: "raider" });
  }

  handleClick(symbol) {
    const { setStockSymbol, history } = this.props;
    setStockSymbol(symbol);
    history.push(`/stock/${symbol}`);
  }

  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>{tableHeader(columnsTops)}</tr>
          </thead>
          <tbody>
            {// eslint-disable-next-line array-callback-return
            movies.map((row, idx) => {
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
    loadMovies: (path, options) => dispatch(actions.getMovies(path, options))
  };
};

export function mapStateToProps(state) {
  const { movies } = state.movies;
  return { movies };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketTable);
