import React from "react";
import AdminAddProduct from "../../Components/Admin/AdminAddProduct";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

const AdminAddProductPage = () => {
  return (
    <Container className="py-md-3">
      <Row className="py-md-3">
        <Col sm="12" xs="12" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="12" xs="12" md="10">
          <AdminAddProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddProductPage;
