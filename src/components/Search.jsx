import React, { Component } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import * as actions from "../store/actions/index";

export class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value.toUpperCase()
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.searchText);
    // const { setStockSymbol, history } = this.props;
    // setStockSymbol(this.state.searchText);
    // history.push(`/stock/${this.state.searchText}`);
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
              autoFocus
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-box"
              type="text"
              name="Search"
              value={this.state.searchText}
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
    setStockSymbol: symbol => dispatch(actions.setStockSymbol(symbol))
  };
};

export function mapStateToProps(state) {
  const { refSymbolTypeAhead } = state.search;
  return { refSymbolTypeAhead };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchForm));
