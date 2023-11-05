import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../Assets/laptops.png";

const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <img className="dicount-img" src={laptops} alt="Laptop image" />
        </Col>
        <Col sm="6">
          <div className="discount-title">
            Discount up to 30% on all laptops!
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
