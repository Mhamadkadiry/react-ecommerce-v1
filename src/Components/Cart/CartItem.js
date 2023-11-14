import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import mobile from "../../Assets/mobile.png";
import deleteicon from "../../Assets/delete.png";
const CartItem = ({ item }) => {
  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <img width="160px" height="197px" src={mobile} alt="Item Image" />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">Electronics</div>
            <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
              <img
                src={deleteicon}
                alt="Delete icon"
                width="20px"
                height="24px"
              />
              <div className="cat-text d-inline ms-2">Remove</div>
            </div>
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
          <Col sm="12">
            <h6>
              <div className="brand-badge badge bg-dark text-light">
                Samsung
              </div>{" "}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className=" d-flex">
            <div className="  barnd-text">EUR 1400</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="d-flex align-items-center">
            <div className="cat-text">Color</div>
            <div
              className="color mt-1 ms-2 border"
              style={{ backgroundColor: "red" }}
            ></div>
          </Col>
        </Row>

        <Row className="justify-content-between pt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text mt-md-2  d-inline">Quantity</div>
              <input
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
            </div>
            <Button className="btn btn-dark">Update</Button>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
