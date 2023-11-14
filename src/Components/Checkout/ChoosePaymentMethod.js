import React from "react";
import { Row, Col } from "react-bootstrap";

const ChoosePaymentMethod = () => {
  return (
    <div>
      <div className="admin-content-text pt-5">
        Choose your preferable payment method
      </div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-4">
            <input
              name="group"
              id="group1"
              type="radio"
              value="Pay using visa card"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              Pay using visa card
            </label>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" className="d-flex">
            <input
              name="group"
              id="group1"
              type="radio"
              value="Pay when delivered"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              Pay when delivered
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline border">EUR 560</div>
          <div className="product-cart-add px-3 pt-2 d-inline ms-2">
            {" "}
            Complete payment
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePaymentMethod;
