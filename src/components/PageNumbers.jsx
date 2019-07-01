import React from "react";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";

export const PageNumbers = ({ totalPages, activePage }) => {
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => console.log(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Pagination size="lg">{items}</Pagination>
    </div>
  );
};

export function mapStateToProps(state) {
  const { totalPages, activePage } = state.app;
  return { totalPages, activePage };
}

export default connect(
  mapStateToProps,
  null
)(PageNumbers);
