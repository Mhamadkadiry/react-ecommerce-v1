import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "../../Components/User/UserSideBar";
import UserAllOrders from "../../Components/User/UserAllOrders";
const UserAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-md-3">
        <Col sm="12" xs="12" md="2">
          <UserSideBar />
        </Col>
        <Col sm="12" xs="12" md="10">
          <UserAllOrders />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAllOrdersPage;
