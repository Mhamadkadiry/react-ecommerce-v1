import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SortHeader from "../../Components/Utilities/SortHeader";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Utilities/SideFilter";
import ProductContainer from "../../Components/Product/ProductContainer";
import Pagination from "../../Components/Utilities/Pagination";

const ExploreProductsPage = () => {
  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      <Container>
        <SortHeader title="400 Products found" />

        <Row className="d-flex flex-row">
          <Col sm="10" xs="10" md="11">
            <ProductContainer title="" btntitle="" />
          </Col>
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ExploreProductsPage;
