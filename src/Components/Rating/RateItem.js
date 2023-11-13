import React from "react";
import { Col, Row } from "react-bootstrap";
import rate from "../../Assets/rate.png";
const RateItem = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col className="d-flex me-5">
          <div className="rate-name d-inline ms-2">Ahmad Mahmood</div>
          <img className="ms-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate d-inline ">4.3</div>
        </Col>
      </Row>
      <Row className="border-bottom ms-1">
        <Col className="d-flex me-4 pb-2">
          <div className="rate-description d-inline ">
            Very good product I used it for 2 months and it's super so far.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RateItem;
