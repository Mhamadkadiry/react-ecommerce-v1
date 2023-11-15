import React from "react";
import { Container, Row } from "react-bootstrap";
import AdminOrderItem from "./AdminOrderItem";

const AdminAllOrders = () => {
  return (
    <Container>
      <div className="admin-content-text">Orders</div>
      <Row className="justify-content-start">
        <AdminOrderItem />
        <AdminOrderItem />
        <AdminOrderItem />
        <AdminOrderItem />
        <AdminOrderItem />
        <AdminOrderItem />
      </Row>
    </Container>
  );
};

export default AdminAllOrders;
