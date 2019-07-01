import React from "react";
import { connect } from "react-redux";
import Layout from "./hoc/Layout";
import MovieTable from "./containers/MovieTable";

export const App = ({ moviesList }) => {
  return (
    <div>
      <Layout>
        {moviesList ? (
          <MovieTable />
        ) : (
          <h3
            style={{ paddingTop: "5rem" }}
            className="d-flex justify-content-center align-items-center"
          >
            Search for some movies.
          </h3>
        )}
      </Layout>
    </div>
  );
};

export function mapStateToProps(state) {
  const { moviesList } = state.movies;
  return { moviesList };
}

export default connect(
  mapStateToProps,
  null
)(App);
