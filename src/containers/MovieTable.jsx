import React, { Component } from "react";
import { Table, Image } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import PageNumbers from "../components/PageNumbers";

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

const tableRow = data =>
  columnsTops.map(column => (
    <td key={column.id} style={{ verticalAlign: "middle" }}>
      {column.id === "poster_path" ? image(data[column.id]) : data[column.id]}
    </td>
  ));

const tableHeader = () =>
  columnsTops.map(column => <th key={column.id}>{column.header}</th>);

export class MovieTable extends Component {
  componentDidMount() {
    const { loadMovies } = this.props;
    loadMovies("raider");
  }

  render() {
    const { movies, totalPages } = this.props;
    return (
      <React.Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>{tableHeader()}</tr>
          </thead>
          <tbody>
            {// eslint-disable-next-line array-callback-return
            movies.map(row => (
              <tr key={row.id}>{tableRow(row)}</tr>
            ))}
          </tbody>
        </Table>
        {totalPages > 1 && <PageNumbers />}
        <PageNumbers />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: query => dispatch(actions.getMovies(query))
  };
};

export function mapStateToProps(state) {
  const { movies } = state.movies;
  const { totalPages } = state.app;
  return { movies, totalPages };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieTable);
