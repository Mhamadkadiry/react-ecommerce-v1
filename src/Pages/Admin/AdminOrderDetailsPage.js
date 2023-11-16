import React from "react";
import AdminOrderDetails from "../../Components/Admin/AdminOrderDetails";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

const AdminOrderDetailsPage = () => {
  return (
    <Container className="py-md-3">
      <Row className="py-md-3">
        <Col sm="12" xs="12" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="12" xs="12" md="10">
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPage;
