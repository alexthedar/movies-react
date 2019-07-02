import React from "react";
import { connect } from "react-redux";
import { Navbar, Container, Nav, Spinner, Alert } from "react-bootstrap";
import SearchForm from "../components/Search";

const generateAppContents = props => {
  const { error, isFetching } = props;

  if (error) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <br />
        <div>
          <h3>{error}</h3>
        </div>
        <br />
        <p>
          Please refresh the page and try again. If problem persists please
          constant site administrator
        </p>
      </Alert>
    );
  } else if (isFetching) {
    return (
      <div style={{ position: "fixed", top: "10%", left: "50%" }}>
        <Spinner animation="border" role="status" variant="primary" size="lg">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return props.children;
};

export const Layout = props => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">Movies For Jeff!!</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <SearchForm />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main style={{ paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
        <Container>{generateAppContents(props)}</Container>
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
