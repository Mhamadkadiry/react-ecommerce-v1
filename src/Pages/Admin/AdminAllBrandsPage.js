import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAddBrand from "../../Components/Admin/AdminAddBrand";

const AdminAllBrandsPage = () => {
  return (
    <Container className="py-md-3">
      <Row className="py-md-3">
        <Col sm="12" xs="12" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="12" xs="12" md="10">
          <AdminAddBrand />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllBrandsPage;
