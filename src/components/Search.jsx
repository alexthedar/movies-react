import React, { Component } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
import * as actions from "../store/actions/index";

export class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryString: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      queryString: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { search } = this.props;
    search(this.state.queryString.toLowerCase());
  }

  render() {
    return (
      <React.Fragment>
        <Form inline onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="search-icon">
                <FaSearch />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="search-box"
              autoFocus
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-box"
              type="text"
              name="Search"
              value={this.state.queryString}
              onChange={this.handleChange}
              style={{
                border: "0",
                boxShadow: "none"
              }}
            />
          </InputGroup>
        </Form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: queryString => dispatch(actions.searchMovies(queryString))
  };
};

export function mapStateToProps(state) {
  const { queryString } = state.search;
  return { queryString };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
