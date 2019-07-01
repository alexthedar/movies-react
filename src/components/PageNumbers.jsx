import React from "react";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import * as actions from "../store/actions/index";

export const PageNumbers = props => {
  const {
    firstPage,
    lastPage,
    nextPage,
    prevPage,
    activePage,
    totalPages
  } = props;

  const pageDisplay = `${activePage} of ${totalPages}`;
  const prevDisable = activePage === 1;
  const nextDisable = activePage === totalPages;
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Pagination size="lg">
        <Pagination.First disabled={prevDisable} onClick={() => firstPage()} />
        <Pagination.Prev
          disabled={prevDisable}
          onClick={() => prevPage(activePage)}
        />
        {activePage > 1 && <React.Fragment></React.Fragment>}
        <Pagination.Item disabled>{pageDisplay}</Pagination.Item>
        <Pagination.Next
          disabled={nextDisable}
          onClick={() => nextPage(activePage)}
        />
        <Pagination.Last
          disabled={nextDisable}
          onClick={() => lastPage(totalPages)}
        />
        {activePage !== totalPages && <React.Fragment></React.Fragment>}
      </Pagination>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    firstPage: () => dispatch(actions.goToPage(1)),
    lastPage: lastPage => dispatch(actions.goToPage(lastPage)),
    nextPage: activePage => dispatch(actions.goToPage(activePage + 1)),
    prevPage: activePage => dispatch(actions.goToPage(activePage - 1))
  };
};

export function mapStateToProps(state) {
  const { totalPages, activePage, queryString } = state.search;
  return { totalPages, activePage, queryString };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNumbers);
