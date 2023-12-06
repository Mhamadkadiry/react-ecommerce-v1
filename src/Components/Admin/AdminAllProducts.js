import React from "react";
import { Container, Row } from "react-bootstrap";
import AdminProductCard from "./AdminProductCard";
import GetAllProductHook from "../../Hooks/Product/GetAllProductHook";

const AdminAllProducts = ({ products }) => {
  return (
    <Container>
      <div className="admin-content-text">Products</div>
      <Row className="justify-content-start">
        {products ? (
          products.map((item, index) => (
            <AdminProductCard key={index} item={item} />
          ))
        ) : (
          <h4>No Products Found</h4>
        )}
      </Row>
    </Container>
  );
};

export default AdminAllProducts;
