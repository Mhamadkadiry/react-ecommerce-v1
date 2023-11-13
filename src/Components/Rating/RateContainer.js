import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../Assets/rate.png";
import RateItem from "./RateItem";
import RateComment from "./RateComment";
import Pagination from "../Utilities/Pagination";
const RateContainer = () => {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-title d-inline p-1">Ratings</div>
          <img
            className="mt-2"
            src={rate}
            alt="star"
            height="16px"
            width="16px"
          />
          <div className="cat-rate d-inline p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 ratings)</div>
        </Col>
      </Row>
      <RateComment />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <Pagination />
    </Container>
  );
};

export default RateContainer;
