import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SortHeader from "../../Components/Utilities/SortHeader";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/Utilities/SideFilter";
import ProductContainer from "../../Components/Product/ProductContainer";
import Pagination from "../../Components/Utilities/Pagination";
import GetAllProductHook from "../../Hooks/Product/GetAllProductHook";

const ExploreProductsPage = () => {
  const [productItems, pagination, onPress] = GetAllProductHook();
  let pageCount = 0;
  if (pagination.numberOfPages) {
    pageCount = pagination.numberOfPages;
  }
  return (
    <div style={{ minHeight: "680px" }}>
      <CategoryHeader />
      <Container>
        <SortHeader title={`${productItems.length} Products found`} />
        <Row className="d-flex flex-row">
          <Col sm="12" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="12" xs="12" md="11">
            <ProductContainer products={productItems} title="" btntitle="" />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={onPress} />
        ) : null}
      </Container>
    </div>
  );
};

export default ExploreProductsPage;
