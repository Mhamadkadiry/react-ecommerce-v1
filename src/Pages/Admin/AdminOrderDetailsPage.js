import React from "react";
import AdminOrderDetails from "../../Components/Admin/AdminOrderDetails";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

const AdminOrderDetailsPage = () => {
  return (
    <Container className="py-3">
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPage;
