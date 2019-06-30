import React from "react";
import { connect } from "react-redux";
import { Card, Image, ListGroup, Col, Row } from "react-bootstrap";

export const CompanyInfo = ({
  symbol,
  companyName,
  primaryExchange,
  latestPrice,
  latestSource,
  week52High,
  week52Low,
  logo,
  CEO,
  description,
  industry,
  website
}) => (
  <Card>
    <Card.Body>
      <Card.Title>
        <h3 style={{ textAlign: "center", paddingBottom: "1rem" }}>
          <a
            style={{ textDecoration: "none" }}
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {symbol}
          </a>
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center"
          }}
        >
          <span style={{ paddingLeft: "1rem" }}>{companyName}</span>
          <Image
            style={{ textAlign: "right", maxHeight: "10rem" }}
            src={logo}
            thumbnail
          />
        </div>
      </Card.Title>
      <ListGroup>
        <ListGroup.Item
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Col style={{ borderRight: "1px solid black" }}>
            <strong>{latestSource}: </strong>
            <span className="text-primary">{latestPrice}</span>
          </Col>

          <Col style={{ borderLeft: "1px solid black", textAlign: "right" }}>
            <strong>Exchange: </strong>
            {primaryExchange}
          </Col>
        </ListGroup.Item>
        <ListGroup.Item
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Col style={{ borderRight: "1px solid black" }}>
            <strong>Week 52 High: </strong>
            <span className="text-success">{week52High}</span>
          </Col>

          <Col style={{ borderLeft: "1px solid black", textAlign: "right" }}>
            <strong>Week 52 Low: </strong>
            <span className="text-danger">{week52Low}</span>
          </Col>
        </ListGroup.Item>
      </ListGroup>
      <Row
        style={{
          paddingTop: ".5rem"
        }}
      >
        <Col>
          <strong>CEO: </strong>
          {CEO}
        </Col>
        <Col>
          <strong>Industry: </strong>
          {industry}
        </Col>
      </Row>
      <Row style={{ paddingTop: ".5rem" }}>
        <Col>{description}</Col>
      </Row>
    </Card.Body>
  </Card>
);

export function mapStateToProps(state) {
  const {
    quotes: {
      symbol,
      companyName,
      primaryExchange,
      latestPrice,
      latestSource,
      week52High,
      week52Low
    },
    companyInfo: { CEO, description, industry, website },
    logo
  } = state.stockDetail;
  return {
    symbol,
    companyName,
    primaryExchange,
    latestPrice,
    latestSource,
    week52High,
    week52Low,
    logo,
    CEO,
    description,
    industry,
    website
  };
}

export default connect(
  mapStateToProps,
  null
)(CompanyInfo);
