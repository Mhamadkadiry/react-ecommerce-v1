import React from "react";
import { Col, Row } from "react-bootstrap";

const ProductDescription = () => {
  return (
    <div>
      <Row className="mt-2">
        <Col md="8">
          <div className="cat-title d-inline">
            <h4>
              Samsung Galaxy S4 I337 16GB 4G LTE Unlocked GSM Android Cell Phone
            </h4>{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <h6 style={{ color: "#337ab7" }}>
            Product of{" "}
            <a className="brand-badge badge bg-info text-dark" href="#">
              Samsung
            </a>{" "}
          </h6>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1">
          <h6 class="product-title-price">
            <small>PRICED at</small>
          </h6>
          <h3>EUR 399</h3>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1">
          <div className="product-description-text d-inline">
            Available Quantity: 52{" "}
          </div>
          <div className="d-flex">
            <div className="product-description-text">Colors:</div>
          </div>
          <div className="d-flex p-2">
            <div
              className="color mx-1"
              style={{
                backgroundColor: "red",
                border: "3px solid red",
              }}
            ></div>
            <div
              className="color mx-1"
              style={{
                backgroundColor: "green",
                border: "3px solid green",
              }}
            ></div>
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <div className="product-description-text">Description :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            Apple today announced iPhone 14 Pro and iPhone 14 Pro Max, the most
            advanced Pro lineup ever, featuring the Dynamic Island — a new
            design that introduces an intuitive way to experience iPhone — and
            the Always-On display. Powered by A16 Bionic, the fastest chip ever
            in a smartphone, iPhone 14 Pro introduces a new class of pro camera
            system, with the first-ever 48MP Main camera on iPhone featuring a
            quad-pixel sensor.
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-cart-add px-3 py-3 d-inline">Add to cart</div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDescription;
