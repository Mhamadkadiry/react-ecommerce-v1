import React from "react";
import { Container, Row } from "react-bootstrap";
import AdminProductCard from "./AdminProductCard";

const AdminAllProducts = () => {
  return (
    <Container>
      <div className="admin-content-text">Products</div>
      <Row className="justify-content-start">
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </Row>
    </Container>
  );
};

export default AdminAllProducts;
