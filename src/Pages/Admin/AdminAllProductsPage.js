import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utilities/Pagination";

const AdminAllProductsPage = () => {
  return (
    <Container className="py-3">
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllProducts />
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
