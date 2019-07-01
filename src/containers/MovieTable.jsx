import React from "react";
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

const text = data => {
  if (!data) {
    return "No information available";
  } else {
    return data;
  }
};

const tableRow = data =>
  columnsTops.map(column => (
    <td key={column.id} style={{ verticalAlign: "middle" }}>
      {column.id === "poster_path"
        ? image(data[column.id])
        : text(data[column.id])}
    </td>
  ));

const tableHeader = () =>
  columnsTops.map(column => <th key={column.id}>{column.header}</th>);

export const MovieTable = ({ moviesList, totalPages }) => {
  return (
    <React.Fragment>
      <Table bordered hover responsive="lg">
        <thead>
          <tr>{tableHeader()}</tr>
        </thead>
        <tbody>
          {moviesList.map(row => (
            <tr key={row.id}>{tableRow(row)}</tr>
          ))}
        </tbody>
      </Table>
      {totalPages > 1 && <PageNumbers />}
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadMovies: (queryString, activePage) =>
      dispatch(actions.getMovies({ queryString, activePage }))
  };
};

export function mapStateToProps(state) {
  const { moviesList } = state.movies;
  const { totalPages } = state.search;
  return { moviesList, totalPages };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieTable);
