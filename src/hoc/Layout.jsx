import React from "react";
import { connect } from "react-redux";
// import { Navbar, Container, Nav, Spinner, Alert } from "react-bootstrap";
// import SearchForm from "../components/Search";

const generateAppContents = props => {
  const { error, isFetching } = props;

  if (error) {
    return (
      <h1>ERROR</h1>
    );
  } else if (isFetching) {
    return (
      <h1>LOADING</h1>
    );
  }

  return props.children;
};

export const Layout = props => {
  return (
    <div>
      <main style={{ paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
        {generateAppContents(props)}
      </main>
    </div>
  );
};

export function mapStateToProps(state) {
  const { error, isFetching } = state.app;
  return { error, isFetching };
}

export default connect(
  mapStateToProps,
  null
)(Layout);
