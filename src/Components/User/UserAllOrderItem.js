import React from "react";
import { Row, Col } from "react-bootstrap";
import mobile from "../../Assets/mobile.png";
import UserAllOrderCard from "./UserAllOrderCard";
const UserAllOrderItem = () => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">Order #234556</div>
      </Row>
      <UserAllOrderCard />
      <UserAllOrderCard />
      <Row className="d-flex justify-content-between">
        <Col xs="6" className="">
          <div>
            <div className="d-inline">Status</div>
            <div className="d-inline mx-2 stat">Processed</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">EUR4000</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
