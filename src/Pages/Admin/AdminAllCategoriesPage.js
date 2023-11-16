import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddCategory from "../../Components/Admin/AdminAddCategory";

const AdminAllCategoriesPage = () => {
  return (
    <Container className="py-md-3">
      <Row className="py-md-3">
        <Col sm="12" xs="12" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="12" xs="12" md="10">
          <AdminAddCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllCategoriesPage;
