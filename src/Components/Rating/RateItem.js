import React from "react";
import { Col, Row } from "react-bootstrap";
import rate from "../../Assets/rate.png";
import GenerateStarsHook from "../../Hooks/GenerateStarsHook";
const RateItem = ({ user, comment, ratings }) => {
  const stars = GenerateStarsHook(ratings);
  return (
    <div>
      <Row className="mt-3">
        <Col className="d-flex me-5">
          <div className="rate-name d-inline ms-2 me-1">{user}</div>
          {stars ? (
            stars
          ) : (
            <>
              <i className="star fa-regular fa-star text-warning"></i>
              <i className="star fa-regular fa-star text-warning"></i>
              <i className="star fa-regular fa-star text-warning"></i>
              <i className="star fa-regular fa-star text-warning"></i>
              <i className="star fa-regular fa-star text-warning"></i>
            </>
          )}
        </Col>
      </Row>
      <Row className="border-bottom ms-1">
        <Col className="d-flex me-4 pb-2">
          <div className="rate-description d-inline ">{comment}</div>
        </Col>
      </Row>
    </div>
  );
};

export default RateItem;
