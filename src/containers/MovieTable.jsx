import React from "react";
import { Table, Image } from "react-bootstrap";
import { connect } from "react-redux";
import PageNumbers from "../components/PageNumbers";

const columnsTops = [
  { id: "poster_path", header: "Poster" },
  { id: "original_title", header: "Title" },
  { id: "release_date", header: "Release Date" },
  { id: "overview", header: "Summary" }
];

const image = path => {
  const url = `https://image.tmdb.org/t/p/w92${path}`;
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

export const MovieTable = ({
  moviesList,
  totalPages,
  activePage,
  queryString
}) => {
  if (moviesList[activePage].length !== 0) {
    return (
      <React.Fragment>
        {totalPages > 1 && <PageNumbers />}
        <Table bordered hover responsive="lg">
          <thead>
            <tr>{tableHeader()}</tr>
          </thead>
          <tbody>
            {moviesList[activePage].map(row => (
              <tr key={row.id} className="movie-entry">
                {tableRow(row)}
              </tr>
            ))}
          </tbody>
        </Table>
        {totalPages > 1 && <PageNumbers />}
      </React.Fragment>
    );
  } else {
    return (
      <h3
        style={{ paddingTop: "5rem" }}
        className="d-flex justify-content-center align-items-center"
      >
        Nothing found for query '{queryString}' .
      </h3>
    );
  }
};

export function mapStateToProps(state) {
  const { moviesList } = state.movies;
  const { totalPages, activePage, queryString } = state.search;
  return { moviesList, totalPages, activePage, queryString };
}

export default connect(
  mapStateToProps,
  null
)(MovieTable);
