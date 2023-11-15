import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../Assets/mobile.png";
const AdminOrderItem = () => {
  return (
    <Col sm="12">
      <Link
        to="/admin/orders/23"
        className="cart-item-body my-2 px-1 d-flex"
        style={{ textDecoration: "none" }}
      >
        <img width="160px" height="197px" src={mobile} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text"> Order #2321</div>
              <div className="d-inline pt-2 me-2 cat-text">Delete</div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="cat-title d-inline">
                <h6>
                  Samsung Galaxy S4 I337 16GB 4G LTE Unlocked GSM Android Cell
                  Phone
                </h6>{" "}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className=" d-flex">
              <h6>
                <div className="brand-badge badge bg-dark text-light">
                  Samsung
                </div>{" "}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text pt-1 d-inline">Color</div>
                <div
                  className="color ms-2 border"
                  style={{ backgroundColor: "#E52C2C" }}
                ></div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col
              sm="12"
              className="d-flex flex-row align-items-center justify-content-between"
            >
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text pt-1 d-inline">Quantity</div>
                <input
                  className="mx-2 mt-1"
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
              </div>
              <div className="d-inline pt-2 barnd-text">EUR 1400 </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminOrderItem;
