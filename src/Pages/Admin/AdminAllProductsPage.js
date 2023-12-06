import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utilities/Pagination";
import ViewProductsHook from "../../Hooks/Admin/ViewProductsHook";

const AdminAllProductsPage = () => {
  const [productItems, pagination, onPress] = ViewProductsHook();
  let pageCount = 0;
  if (pagination.numberOfPages) {
    pageCount = pagination.numberOfPages;
  }
  return (
    <Container className="py-md-3">
      <Row className="py-md-3">
        <Col sm="12" xs="12" md="2">
          <AdminSideBar className="position-sticky" />
        </Col>
        <Col sm="12" xs="12" md="10">
          <AdminAllProducts products={productItems} />
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={onPress} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
