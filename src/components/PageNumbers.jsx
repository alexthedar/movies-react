import React from "react";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import * as actions from "../store/actions/index";

export const PageNumbers = ({ totalPages, activePage }) => {
  const pageDisplay = `${activePage} of ${totalPages}`;
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Pagination size="lg">
        {activePage > 1 && (
          <React.Fragment>
            <Pagination.First onClick={() => console.log(1)} />
            <Pagination.Prev onClick={() => console.log(activePage - 1)} />
          </React.Fragment>
        )}
        <Pagination.Item disabled>{pageDisplay}</Pagination.Item>
        {activePage !== totalPages && (
          <React.Fragment>
            <Pagination.Next onClick={() => console.log(activePage + 1)} />
            <Pagination.Last onClick={() => console.log(totalPages)} />
          </React.Fragment>
        )}
      </Pagination>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    selectPage: ({ queryString, activePage }) =>
      dispatch(actions.getMovies({ queryString, activePage }))
  };
};

export function mapStateToProps(state) {
  const { totalPages, activePage } = state.search;
  return { totalPages, activePage };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNumbers);
